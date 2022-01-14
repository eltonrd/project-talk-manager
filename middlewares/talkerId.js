const fs = require('fs');

function talkerId(request, response) {
    fs.readFile('./talker.json', 'utf8', (error, data) => {
        const talkerData = JSON.parse(data);
        if (error) {
            response.status(500).send(error);
        } 
        if (!talkerData.find((talker) => talker.id === parseInt(request.params.id, 10))) {
            response.status(404).json({
                message: 'Pessoa palestrante não encontrada',
            }); 
        } else {
            const talkerIdJson = talkerData.find(
            (talker) => talker.id === parseInt(request.params.id, 10),
);
           response.status(200).json(talkerIdJson);
        }
    });
}

module.exports = talkerId;