const fs = require('fs');

function talker(_request, response) {
    fs.readFile('./talker.json', 'utf8', (error, data) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).send(JSON.parse(data));
        }
    });
}

module.exports = talker;
