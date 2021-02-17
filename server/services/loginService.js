/*
        Login service will authenticate an Email and Password to Return a user credential object
        OR return undefined

     // node server/services/loginService.js
*/

const fileService = require('./fileService');


//passing in credential object 
//eventually export.authenticate 
//return BOOLEAN
exports.authenticate = (credential) => {
    const {email, password} = {...credential};
    const users = fileService.getFileContents('../data/users.json');
    //console.log(users);

    // test to find a matching value
    const inuser = users.find((user) => {
        if(user.email == email && user.password == password){

            console.log('FOUND USER');
            return user;
        }
        else{
            console.log('NO USER');
            
        }
    })
    //console.log(inuser)

    return inuser;
}


//temporarily passing in data - would normally be called in by the redirect and get
// console.log('GOOD DATA')
// authenticate({username:"jim", email:"user@gmail.com", password:"1234"})
// console.log('BAD DATA')
// authenticate({username:"baddata", email:"baddata@gmail.com", password:"baddata"})