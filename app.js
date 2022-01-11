const express = require("express");
const res = require("express/lib/response");
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

const httpHeaders = {
  "Content-Type": "application/json",
  Authorization: `Basic ${encodedData}`,
};
const headers = new fetch.Headers(httpHeaders);

// Function to create org if one does not already exist
const createOrg = async (req) => {
  const url = `https://${subdomain}.zendesk.com/api/v2/organizations`;
  const config = {
    method: "POST",
    headers,
    body: JSON.stringify({
      organization: { name: `${req.body.organization}` },
    }),
  };
  // Call to create org
  const response = await fetch(url, config);
  const data = await response.json();

  // Function to get organization ID if org already exists
  const getExistingOrg = async () => {
    const checkOrg = `https://${subdomain}.zendesk.com/api/v2/search.json?query=type:organization "${req.body.organization}"`;
    const response = await fetch(checkOrg, { headers });
    const data = await response.json();
    console.log(
      `An organization with the name ${req.body.organization} already exists. The organization will be added to the users profile.`
    );
    // Searches org data array for exact match with organization name and returns object
    const org = data.results.find((o) => o.name === req.body.organization);

    return org.id;
  };

  // Returns organization ID if org is newly created else searches
  // for org data and returns existing ID
  if (response.ok) {
    console.log("Org successfully created");
    return data.organization.id;
  } else if (response.status === 422) {
    return getExistingOrg();
  } else {
    res.json({ msg: `Error.. ${response.status}: ${response.statusText}` });
  }
};

// Function to create or update user
const createOrUpdateUser = async (org, req, res) => {
  // URL to update or create user based on presence of userId
  const url = `https://${subdomain}.zendesk.com/api/v2/users/create_or_update`;

  const config = {
    // Method to use based on presence of userID
    method: "POST",
    headers,
    body: JSON.stringify({
      user: {
        email: req.body.email,
        name: req.body.name,
        verified: true,
        tags: ["VIP"],
      },
    }),
  };

  // Call to create or update user
  const response = await fetch(url, config);
  const data = await response.json();

  return {
    userId: data.user.id,
    org,
    res,
  };
};

// Adds organization using the organization_memberships endpoint to account for multiple
// organizations on a user profile.
const updateOrg = async ({ userId, org, res }) => {
  const url = `https://${subdomain}.zendesk.com/api/v2/organization_memberships`;

  const config = {
    method: "POST",
    headers,
    body: JSON.stringify({
      organization_membership: {
        user_id: userId,
        organization_id: org,
      },
    }),
  };

  const response = await fetch(url, config);
  const data = await response.json();

  if (response.ok || response.status === 422) {
    res.redirect("/");
    console.log("Success");
  } else {
    console.log(data.details);
    res.json({ msg: `Error.. ${response.status}: ${response.statusText}.` });
  }
};

app.post("/submit", (req, res) => {
  // Creates new Org or gets existing Org ID
  createOrg(req)
    // Create or update user based on userId
    .then((data) => createOrUpdateUser(data, req, res))
    // Add organization to user profile
    .then((userData) => updateOrg(userData));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
