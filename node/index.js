const express = require("express");

const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan')
const irouter = require('./router');

app.use(morgan("dev"));
app.use(express.json());




app.listen(5000,()=>{
    console.log('Server is rumnning')
});

// app.use('/',(req,res)=>{
//     res.send("Working");
// })




mongoose.connect("mongodb://localhost/crud",
{useUnifiedTopology: true , useNewUrlParser: true},(err)=>{
   if(err) {console.log(err);}
   else {console.log('Database connected');}
});


app.use("/info",irouter);