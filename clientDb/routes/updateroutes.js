'use strict';

const routes=require('express').Router();

module.exports=(dataStorage, sendErrorPage, sendStatusPage) =>{

  routes.get('/updateform', (req,res)=>
    res.render('updateform',{
      title:'Update user',
      header:'Update user data',
      action:'/updatedata',
      userId:{value:'',readonly:''},
      firstname:{value:'',readonly:'readonly'},
      lastname:{value:'', readonly:'readonly'},
      address:{value:'',readonly:'readonly'},
      emailaddress:{value:'', readonly:'readonly'},
      password:{value:'', readonly:'readonly'}
    })
  );

  routes.post('/updatedata', async (req,res)=>{
    try{
      let user = await dataStorage.get(req.body.userId);
      res.render('form',{
        title:'Update user',
        header:'Update user data',
        action:'/updateuser',
        userId:{value:user.userId, readonly:'readonly'},
        firstname:{value:user.firstname, readonly:''},
        lastname:{value:user.lastname, readonly:''},
        address:{value:user.address, readonly:''},
        emailaddress:{value:user.emailaddress, readonly:''},
        password:{value:user.password, readonly:''}
      });
    }
    catch(err) {
      sendErrorPage(res,err.message);
    }
  });

  routes.post('/updateuser', (req,res)=>{
    if(!req.body) {
      res.sendStatus(500);
    }
    else{
      dataStorage.update(req.body)
        .then(message=>sendStatusPage(res, message))
        .catch(err=>sendErrorPage(res, err.message));
    }
  });

  return routes;
};
