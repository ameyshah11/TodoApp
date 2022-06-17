const express = require('express');
const router = express.Router();
const userController =  require('../controller/users');

router.post('/createUser',userController.createUser);
router.get('/loginUser',userController.loginUser);
module.exports = router;