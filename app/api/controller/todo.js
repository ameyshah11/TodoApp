const todoModel = require('../model/todo')

// Create Todo
const createTodo = (req,res,next) => {
    const {name,creation_date} = req.body;

    todoModel.create({
        name,
        creation_date
    },(err,result)=>{
        if(err)
        {
            next(err)
        }
        else
        {
            res.json({
                status:"Success",
                message:"Todo Added Successfully",
                data:{
                    todo : result
                }
            })
            
        }
    })
}

// Read All Todo

const readAllTodo = (req,res,next)=>{
    todoModel.find({},(err,result)=>{
        if(err)
        {
            next(err);
        }
        else
        {
            res.json({
                status:"Success",
                message:"Todo retrieved successfully",
                data:{
                    todo:result
                }
            })
        }
    })
}


// Read Todo by id

const readTodoById = (req,res,next)=>{
    todoModel.findById(req.params.id,(err,result)=>{
        if(err)
        {
            next(err);
        }
        else
        {
            res.json({
                status:"Success",
                message:"Todo fetch by id",
                data:{
                    todo:result
                }
            })
        }
    })
}

// Update Todo by ID

const updateTodoById = (req,res,next) =>{

    todoModel.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
        if(err)
        {
            next(err);
        }
        else
        {
            res.json({
                status:"Success",
                message:"Todo updated by id",
                data:{
                    todo:result
                }
            })
        }
    })
}

// Delete todo by ID
const deleteTodoById = (req,res,next) => {
    todoModel.findByIdAndRemove(req.params.id,(err,result)=>{
        if(err)
        {
            next(err)
        }
        else
        {
            res.json({
                status:"Success",
                message:"Todo deleted by id",
                data:{
                    todo:result
                }
            })
        }
    })
}
module.exports = {createTodo,readAllTodo,readTodoById,updateTodoById,deleteTodoById}

