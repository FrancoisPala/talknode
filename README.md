## Talk Node For Epitech Paris

1. First create an npm project with npm init

2. npm install --save express

# change branches to socket/two

3. new code 
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

# change branches to socket/three

5. new code
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });
    in index.js

    and

    <!doctype html>
    <html>
    <head>
        <title>Socket.IO chat</title>
        <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font: 13px Helvetica, Arial; }
        form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
        form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
        form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
        #messages { list-style-type: none; margin: 0; padding: 0; }
        #messages li { padding: 5px 10px; }
        #messages li:nth-child(odd) { background: #eee; }
        </style>
    </head>
    <body>
        <ul id="messages"></ul>
        <form action="">
        <input id="m" autocomplete="off" /><button>Send</button>
        </form>
    </body>
    </html>
    in index.html (to be created first)

6. try it out