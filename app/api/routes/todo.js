const todoController = require('../controller/todo');
const express = require('express');
const router = express.Router();

router.post('/createTodo',todoController.createTodo);
router.get('/readAllTodo',todoController.readAllTodo);
router.get('/readTodoById/:id',todoController.readTodoById);
router.put('/updateById/:id',todoController.updateTodoById);
router.delete('/deletById/:id',todoController.deleteTodoById);

module.exports = router;