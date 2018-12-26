const path = require('path');
const express = require('express');
const app = express();
const port = 8000;
const host = 'localhost';
app.use(express.urlencoded({
  extended: false
}));
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
const csp = require('content-security-policy');
const cspPolicy = {
  'report-uri': '/reporting',
  'default-src': csp.SRC_NONE,
  'script-src': [ csp.SRC_SELF, csp.SRC_DATA ]
};

const globalCSP = csp.getCSP(csp.STARTER_OPTIONS);
const localCSP = csp.getCSP(cspPolicy);

// This will apply this policy to all requests if no local policy is set
app.use(globalCSP);

app.get('/', (req, res) => {
  res.send('Using global content security policy!');
});

// This will apply the local policy just to this path, overriding the globla policy
app.get('/local', localCSP, (req, res) => {
  res.send('Using path local content security policy!');
});
app.use(express.json());
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'loginForm.html'));
});
app.post('/login', function(req, res) {
  if (req.body) {
    let email = req.body.email;
    let password = req.body.password;
    //console.log(`Username: ${username} and password is ${password}`);
    if (email === 'mary@yahoo.com' && password === '1234') {
      res.json({
        email: email,
        message: 'login OK'
      });

    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(404);
  }
});
app.listen(port, host, function() {
  console.log(`Server ${host} is serving at port ${port}.`);
});
