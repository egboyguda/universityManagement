// dd gin require an express app
const express = require('express')// import mongo
const app = express() //dd gn execute an express app
const  mongoose = require('mongoose')// dd gn import an mongo
const path = require('path')
const methodOverride = require('method-override');

//ini cya pag handle error 
//an constructor sun (message tas status code)
//import
const ExpressError = require('./utils/ExpressError')


//dd para sa ejs
app.set('view',path.join(__dirname,'views'));
app.set('view engine','ejs')

//dd para ma parse an value sa form sa html
app.use(express.urlencoded({extended:true}))

//man para magamit mo an PUT DELETE PATCH 
//na method
//middleware
app.use(methodOverride('_method'))


app.get("/",(req,res)=>{
    res.render('homes')
})















app.listen(3000,()=>{
    console.log('app is running on port 3000')
})