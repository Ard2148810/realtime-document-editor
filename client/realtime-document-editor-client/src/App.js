import React, {Component} from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./style/style.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: "<p><br/></p>"
        }
    }

    setContent = (content) => {
        this.setState({content: content})
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