const fs = require('fs');

function editTalker(request, response) {
    const { id } = request.params;
    const { name, age, talk } = request.body;
    const talkerFile = fs.readFileSync('./talker.json', 'utf8');
    const talkerJson = JSON.parse(talkerFile);
    const editTalkerJson = { 
        name, 
        age, 
        talk, 
    };
    const editTalkerIndex = talkerJson.findIndex((talker) => talker.id === Number(id));
    talkerJson[editTalkerIndex] = { ...talkerJson[editTalkerIndex], ...editTalkerJson };
    fs.writeFileSync('./talker.json', JSON.stringify(talkerJson));
    return response.status(200).send(talkerJson[editTalkerIndex]);
}

module.exports = editTalker;