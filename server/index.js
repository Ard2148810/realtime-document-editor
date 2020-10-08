const express = require('express');
const app = express();
const path = require('path');
const WebSocket = require('ws');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const clients = new Set();
let content = ""

const wsServer = new WebSocket.Server({ noServer: true });
wsServer.on('connection', socket => {
	const msg = {
		content: content
	}
	socket.send(JSON.stringify(msg))
	socket.on('message', message => {
		const msg = JSON.parse(message)
		content = msg.content
		const response = { content: content }

		clients.forEach(client => {
			if(client !== socket) {
				client.send(JSON.stringify(response))
			}
		})
	});
	clients.add(socket)
});


const server = app.listen(5005);

server.on('upgrade', (req, socket, head) => {
	wsServer.handleUpgrade(req, socket, head, (socket) => {
		wsServer.emit('connection', socket, req)
	})
})

console.log("Server is running: http://localhost:5005");