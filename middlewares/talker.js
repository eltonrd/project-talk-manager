const fs = require('fs');

function talker(_request, response, next) {
    fs.readFile('./talker.json', 'utf8', (error, data) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).send(JSON.parse(data));
        }
    });
    next();
}

function newTalker(request, response) {
    const { name, age, talk } = request.body;
    const talkerFile = fs.readFileSync('./talker.json', 'utf8');
    const talkerJson = JSON.parse(talkerFile);
    const addTalker = {
        id: talkerJson.length + 1,
        name,
        age,
        talk,
    };
    talkerJson.push(addTalker);
    fs.writeFile('./talker.json', JSON.stringify(talkerJson), (error) => {
            if (error) { response.status(500).send(error); } else {
                response.status(201).send(addTalker);
            }
        });
}

module.exports = { talker, newTalker };