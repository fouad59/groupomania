// mise en place de password validator

var passwordValidator = require('password-validator');

// Création du schéma
var schemaPassword = new passwordValidator();

// shéma 
schemaPassword
.is().min(4)                                    // nombre de caractere minimum
.is().max(100)                                  // nombre de caractere maximum
.has().uppercase()                              // majuscules obligatoire
.has().lowercase()                              // minuscules obligatoire
.has().digits(2)                                // minimum 2 chiffres
.has().not().spaces()                           // espaces interdits
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist de mot de passe

module.exports = (req, res, next) => {
    if(schemaPassword.validate(req.body.password)){
        return next();
    }else{
        return res.status(400).json({error: `mot de passe invalide ${schemaPassword.validate('req.body.password', { list: true })}` })
    }
}