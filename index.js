var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket) {
   console.log('A user connected');

   socket.on('data', function (data) {
    console.log(data);
 });
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

http.listen(5000, function() {
   console.log('listening on *:5000');
});