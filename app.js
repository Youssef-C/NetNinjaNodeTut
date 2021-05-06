const express = require('express'); 

//Express App
const app = express();

//request listener
app.listen(/*This number refers to the port being listened to*/3000);   

app.get('/', (req, res) => {
    
    res.send("<p>Home Page</p>");
    console.log("a request was answered");

});

app.get('/about', (req, res) => {
    
    res.send("<p>About Page</p>");
    console.log("a request for About page was answered");

});