const { Server } = require('socket.io');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  // Relay signaling data between peers
  socket.on('signal', (data) => {
    io.to(data.target).emit('signal', data.signal);
  });

  // Store peer id and share it with others
  socket.on('join', (room) => {
    socket.join(room);
    io.to(room).emit('peer', socket.id);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});
