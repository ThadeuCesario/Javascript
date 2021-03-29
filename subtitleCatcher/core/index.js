const fs = require('fs');
const path = require('path');
const utils = require('./functions');

const point = path.join(__dirname, '..', 'legendas');
const files = utils.getFiles(point);

files.then(utils.removeInvalidExtensions).then((files, index) => console.log(files, index));