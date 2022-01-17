const { emailValidationRegex } = require('../services/regex');
const tokenGenerate = require('../services/token');

function loginEmail(request, response, next) {  
    const { email } = request.body;
    if (!email) {
        return response.status(400).json({
            message: 'O campo "email" é obrigatório',
        });
    }
    if (!emailValidationRegex(email)) {
        return response.status(400).json({
            message: 'O "email" deve ter o formato "email@email.com"',
        });
    } 
    next();
}
function loginPassword(request, response, next) {
    const { password } = request.body;
    if (!password) {
        return response.status(400).json({
            message: 'O campo "password" é obrigatório',
        });
    }
    if (password.length < 6) {
        return response.status(400).json({
            message: 'O "password" deve ter pelo menos 6 caracteres',
        });
    }
    next();
}
function loginToken(_request, response) {
    const tokenResponse = tokenGenerate();
    return response.status(200).json({
        token: tokenResponse,
    });
}

module.exports = { loginEmail, loginPassword, loginToken };
