const express = require('express');
const bodyParser = require('body-parser');
const { talker, newTalker } = require('./middlewares/talker');
const talkerId = require('./middlewares/talkerId');
const { loginEmail, loginPassword, loginToken } = require('./middlewares/login');
const { 
  tokenValidation, 
  nameValidation, 
  ageValidation,
  talkFullValidation, 
  talkValidation,
} = require('./services/validation');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', talker);
app.get('/talker/:id', talkerId);
app.post('/login', loginEmail, loginPassword, loginToken);
app.post('/talker', tokenValidation, 
nameValidation, 
ageValidation,
talkFullValidation,
talkValidation,
newTalker);

app.listen(PORT, () => {
  console.log('Online');
});
