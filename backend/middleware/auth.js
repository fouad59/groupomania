//-------------- Authentifiaction --------------

const jwt = require('jsonwebtoken');
const RANDOM_SECRET_KEY = "RANDOM_SECRET_KEY";

module.exports = {
    generateToken: function(user) {
        return jwt.sign({ 
            userId: user.id,
            isAdmin: user.isAdmin},
            RANDOM_SECRET_KEY,
            { expiresIn: '1h' }
        );
    }

/*(req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.RANDOM_SECRET_KEY);
        const userId = decodedToken.id;
        req.auth = { userId };
        // -------- vérifier l'identité de l'utilisateur
        if(req.body.id && req.body.id !== userId) {
            throw 'User Id non valide !';
        } else {
            next();
        }
    } catch (error) {
        res.status(403).json({ error: error | 'unauthorized request !' });
    }*/
};