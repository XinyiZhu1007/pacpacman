var fs = require("fs");
var content;
var newArray;


// First I want to read the file
fs.readFile('./tilemap.txt', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    console.log(content);  

    var array = data.split(',').map(function(x)
    {
        return x.trim().replace("\r\n", "");
    });

    // newArray = array.replace("\r\n1", "");
});