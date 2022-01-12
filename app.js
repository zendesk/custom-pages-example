const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const subdomain = process.env.SUBDOMAIN;
const encodedData = Buffer.from(`${process.env.USERNAME}/token:${process.env.TOKEN}`).toString("base64");
const headers = {
      "Content-Type": "application/json",
      Authorization: `Basic ${encodedData}`
    };


// Find the existing org
const findOrg = async (req, res) => {

  const url = `https://${subdomain}.zendesk.com/api/v2/search.json?query=type:organization "${req.body.organization}"`;
  const config = {
    method: "GET",
    headers: headers
  };

  const response = await fetch(url, config);
  
  if (response.ok) {
    response.json().then(data => {
      console.log("Success Finding Org");
      const matched_org = data.results.find(({name}) => name === req.body.organization);
      createOrUpdateUser(req, res, matched_org);
    });
  }
  else {
    res.json({ msg: `Error finding existing org.. ${response.status}: ${response.statusText}` });
  }
};

// Create the org membership
const createOrgMembership = async (res, user, org) => {

  const url = `https://${subdomain}.zendesk.com/api/v2/organization_memberships`;
  const config = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      organization_membership: {
        organization_id: org,
        user_id: user
      }
    }),
  };

  const response = await fetch(url, config);

  if (response.ok) {
    res.redirect("/");
    console.log("Success");
  }
  else if (response.status===422){
    console.log(`User already belongs to the organization. User/org updates complete.`);
    res.redirect("/");
  }
  else {
    res.json({ msg: `Error creating org membership.. ${response.status}: ${response.statusText}` });
  }
};

// Create or update user
const createOrUpdateUser = async (req, res, org) => {
  const url = `https://${subdomain}.zendesk.com/api/v2/users/create_or_update`;
  const config = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      user: {
        email: req.body.email,
        name: req.body.name,
        verified: true,
        tags: ["VIP"],
      },
    }),
  };

  const response = await fetch(url, config);

  if (response.ok) {
    response.json().then(data => {
      console.log("User created/updated");
      createOrgMembership(res, data.user.id, org.id);
    });
  } else {
    res.json({ msg: `Error creating/updating user.. ${response.status}: ${response.statusText}` });
 
  }
};


// Create or update the org
const createOrUpdateOrg = async (req, res) => {

  const url = `https://${subdomain}.zendesk.com/api/v2/organizations/create_or_update`;
  const config = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({organization: {name: req.body.organization}})
  };

  const response = await fetch(url, config);
  

  if (response.ok) {
    response.json().then(data => {
     console.log('Org created/updated');
     createOrUpdateUser(req, res, data.organization);
   });
  } 
  else if (response.status===422){
    // Find the existing org by name if it already exists
    console.log(`Error creating org.. ${response.status}: ${response.statusText}...finding existing org by name`);
    findOrg(req, res);
  }
  else {
    res.json({ msg: `Error creating org.. ${response.status}: ${response.statusText}` });
  }
};


app.post("/submit", (req, res) => {
  //Start by creating the org
  createOrUpdateOrg(req, res);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));