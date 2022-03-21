const config = require('./src/config/config');
const express = require('express');
const cors = require('cors');

const Animals = require('./src/services/animals');
const animals = new Animals();
const Content_Items = require('./src/services/content_items')
const content_items = new Content_Items();

//Инициализируем модуль express;
const app = express();

//Инициализируем cors;
app.use(cors());

//Инициализируем подмодуль express.jsonParser;
let jsonParser = express.json();

app.get('/api/animals', jsonParser, function (req, res) {
    animals.getAnimals(req, res);
});

app.get('/api/content', jsonParser, function (req, res) {
    content_items.getContent(req, res);
});

app.post('/api/add-animals', jsonParser, function (req, res) {
    console.log(req.body);
    animals.addAnimals(req, res);
});

app.put('/api/put-animals-FIO', jsonParser, function (req, res) {
    console.log(req.body);
    animals.responsibleFIO(req, res);
});

app.put('/api/put-animals-photo', jsonParser, function (req, res) {
    console.log(req.body);
    animals.photoVideo(req, res);
});

app.delete('/api/delete-animals', jsonParser, function (req, res) {
    console.log(req.body);
    animals.deleteAnimals(req, res);
});

const server = app.listen(config.server.port, function () {
    console.log('Server listened host:', config.server.host, 'port:', config.server.port);
});