const fs = require('fs');
const path = require('path');
const utils = require('./functions');

const point = path.join(__dirname, '..', 'legendas');
const teste = utils.getFiles(point);
teste.then(valor => console.log(valor));