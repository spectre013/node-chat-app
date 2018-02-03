const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const publicPath = path.join(__dirname,'..','public');

var port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketio(server);

app.use(bodyParser.json());
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');

    

    socket.on('createMessage', (message) => {
        io.emit('newMessage',{from:message.from, text:message.text, createdAt:new Date().getTime()});
    });

    socket.on('disconnect', (socket) => {
        console.log('User disconnected')
    });

});



server.listen(port, () => {
    console.log(`Servers is up on port ${port}`)
});