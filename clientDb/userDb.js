'use strict';

const Database = require('./database');
const sqlStatements = require('./sqlStatements');
const options = require('./options');

// const personDb=new Database({
//   host:'localhost','use strict';
const allSql=sqlStatements.getAllSql.join(' ');
const getUserSql=sqlStatements.getUserSql.join(' ');
const insertSql=sqlStatements.insertUserSql.join(' ');
const deleteSql=sqlStatements.deleteUserSql.join(' ');
const updateSql=sqlStatements.updateUserSql.join(' ');

class UserDatabase{
  constructor(options, debug=false){
    this.userDb=new Database(options, debug);
  }
  getAll() {
    return new Promise(async (resolve, reject)=>{
      try{
        let result = await this.userDb.doQuery(allSql);
        resolve(result);
      }
      catch(err) {
        reject(fatalError(err));
      }
    });
  }
  get(userId) {
    return new Promise(async (resolve,reject)=>{
      try{
        let result= await this.userDb.doQuery(getUserSql, +userId);
        if(result.length===0) {
          reject(new Error('user unknown'));
        }
        else {
          resolve(result[0]);
        }
      }
      catch(err){
        reject(fatalError(err));
      }
    });
  }
  post(user) {
    return new Promise( async (resolve,reject)=>{
      try{
        let result= await this.userDb.doQuery(getUserSql,

          user.emailaddress,
          user.password

        );
        if(result.affectedRows===0) {
          reject(new Error('No person was added'));
        }
        else{
          resolve(`user with id ${user.email} was is ok`);
        }
      }
      catch(err) {
        reject(fatalError(err));
      }
    });
  }

  insert(user) {
    return new Promise( async (resolve,reject)=>{
      try{
        let result= await this.userDb.doQuery(insertSql,

          user.firstname,
          user.lastname,
          user.address,
          user.emailaddress,
          user.password

        );
        if(result.affectedRows===0) {
          reject(new Error('No person was added'));
        }
        else{
          resolve(`user with emailaddress ${user.emailaddress} was added`);
        }
      }
      catch(err) {
        reject(fatalError(err));
      }
    });
  }
  delete(userId){
    return new Promise( async (resolve, reject)=>{
      try{
        let result= await this.userDb.doQuery(deleteSql, +userId);
        if(result.affectedRows===0) {
          reject(new Error(`No person with given Id ${userId}. Nothing deleted.`));
        }
        else{
          resolve(`user with id ${userId} was deleted`);
        }
      }
      catch(err) {
        reject(fatalError(err));
      }
    });
  }

  update(user){
    return new Promise( async (resolve,reject)=>{
      try{
        let result= await this.userDb.doQuery(updateSql, user.firstname,
          user.lastname, user.address, user.emailaddress, user.password, +user.userId);
        if(result.affectedRows===0) {
          reject(new Error('No data was updated'));
        }
        else{
          resolve(`Customer with id ${user.userId} was updated`);
        }
      }
      catch(err) {
        reject(fatalError(err));
      }
    });
  }

} //end of class

module.exports=function initDataStorage(debug=false) {
  return new UserDatabase(options, debug);
};

function fatalError(err) {
  return new Error(`Sorry! Error in our program. ${err.message}`);
}

//   port:3306,
//   user:'saku',
//   password:'secret',
//   database:'persondatabase'
// }, true);
