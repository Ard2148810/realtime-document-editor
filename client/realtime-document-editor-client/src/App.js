import React, {Component} from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./style/style.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chunks: ["Placeholder. It will be removed soon.", " Another piece"],
            style: [["bold", "underline"], []]
        }
    }

    setContent = (content) => {
        this.setState({content: content});
    }

    render() {
        //this.setContent("Hello there")
        return (
            <div className="App">
                <Header />
                <Main content={this.state.chunks} style={this.state.style} setContent={this.setContent} />
                <Footer />
            </div>
        )
    }

}

export default App