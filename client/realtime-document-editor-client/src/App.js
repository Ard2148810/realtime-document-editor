import React, {Component} from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./style/style.css"
import { w3cwebsocket as W3CWebSocket } from "websocket";

const PORT = '5005'
const ADDRESS = 'localhost'

const client = new W3CWebSocket(`ws://${ADDRESS}:${PORT}`)

client.onopen = () => {
    console.log("WebSocket connected")
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: "<p><br/></p>"
        }
    }

    componentDidMount() {
        client.onmessage = msg => {
            console.log(msg)
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