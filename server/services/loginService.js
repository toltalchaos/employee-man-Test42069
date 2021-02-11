/*
        Login service will authenticate an Email and Password to Return a true or false response 
        false = keeps users on loginpage
        true= redirect user to dashboard

*/

const fileService = require('./fileService');


//passing in credential object 
//eventually export.authenticate 
const authenticate = (credential) => {
    const {email, password} = {...credential};
    //console.log(email,password)                                               // node services/loginService.js
    const users = fileService.getFileContents('../data/users.json');
    // test to find a matching value
    // sort, filter, map, reduce, find, foreach... loop types

}

authenticate({username:"guy", email:"user@gmail.com", password:"1234"})