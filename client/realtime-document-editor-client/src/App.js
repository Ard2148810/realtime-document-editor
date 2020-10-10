import React, {Component} from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./style/style.css"

const PORT = '5005'
const ADDRESS = 'localhost'

let webSocket = new WebSocket(`ws://${ADDRESS}:${PORT}`)

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            content: "",
            users: ["LocalUser"]
        }
    }

    componentDidMount() {

        webSocket.onopen = () => {

            const msg = {
                type: "newUser",
                name: `User${Math.floor(Math.random() * 1000)}`
            }
            webSocket.send(JSON.stringify(msg))
        }

        webSocket.onmessage = (msg) => {
            const data = JSON.parse(msg.data)
            switch(data.type) {
                case "content": {
                    this.setState({ content: data.content })
                    break
                }
                case "newUser": {
                    this.setState(prevState => {
                        const newUsers = [...prevState.users, data.name]
                        return { users: newUsers }
                    })
                    break
                }
                case "startValues": {
                    this.setState(prevState => {
                        const newUsers = prevState.users.concat(data.users)
                        return { users: newUsers }
                    })
                    break
                }
                default: console.log(`Unknown message type: ${msg.type}`)
            }

        }
    }

    onContentChanged = (content) => {
        this.setState({ content: content })
        this.sendContent(content)
    }

    sendContent(content) {
        const msg = {
            type: "content",
            author: "AuthorPlaceholder",
            content: content
        }
        webSocket.send(JSON.stringify(msg))
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main
                    content={this.state.content}
                    setContent={this.onContentChanged}
                    users={this.state.users}
                />
                <Footer />
            </div>
        )
    }

}

export default App