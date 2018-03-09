const fs = require("fs")
const readStream = fs.createReadStream("data.js")
const writeStream = fs.createWriteStream("data-copy.js");

readStream.pipe(writeStream);