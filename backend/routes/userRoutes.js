const express = require('express');
const router = express.Router();
const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/userController');

//route to create user
router.post('/register', createUser);
//route to get all users
router.get('/', getUsers);
//route to update the user details using ID parameter
router.put('/:id', updateUser);
//route for deleting user using ID as parameter
router.delete('/:id', deleteUser);

module.exports = router;
