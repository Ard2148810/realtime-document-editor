const express = require('express');
const app = express();
const path = require('path');
const WebSocket = require('ws');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const wsServer = new WebSocket.Server({ noServer: true });
wsServer.on('connection', socket => {
	socket.on('message', message => console.log(message));
});


const server = app.listen(5005);

server.on('upgrade', (req, socket, head) => {
	wsServer.handleUpgrade(req, socket, head, (socket) => {
		wsServer.emit('connection', socket, req)
	})
})

console.log("Server is running: http://localhost:5005");