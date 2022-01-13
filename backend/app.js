const express = require('express');
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');
const contenusRoutes = require('./routes/contenus');
const userRoutes = require('./routes/user');
const { dirname } = require('path');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//---intercepte toutes les requêtes qui contiennent du JSON pour le mettre à disposition sur l'objet requête dans req.body
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/contenus', contenusRoutes);
app.use('/api/users', userRoutes);

module.exports = app;