
// Import express framework 
const express = require('express');

// create app using express 
const app = express();

// Port Communication Endpoint
const port = 3000;

// Get REquest 
app.get("/",(req,res) => {
    res.send(`<h1>This is Home Page</h1>`)
})

// Response on port if any activity done at port 
app.listen(port,()=>{
    console.log(`Running at ${port}`);
})

// Add Middleware 
app.use(express.json())


// // Post REquest 
// app.post("/car",(req,res) => {

// })

app.post('/api/cars',(req,res)=>{
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("car sumitted succesfully");
})
const DB= 'mongodb://127.0.0.1/test'


const mongoose = require('mongoose');
mongoose.connect(DB)
 .then(()=>{console.log("Connection succesfull")})
 .catch((error)=>{console.log("Recieved an error",error)});



