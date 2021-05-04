const express = require('express'); 

//Express App
const app = express();

//request listener
app.listen(3000);   

app.get('/', (req, res) => {
    
    res.send("<p>Home Page</p>");

});