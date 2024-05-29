require('dotenv').config()

const express=require('express');

const app=express()

let port=3000

app.get("/",(req,res)=>{
    res.send('hello world')
})

app.get("/youtube",(req,res)=>{
    res.send('My youtube channel  is xe_raj')
})

app.listen(process.env.PORT,()=>{
    console.log(` Surver running on  ${port}`)
})