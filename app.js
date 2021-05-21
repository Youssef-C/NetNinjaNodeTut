const express = require('express'); 

//Express App
const app = express();

//request listener
app.listen(/*This number refers to the port being listened to*/3000);   

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
    console.log("a request for Home page was answered");
});

app.get('/about', (req, res) => {
    res.sendFile('./public/about.html', { root: __dirname });
    console.log("a request for About page was answered");
});

//Redirects
app.get('/about-us', (req, res) => {
res.redirect('/about');
})

// 404 Page - Must be at the bottom of page!
app.use((req, res) => {
    res.status(404).sendFile('./public/404.html', { root: __dirname });
    console.log("Error met and responded too");
})