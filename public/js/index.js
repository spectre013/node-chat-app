var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');
  socket.emit('createMessage', {from:'Brian', message:'Hey!'});
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log(message);
});
