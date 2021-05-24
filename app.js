const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const expect = require('chai').expect;
const converter = require('../public/converter'); 
const { render } = require('ejs');


//Express App
const app = express();

//Connect to MongoDB
const dbURI = 'mongodb+srv://youssef_test:youssefTest@cluster0.xwazt.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(/*This number refers to the port being listened to*/3000))
    .then(() => console.log('connected to database'))
    .catch((err) => { 
        console.log(err)
    });

//Register view engine
app.set('view engine', 'ejs');
app.set('views', 'public');

//Middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); 

//Routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
})


app.get('/api/random', (req, res) => {
    res.send({ number: Math.floor(Math.random() * 1023)})
})

/*
app.get('/api/custom_random/:num', (req, res) => { //http://localhost:3000/api/custom_random/300
    res.send({ number: Math.floor(Math.random() * Number(req.params.num))})
})

app.get('/api/vowels/:word' (req, res) => {
    // nånting räkna vokale
    res.send({vowels: 2})
})
*/

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
    console.log("a request for About page was answered");
})

// blog Routes

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  
app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1 })
        .then((result) => {
            res.render('index', {title: 'All blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err)
        });
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err)
        });
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' })
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', {blog: result, title: 'Blog Details'})
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create'});
})

// 404 Page - Must be at the bottom of page!
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
    console.log("Error met and responded too");
})