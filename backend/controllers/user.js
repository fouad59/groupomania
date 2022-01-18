// GESTION DU COMPTE

// import
const bcrypt = require('bcrypt');
require('dotenv').config();
const models = require('../models');

let auth = require('../middleware/auth');

module.exports = {

    // signup pour accéder en tant que nouvel utilisateur
    Signup: function (req, res, next) {

        let email = req.body.email;
        let username = req.body.username;
        let password = req.body.password;
        let bio = 'bio';

        if ( email == null || username == null || password == null) {
            return res.status(400).json({ error: 'champ non renseigné !' });
        }

        bcrypt.hash(password, 10)
            .then(bcrypted => {
                let newUser = models.User.create({
                    email: email,
                    username: username,
                    password: bcrypted,
                    bio: bio,
                    isAdmin: 0
                })
                return newUser;
            })
            .then(newUser => {
                console.log(newUser)
                res.status(201).json({ 'userId': newUser.id })
            })
            .catch(error => res.status(500).json({ error }));
    },

    // login pour accéder en tant qu'utilisateur existant
    Login: function (req, res, next) {

        let email = req.body.email;
        let password = req.body.password;

        if ( email == null || password == null) {
            return res.status(400).json({ error: 'champ non renseigné !' });
        }
        models.User.findOne({
            where : { email }
        })
        .then(foundUser => {
            if(foundUser) {
                console.log('password, foundUser.password')
                console.log(password, foundUser.password)
                bcrypt.compare(password, foundUser.password) 
                .then (validHash => {
                    if(validHash) {
                        return res.status(200).json({
                            'userId': foundUser.id,
                            'token': auth.generateToken(foundUser)
                        });
                    } else {
                        return res.status(401).json({ error: 'mot de passe incorrect !' });
                    }
                });
            } else {
                return res.status(404).json({ error: 'Utilisateur introuvable !' });
            }
        })
        .catch( err => {
            return res.status(500).json({ error });
        })
    }
};