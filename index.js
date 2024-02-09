const express = require('express');
const router = require('./routes/book_routes.js');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//connect to mongodb
const dbURI = 'mongodb+srv://wikipock:Wimail77@cluster0.ietubit.mongodb.net/'
mongoose.connect(dbURI)
    .then(() =>app.listen(3000)  ,  console.log('connected to db'))
    .catch((err) => console.log(err));
    
app.use('/', router);








