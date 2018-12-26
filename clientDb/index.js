'use strict';

const http=require('http');
const path=require('path');
const express=require('express');

const app=express();
const {host,port,debug}=require('./serverConfig');

const server=http.createServer(app);
//this will require the initDataStorage function and call it
//with debug parameter value from serverConfig.json
const userStorage=require('./userDb')(debug);

const statusHandling=[sendErrorPage,sendStatusPage];

// const initRoutes=require('./routes/getroutes');
// initRoutes(personStorage,...statusHandling);

const getroutes=require('./routes/getroutes')(userStorage,...statusHandling);
const insertroutes=require('./routes/insertroutes')(userStorage,...statusHandling);
const deleteroutes=require('./routes/deleteroutes')(userStorage,...statusHandling);
const updateroutes=require('./routes/updateroutes')(userStorage,...statusHandling);
const loginroutes=require('./routes/loginroutes')(userStorage,...statusHandling);
// const loginserver=require('./routes/loginserver');

app.use(express.urlencoded({extended:false}));
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
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'pageViews'));

app.use(express.static(path.join(__dirname,'public')));
app.use('/',getroutes);
app.use('/', insertroutes);
app.use('/',deleteroutes);
app.use('/',updateroutes);
app.use('/',loginroutes);
app.use(express.json());
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'menu.html')));

app.route('/getroutes')
  .get((req,res)=>res.json(userStorage));

console.log(userStorage);

// app.post('/api/Auth', (req,res)=>{
//   res.status(400).json({error: {global:'invalid credentials'}});
// });
// app.get('/*', (req,res)=>{
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.route('/resources/:userId')
//   .get((req,res)=>res.json(userStorage[req.params.number]));
server.listen(port,host,()=>
/*eslint-disable no-console*/
  console.log(`Server ${host} running at ${port}`)
);

function sendErrorPage(res, message='Error', title='Error', header='Error') {
  sendStatusPage(res, message, title,header);
}

function sendStatusPage(res, message='Status', title='Status', header='Status'){
  return res.render('statusPage',{title:title,header:header,message:message});
}
