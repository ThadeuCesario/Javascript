const fs = require('fs');
const path = require('path');

const getFiles = directory => {
  const files = fs.readdirSync(directory);
  const renamedFiles = files.map(file => path.join(directory, file));
  return new Promise(function(resolve, reject) {
    try {
      resolve(renamedFiles);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  getFiles,
};