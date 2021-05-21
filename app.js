const express = require('express'); 

//Express App
const app = express();

//Register view engine
app.set('view engine', 'ejs');
app.set('views', 'public');

//request listener
app.listen(/*This number refers to the port being listened to*/3000);   


app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet:'Lorem ipsum'},
        {title: 'Mario finds start', snippet:'Lorem ipsum'},
        {title: 'How to defeat bowser', snippet:'Lorem ipsum'}
    ];
    res.render('index', { title: 'Home', blogs });
    console.log("request for home page answered")
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
    console.log("a request for About page was answered");
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create'});
})

// 404 Page - Must be at the bottom of page!
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
    console.log("Error met and responded too");
})