'use strict';
const routes=require('express').Router();
const initRoutes=function(storage,  sendErrorPage, sendStatusPage) {
  let dataStorage=storage;

  routes.get('/loginform', (req,res)=>
    res.render('loginform', {
      title:'Login',
      header:' user logged in',
      action:'/login',
      emailaddress:{value:'', readonly:''},
      password:{value:'', readonly:''}
    })
  );

  routes.post('/login', async (req,res)=> {
    if(!req.body.emailaddress || !req.body.password) {
      res.sendStatus(401);
    }
    else{
      dataStorage.post(req.body)
        .then(message=>sendStatusPage(res,'User logged in'))
        .catch(error=>sendErrorPage(res, error.message));
    }
  });
  // routes.post('/login', (req,res)=> {
  //   if(!req.body) {
  //     res.sendStatus(401);
  //   }
  //   else{
  //     let email=req.body.email;
  //     dataStorage.get(email)
  //       .then(message=>sendStatusPage(res,'User logged in'))
  //       .catch(error=>sendErrorPage(res, error.message));
  //   }
  // });


  //
  //   routes.post('/login', async(req,res)=> {
  //
  //     if (!req.body.email || !req.body.password) {
  //       res.sendStatus(401);
  //
  //     }
  //     else {
  //       let passwordOK =
  //     await dataStorage.checkPassword(req.body.email,
  //       req.body.password);
  //       if (!passwordOK) {
  //         (message=>sendStatusPage(res,'User logged in'));
  //         //       .catch(error=>sendErrorPage(res, error.message));
  //       }
  //     }
  //
  //
  //   });
  //
  //   return routes;
  // };
  //
  //
  // module.exports= initRoutes;
  // routes.post('/login', (req,res)=> {
  //   if(!req.body) {
  //     res.sendStatus(401);
  //   }
  //   else{
  //     dataStorage.post(req.body)
  //       .then(message=>sendStatusPage(res,message))
  //       .catch(error=>sendErrorPage(res, error.message));
  //
  // }
  return routes;

};
module.exports= initRoutes;
