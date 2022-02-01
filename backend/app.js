const express = require("express");
const fetch = require("node-fetch");
const validator = require("validator");
require("dotenv").config();

const app = express();

// Include auth
const auth = require("./auth.js");

// Include mail for user notifications
const mail = require("./mailer.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Adding CORS headers to response
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});

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
      console.log('Org found by name');
      const matched_org = data.results.find(({name}) => name === req.body.organization);
      createOrUpdateUser(req, res, matched_org);
    });
  }
  else {
    res.status(response.status).send({error: `Cannot find existing org: ${response.statusText}`});
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
        organization_id: org.id,
        user_id: user.id
      }
    }),
  };

  const response = await fetch(url, config);

  if (response.ok) {
    mail.notifyUser(user.email);
    res.status(response.status).send("User and org created/updated.");
  }
  else if (response.status===422){
    console.log(`User already belongs to the organization. User/org updates complete.`);
    mail.notifyUser(user.email);
    res.status(201).send("User and org created/updated.");
  }
  else {
    res.status(response.status).send({error:`Cannot create org membership: ${response.statusText}`});
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
      createOrgMembership(res, data.user, org);
    });
  } else {
    res.status(response.status).send({error:`Cannot create/update user: ${response.statusText}`});
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
    console.log(`Error creating org...${response.status}: ${response.statusText}...finding existing org by name`);
    findOrg(req, res);
  }
  else {
    res.status(response.status).send({error:`Cannot create org: ${response.statusText}`});
  }
};

// Validating user input sent from FE
const validateData = (req, res) => {

  const checkedEmail = validator.isEmail(req.body.email + '');
  const checkedName = validator.isAlpha(req.body.name + '', 'en-US', {ignore: " -'"})
  const nameLength = validator.isLength(req.body.name + '', {min: 4, max: 60});
  const checkedOrg = validator.isLength(req.body.organization + '', {min: 4, max: 80});

  if(!checkedEmail){
    res.status(400).send({error: `Email ${req.body.email} is invalid. Please check your details and try again`})
  } else if(!checkedName || !nameLength) {
    res.status(400).send({error: `Name ${req.body.name} is invalid. Please check your details and try again`})
  } else if(!checkedOrg) {
    res.status(400).send({error: `Organization ${req.body.organization} is invalid. Please check your details and try again`})
  } else {
    // Proceed to create or update org on successful data validation
    createOrUpdateOrg(req, res);
  }
}

app.post("/submit", auth.authenticateToken, (req, res) => {
  // Start by validating submission data
  validateData(req, res);
});

app.post("/authenticate", (req, res) => {
  // Return a JWT token to authorize requests
  auth.generateToken(req, res);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));