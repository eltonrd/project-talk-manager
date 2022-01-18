const fs = require('fs');

function searchTalker(request, response) {
    const { q } = request.query;
    const talkerFile = fs.readFileSync('./talker.json', 'utf8');
    const talkerJson = JSON.parse(talkerFile);
    const searchTalkerFilter = talkerJson.filter(
        (talker) => talker.name.toLowerCase().includes(q.toLowerCase()),
);
    return response.status(200).json(searchTalkerFilter);
}
module.exports = searchTalker;