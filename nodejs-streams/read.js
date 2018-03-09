const fs = require("fs")
const read = fs.createReadStream("data.text");

read.on("data", (data) => {
    var chunk = data.toString();
    console.log(chunk);
})

