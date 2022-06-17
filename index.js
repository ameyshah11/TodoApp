const express = require('express');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// port constant consist of port information from process env or else it will use port 5000
const port = process.env.PORT||5000;
require('dotenv').config();

app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/',(req,res)=>{
    res.json({
        status:"Success",
        message:"Welcome to TODO App"
    })
})

app.listen(port || 80,()=>{
    console.log(`Successfully running on the port ${port}`);
})

const mongoDBURI = "mongodb+srv://ameyshah11:amey123@cluster0.utzxr.mongodb.net/?retryWrites=true&w=majority"; 
mongoose.connect(mongoDBURI)
.then(()=>{
    console.log("Database connection established");
})
.catch((err) =>{
    console.log(err);
})

app.set('secretKey','asdjfsjdfjjsfsdfjk');

const verifyUser = (req,res,next)=>{
    jwt.verify(req.headers['user-token'],req.app.get('secretKey'),(err,result)=>{
        if(err)
        {
            res.json({
                message:err
            })
        }
        next(err);
    })
}
const userRouter = require('./app/api/routes/users');
const todoRouter = require('./app/api/routes/todo');
app.use('/user',userRouter);
app.use('/todo',verifyUser,todoRouter);
