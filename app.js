const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const encodedData = Buffer.from(
  `${process.env.USERNAME}/token:${process.env.TOKEN}`
).toString("base64");

const subdomain = process.env.SUBDOMAIN;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${encodedData}`,
};

// Function to create org if one does not already exist
const createOrg = async (req) => {
  const url = `https://${subdomain}.zendesk.com/api/v2/organizations`;
  const config = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      organization: { name: `${req.body.organization}` },
    }),
  };

  const response = await fetch(url, config);

  if (response.ok) {
    console.log("Org successfully created");
  } else {
    response.json().then((data) => console.log(data.details));
  }
};

// Function to check if user exists
const checkUser = async (req, res) => {
  const url = `https://${subdomain}.zendesk.com/api/v2/users/search.json?query=type:user "${req.email}"`;
  const config = {
    headers: headers,
  };
  const response = await fetch(url, config);
  const data = await response.json();

  return {
    users: data.users,
    req,
    res,
  };
};

// Function to create or update user
const createOrUpdateUser = async (user) => {
  const res = user.res;
  // User ID passed from checkUser.
  const userId = user.users[0];
  // URL to pdate or create user based on presence of userId
  const url = `https://${subdomain}.zendesk.com/api/v2/users/${
    userId ? userId.id : ""
  }`;

  const config = {
    // Method to use based on presence of userID
    method: `${userId ? "PUT" : "POST"}`,
    headers: headers,
    body: JSON.stringify({
      user: {
        email: user.req.email,
        name: user.req.name,
        organization: {
          name: `${user.req.organization}`,
        },
        verified: true,
        tags: ["VIP"],
      },
    }),
  };

  const response = await fetch(url, config);

  if (response.ok) {
    res.redirect("/");
    console.log("Success");
  } else {
    res.json({ msg: `Error.. ${response.status}: ${response.statusText}` });
  }
};

app.post("/submit", (req, res) => {
  // Creates Org if one does not exist
  createOrg(req).then(() => {
    // Checks if user exists
    checkUser(req.body, res).then((data) => {
      // Update or create user based on userId
      createOrUpdateUser(data);
    });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
