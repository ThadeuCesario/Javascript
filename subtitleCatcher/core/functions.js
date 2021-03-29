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


const removeInvalidExtensions = files => {
  return files.filter(file => file.endsWith('.srt'))
}

const readFile = pathFile => {
  return new Promise(function(resolve, reject){
    try {
     fs.readFile(pathFile, {}, (_, content) => resolve(content.toString())); 
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  getFiles,
  removeInvalidExtensions,
};