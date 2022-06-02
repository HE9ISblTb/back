const config = require('./src/config/config');
const express = require('express');
const cors = require('cors');

const Animals = require('./src/services/animals');
const animals = new Animals();
const Content_Items = require('./src/services/content_items')
const content_items = new Content_Items();
const Owners_Animals = require('./src/services/owners_animals');
const owners_animals = new Owners_Animals();
const Responsible_Persons = require('./src/services/responsible_persons');
const responsible_persons = new Responsible_Persons();
const Login_Users = require('./src/services/login_users');
const login_users = new Login_Users();

//Инициализируем модуль express;
const app = express();

//Инициализируем cors;
app.use(cors());

//Инициализируем подмодуль express.jsonParser;
let jsonParser = express.json();

app.get('/api/animals', jsonParser, function (req, res) {
    animals.getAnimals(req, res);
});

app.get('/api/animals-one', jsonParser, function (req, res) {
    animals.getOneAnimals(req, res);
});

app.post('/api/add-animals', jsonParser, function (req, res) {
    console.log(req.body);
    animals.addAnimals(req, res);
});

app.post('/api/edit-animals', jsonParser, function (req, res) {
    animals.editAnimals(req, res);
});

app.post('/api/delete-animals', jsonParser, function (req, res) {
    animals.deleteAnimals(req, res);
});

app.get('/api/content', jsonParser, function (req, res) {
    content_items.getContent(req, res);
});

app.post('/api/add-content', jsonParser, function (req, res) {
    content_items.addContent(req, res);
});

app.post('/api/edit-content', jsonParser, function (req, res) {
    content_items.editContent(req, res);
});

app.post('/api/delete-content', jsonParser, function (req, res) {
    content_items.deleteContent(req, res);
});

app.get('/api/owners', jsonParser, function (req, res) {
    owners_animals.getOwners(req, res);
});

app.post('/api/add-owners', jsonParser, function (req, res) {
    owners_animals.addOwners(req, res);
});

app.post('/api/edit-owners', jsonParser, function (req, res) {
    owners_animals.editOwners(req, res);
});

app.post('/api/delete-owners', jsonParser, function (req, res) {
    owners_animals.deleteOwners(req, res);
});

app.get('/api/responsible', jsonParser, function (req, res) {
    responsible_persons.getResponsible(req, res);
});

app.post('/api/add-responsible', jsonParser, function (req, res) {
    responsible_persons.addResponsible(req, res);
});

app.post('/api/edit-responsible', jsonParser, function (req, res) {
    responsible_persons.editResponsible(req, res);
});

app.post('/api/delete-responsible', jsonParser, function (req, res) {
    responsible_persons.deleteResponsible(req, res);
});

app.post('/api/sign-in', jsonParser, function (req, res) {
    login_users.signIn(req, res);
});

const server = app.listen(config.server.port, function () {
    console.log('Server listened host:', config.server.host, 'port:', config.server.port);
});