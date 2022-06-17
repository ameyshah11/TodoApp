const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../model/users');

const createUser = (req,res,next)=>{
    const {name,email,password} = req.body;
    userModel.create({
        name,
        email,
        password
    },(err,result)=>{
        if(err)
        {
            next(err);
        }
        else
        {
            res.json({
                status:"Success",
                message:"User Added Successfully",
                data:{
                    users:result
                }
            })
        }
    })
}

const loginUser = (req,res,next)=>{
    userModel.findOne({email:req.body.email},(err,result)=>{
        if(err)
        {
            next(err);
        }
        else
        {
            if(bcrypt.compare(req.body.password,result.password))
            {
                const token = jwt.sign({id:result._id},req.app.get('secretKey'),{expiresIn:'1h'})
                res.json({
                    status:"Success",
                    message:"Logged in successfully",
                    data:{
                        users:result,
                        token : token
                    }
                })
            }
        }
    })
}

module.exports = {createUser,loginUser}