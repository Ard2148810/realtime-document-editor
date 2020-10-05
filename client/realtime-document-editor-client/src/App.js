import React, {Component} from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./style/style.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: "<p style='font-weight: bold'>Hello <span>there!</span></p>"
        }
    }

    getSelectedChunksRange = () => {
        const selection = window.getSelection()
        console.log(selection)
    }

    setContent = (content) => {
        this.setState({ content: content })
    }

    setStyle = (style) => {
        this.setState({ style: style })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main content={this.state.content}
                      setContent={this.setContent}
                />
                <Footer />
            </div>
        )
    }

}

export default App