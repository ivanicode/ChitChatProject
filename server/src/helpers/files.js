const fs = require('fs');

function readImageFile(file) {
    // read binary data from a file:
    const bitmap = fs.readFileSync(file);
    const buf = new Buffer.from(bitmap);
    return buf;
  }

  module.exports = {readImageFile}
