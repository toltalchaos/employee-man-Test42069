// require dotenv package to read the properties in the .env file.
// never upload .env file to git.
require('dotenv').config()
//import the express module
const express = require('express');
// import the path utils from Node.
const path = require('path');

const cors = require('cors');
 

// create an instance of express
const app = express()
 
// read the value of PORT NODE_EVN variable in the .env file
// when the index.js file starts up this file is read in and
// we can set configuration variables for the application.
// never upload to git...
const PORT =  process.env.PORT || 5000 

 

//middleware
//To get access to the name value pairs send in the message Body of POST Request.
 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
 app.use(cors());

//Middleware Serving Static Pages from client directory
// second parameter is an configuration object of how we want
// the static file server to run.
app.use(express.static(path.join(__dirname, "../client"), {extensions: ["html", 'htm']})
);

 
 // Routing Middleware.  
 // login route.
 //access form data post from the breq body
 //tell express to use body data
 //setup - see -  app.use(express.urlencoded({extended:true}))
 app.post('/login', (req, res)=>{
   //console.log(req.body)
   //pass the user email and password to a login service.
   //login service will read user file and check email........


   res.sendFile(path.join(__dirname, "../client/dashboard.html"))
 })

 //get http ==> perams query perams url?search=param
 //app.get('/api/v1/teams', (req,res) => {  })

// Final Middleware 
// Catch all for any request not handled while express was
// processing requests. 
// Returns 404 Page from the client directory.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../client/404.html"));
});



// Tell express app to listen for incomming request on a specific PORT
app.listen(PORT, () => {
  console.log(`server started on http://localhost:5000`);
});
