const fs = require('fs');

function deleteTalker(request, response) {
    const { id } = request.params;
    const talkerFile = fs.readFileSync('./talker.json', 'utf8');
    const talkerJson = JSON.parse(talkerFile);
    const deleteTalkerIndex = talkerJson.findIndex((talker) => talker.id === Number(id));
    talkerJson.splice(deleteTalkerIndex, 1);
    fs.writeFileSync('./talker.json', JSON.stringify(talkerJson));
    return response.status(204).send(talkerJson);
}

module.exports = deleteTalker;