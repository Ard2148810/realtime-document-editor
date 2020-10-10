const express = require('express')
const app = express()
const path = require('path')
const WebSocket = require('ws')

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

const clients = new Map()
let content = ""

const wsServer = new WebSocket.Server({ noServer: true })
wsServer.on('connection', socket => {

	let msg = {
		type: "startValues",
		content: content,
		users: Array.from(clients.values())
	}
	socket.send(JSON.stringify(msg))	// Send current values for the user that just joined

	socket.on('message', message => {
		const msg = JSON.parse(message);
		let response = {}
		switch(msg.type) {
			case "newUser": {
				clients.set(socket, msg.name)
				response = {type: "newUser", name: msg.name}
				break;
			}
			case "content": {
				content = msg.content
				response = {type: "content", content: content}
				break;
			}
			default: {
				console.log(`Unknown message type: ${msg.type}`)
			}
		}
		clients.forEach((name, client) => {
			if (client !== socket) {
				client.send(JSON.stringify(response))
			}
		})
	})

	clients.set(socket, "")

})


const server = app.listen(5005)

server.on('upgrade', (req, socket, head) => {
	wsServer.handleUpgrade(req, socket, head, (socket) => {
		wsServer.emit('connection', socket, req)
	})
})

console.log("Server is running: http://localhost:5005")