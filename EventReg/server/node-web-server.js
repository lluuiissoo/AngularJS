var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static( rootPath + '/app'));

app.listen(2000);
console.log('Listening on port ' + 2000 + '...');

process.on('uncaughtException', function(err) {
    if(err.errno === 'EADDRINUSE')
         console.log('Unable to listen on port ${err.port}. The port is already in use.');
    else 
         console.log(err);
    process.exit(1);
});