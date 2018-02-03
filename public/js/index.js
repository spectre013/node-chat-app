var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
  var p = document.createElement('p');
  var text = document.createTextNode(message.from+' : '+message.text);
  p.appendChild(text);
  document.getElementById('chatarea').appendChild(p);
});
