const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController.getAllUsers);

router.post('/', authController.createUser);

router.put('/:id', authController.updateUser);

router.delete('/:id', authController.deleteUser);

module.exports = router;
