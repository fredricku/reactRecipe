'use strict';

const routes=require('express').Router();

const initRoutes = function(storage, sendErrorPage) {
  let dataStorage=storage;

  routes.get('/all', (req,res)=>{
    dataStorage.getAll()
      .then(result => res.send(JSON.stringify(result)))
      .catch(err => sendErrorPage(res, err.message));
    // .then(result=>res.render('allUsers',{result:result}));
    // .catch(err=>sendErrorPage(res,err.message));


  });


  routes.get('/getUser', (req,res)=>
    res.render('getUser',{title:'Get', header:'Get', action:'/getuser'})
  );

  routes.post('/getuser', (req,res)=>{
    if(!req.body) {
      res.sendStatus(401);
    }

    else {
      let userId=req.body.userId;
      dataStorage.get(userId)
        .then(user=>res.render('userPage',{user}))
        .catch(err=>sendErrorPage(res,err.message,'UserError','Oops!'));


    }
  });



  return routes;
};

module.exports=initRoutes;
