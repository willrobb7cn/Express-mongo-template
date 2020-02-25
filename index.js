const bodyParser = require("body-parser")
const hbs = require('express-handlebars')
const mongoose = require('mongoose')
const path = require('path')
const express = require('express')
const app = express();

require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@usersignup-lqnk3.mongodb.net/userdb?retryWrites=true&w=majority`,{
useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('.hbs',hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
})); 

app.set('view engine','.hbs');

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000, ()=>{
    console.log('Server listening on port3000');
    
})