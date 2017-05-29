## Talk Node For Epitech Paris

1. First create an npm project with npm init

2. npm install --save express

3. add the code 
    var app = require('express')();
    var http = require('http').Server(app);

    app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
    });

    http.listen(3000, function(){
    console.log('listening on *:3000');
    });

    to index.js

4. run it with nodemon and try it out on browser