const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth')

const password = require('../middleware/password')


router.post('/Signup', password, userCtrl.Signup);
router.post('/Login', userCtrl.Login);

module.exports = router;