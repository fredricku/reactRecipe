'use strict';

const routes=require('express').Router();

module.exports=(dataStorage,sendErrorPage,sendStatusPage)=>{
  routes.get('/deleteuser', (req,res)=>
    res.render('getUser',{title:'Remove',header:'Remove',action:'/deleteuser'})
  );

  routes.post('/deleteuser', (req,res)=>{
    if(!req.body || !req.body.userId) {
      res.sendStatus(500);
    }
    else{
      dataStorage.delete(req.body.userId)
        .then(message=>sendStatusPage(res,message))
        .catch(err => sendErrorPage(res,err.message));
    }
  });

  return routes;
};
