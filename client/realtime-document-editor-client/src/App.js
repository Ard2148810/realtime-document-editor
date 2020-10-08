import React, {Component} from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./style/style.css"

const PORT = '5005'
const ADDRESS = 'localhost'

let webSocket = new WebSocket(`ws://${ADDRESS}:${PORT}`)
webSocket.onopen = (event) => {
    console.log(event)
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }

    componentDidMount() {
        webSocket.onmessage = (msg) => {
            const data = JSON.parse(msg.data)
            this.setState({ content: data.content} )
        }
    }

    onContentChanged = (content) => {
        this.setState({ content: content })
        this.sendContent(content);
    }

    sendContent(content) {
        const msg = {
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
                />
                <Footer />
            </div>
        )
    }

}

export default App