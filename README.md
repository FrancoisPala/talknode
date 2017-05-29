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

# change for socket/four

7. npm install --save socket.io

8. lets add
    var app = require('express')();
    var http = require('http').Server(app);
    var io = require('socket.io')(http);

    app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    });

    io.on('connection', function(socket){
    console.log('a user connected');
    });

    http.listen(3000, function(){
    console.log('listening on *:3000');
    });
    in index.js

9. and this before body in html
    <script src="/socket.io/socket.io.js"></script>
    <script>
    var socket = io();
    </script>

# lets switch to five

10. let's add a disconnection event
    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });
    in index.js
    as well as
    <script src="/socket.io/socket.io.js"></script>
    <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
    <script>
    $(function () {
        var socket = io();
        $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
        });
    });
    </script>
    and replace the connection with
    io.on('connection', function(socket){
        socket.on('chat message', function(msg){
            console.log('message: ' + msg);
        });
    });

# on to the last one

11. let's try out all the new stuff

12. deploy with now.sh 