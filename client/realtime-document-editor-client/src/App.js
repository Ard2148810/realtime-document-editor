import React, {Component} from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./style/style.css"

//const WebSocket = require('ws');

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
            content: "<p><br/></p>"
        }
    }

    componentDidMount() {
        webSocket.onmessage = (msg) => {
            console.log(msg.data)
        }
    }

    setContent = (content) => {
        this.setState({content: content})
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main
                    content={this.state.content}
                    setContent={this.setContent}
                />
                <Footer />
            </div>
        )
    }

}

export default App