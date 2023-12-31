const basicAuth = require('basic-auth')

const authMiddleware = (req, res, next) => {
    const user = basicAuth(req);

    if(!user || user.name !== 'ivanfou' || user.pass !== 'ivanfou1'){
        res.set('WWW-Authenticate', 'Basic realm ="example"');
        return res.status(401).send('Autenticacion requerida');
    }

    next();
} 

module.exports = authMiddleware