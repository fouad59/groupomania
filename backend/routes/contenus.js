const express = require('express');
const router = express.Router();

const contenusCtrl = require('../controllers/contenus');

router.get('/', (req, res) => {
    //res.setHeader('Content-Type', 'text/html');
    res.json({message: 'bonjour sur mon server'});
});
/*server.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon server</h1>')
});
/*
/*
const saucesCtrl = require('../controllers/sauces');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, saucesCtrl.createSauce);
router.post('/:id/like', auth, saucesCtrl.likeSauce);
router.put('/:id',auth, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.get('/', auth, saucesCtrl.getAllSauces);
*/

module.exports = router;
