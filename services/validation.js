const { dateValidationRegex } = require('./regex');

function tokenValidation(request, response, next) {
    const { authorization } = request.headers;
    if (!authorization) {
        return response.status(401).json({
            message: 'Token não encontrado',
        });
    }
    if (authorization.length !== 16) {
        return response.status(401).json({
            message: 'Token inválido',
        });
    }
    next();
}

function nameValidation(request, response, next) {
    const { name } = request.body;
    if (!name) {
        return response.status(400).json({
            message: 'O campo "name" é obrigatório',
        });
    }
    if (name.length < 3) {
        return response.status(400).json({
            message: 'O "name" deve ter pelo menos 3 caracteres',
        });
    }
    next();
}

function ageValidation(request, response, next) {
    const { age } = request.body;
    if (!age) {
        return response.status(400).json({
            message: 'O campo "age" é obrigatório',
        });
    }
    if (age < 18) {
        return response.status(400).json({
            message: 'A pessoa palestrante deve ser maior de idade',
        });
    }
    next();
}

function dateValidation(request, response, next) {
    const { talk } = request.body;
    if (!dateValidationRegex(talk.watchedAt)) {
        return response.status(400).json({
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        });
    }
    next();
}

function rateValidation(request, response, next) {
    const { talk } = request.body;
    if (talk.rate > 5 || talk.rate < 1) {
        return response.status(400).json({
            message: 'O campo "rate" deve ser um inteiro de 1 à 5',
        });
    }
    next();
}

function talkValidation(request, response, next) {
    const { talk } = request.body;
    if (!talk || !talk.watchedAt || !talk.rate) {
        return response.status(400).json({
            message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
        });
    }
    next();
}

module.exports = { 
    tokenValidation, 
    nameValidation, 
    ageValidation, 
    dateValidation, 
    rateValidation, 
    talkValidation,
 };