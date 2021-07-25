const express = require('express');
const app = express();
require('./db/conn')
const Student = require("./models/students");
const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/",(req,res)=>{
res.send("Helllo ")
})
app.post("/students",(req,res)=>{
    console.log(req.body)
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).cath((e)=>{
        res.status(400).send(e);
    })    //to save the data
res.send(`hello`)
});


app.listen(port,()=>{
    console.log(`connection is at ${port}`)
});