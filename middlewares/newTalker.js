const fs = require('fs');

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
    fs.writeFileSync('./talker.json', JSON.stringify([...talkerJson, addTalker]));
            return response.status(201).send(addTalker);
        }
module.exports = newTalker;