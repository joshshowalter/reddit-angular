const snoowrap = require('snoowrap');
const express = require('express');
const sls = require('serverless-http');
const app = express();
const utils = require('./utils.js');

const requester = new snoowrap({
  userAgent: 'becausecause',
  clientId: 'TRWSzDOcX4jtow',
  clientSecret: 'eT8y9OfVi5UDTEyOJC9ySd8nksw',
  refreshToken: '26923243-VAbrtHA498O-yIxO_QtejZ0Lt28'
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.get('/api', async (req, res, next) => {
  res.status(200).send('Snoowrap Service is live!');
});

let listing; // declare the listing var that we can reference
app.get('/api/best', async (req, res) => {
  listing = requester.getBest();
  let data = await listing;
  data = data.map(obj => utils.corePayload(obj));
  res.json(data);
});

// return the entire payload instead of the core subset
app.get('/api/bestAll', async (req, res) => {
  const data = await requester.getBest();
  res.json(data);
});

app.get('/api/me', async (req, res) => {
  const data = await requester.getMe();
  res.json(data);
});

const server = sls(app);
module.exports = { server };