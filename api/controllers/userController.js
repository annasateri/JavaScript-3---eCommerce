const router = require('express').Router();
const userModel = require('../models/users/userModel');


router.get('/', userModel.getUsers);

router.get('/:id', userModel.getOneUser);

router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);

router.patch('/:id', userModel.updateUser);

router.delete('/:id', userModel.deleteUser);


module.exports = router;