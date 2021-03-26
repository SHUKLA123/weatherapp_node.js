const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,"../public")));

app.set('view engine', 'hbs');


app.get('',(req,res) =>{
    res.render('index')
})
app.get('/about', (req, res)=>{
    res.render('about')
})
app.get('/weather',(req,res) =>{
    res.render('weather')
})
app.get('*',(req,res) =>{
    res.render("404error",{
        errorMsg: 'Oops! Page Not Found'
    })
})
app.listen('8000','127.0.0.1');