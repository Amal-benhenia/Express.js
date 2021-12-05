const express = require('express');
const path = require('path');
const moment = require ('moment');
const app =express();

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static('views'));
app.use('/css', express.static(__dirname + 'views/css'))
app.use('/img', express.static(__dirname + 'views/img'))

app.use(function (req, res, next) {
    if ( moment().format("HH:mm:ss").isBetween("09:00:00", "17:00:00") ){
        res.render('Please check out our website between 9:00 and 17:00')
        
    }
    else {
        next();
    }
    
  });
app.get('/', (req, res)=> {
    res.render("home")
});
app.get('/contact', (req,res)=> {
    res.render ("contact")
        });
app.get('/services', (req, res)=> {
    res.render("services")
})


app.listen('3000')