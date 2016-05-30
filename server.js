var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = Number( process.env.PORT || 3000)

app.use(express.static('public'))

app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});

http.listen(port, function(){
    console.log('listening on ' + port);
});
