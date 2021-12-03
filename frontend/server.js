
const snoowrap = require('snoowrap');
const express = require('express');
const http = require('http');
const app = express();

// Create a new snoowrap requester with OAuth credentials.
const requester = new snoowrap({
  userAgent: 'becausecause',
  clientId: 'TRWSzDOcX4jtow',
  clientSecret: 'eT8y9OfVi5UDTEyOJC9ySd8nksw',
  refreshToken: '26923243-VAbrtHA498O-yIxO_QtejZ0Lt28'
});

const PORT = process.env.PORT; 
var server = app.listen(PORT, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
// const server = http.createServer(app);
// server.listen(PORT, () => {
//   console.log(`server running on ${PORT}`);
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

let listing;
app.get('/api/best', async function(req, res) {
  listing = requester.getBest();
  const data = await listing;
  res.json(data);
});

app.get('/api/best_more', async function(req, res) {
  listing = listing.fetchMore({amount: 25, append: true});
  const data = await listing;
  res.json(data);
});

app.get('/api/me', async function(req, res) {
  const data = await requester.getMe();
  res.json(data);
});

app.get('/api/upvote', async function(req, res) {
  const id = req.query.id;
  const data = await requester.getSubmission(id).upvote();
  res.json(data);
});

app.get('/api/downvote', async function(req, res) {
  const id = req.query.id;
  const data = await requester.getSubmission(id).downvote();
  res.json(data);
});

app.get('/api/post', async function(req, res) {
  const id = req.query.id;
  const data = await requester.getSubmission(id).fetch();
  res.json(data);
});


const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// app.listen(PORT, () => {
//   console.log(`server running on port ${PORT}`);
// });

// ########################### MONGO #############################
// connect to the database
/*
const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://admin:admin@cluster1-f2q0b.azure.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(connectionString, {useNewUrlParser: true}, function(err, db) {
  if (err) {
    console.log('err: ', err);
  } else {
    console.log('Boom, we are connected');
  }
});
*/
