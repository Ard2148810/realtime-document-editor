import React, {Component} from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./style/style.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chunks: ["Placeholder.", " It will be removed soon.", " Another piece"],
            style: [["bold", "underline"], [], ["cursive"]],
            cursorPositionOffset: []
        }
    }

    getSelectedChunksRange = () => {
        const selection = window.getSelection()
        // console.log(selection)
        let startElement, startIndex, endElement, endIndex, firstChunkTextIndex, lastChunkTextIndex
        if (selection.anchorNode &&
            (startElement = selection.anchorNode.parentElement) &&
            (startIndex = startElement.getAttribute("data-chunk-index"))) {
            if (selection.focusNode &&
                (endElement = selection.focusNode.parentElement) &&
                (endIndex = endElement.getAttribute("data-chunk-index"))) {
                if((startIndex = Number.parseInt(startIndex)) > (endIndex = Number.parseInt(endIndex))) {
                    const tmp = startIndex
                    startIndex = endIndex
                    endIndex = tmp
                    firstChunkTextIndex = selection.focusOffset
                    lastChunkTextIndex = selection.anchorOffset
                } else {
                    firstChunkTextIndex = selection.anchorOffset
                    lastChunkTextIndex = selection.focusOffset
                }
                console.log({
                    start: {
                        chunk: startIndex,
                        offset: firstChunkTextIndex
                    },
                    end: {
                        chunk: endIndex,
                        offset: lastChunkTextIndex
                    }
                })
                return {
                    start: {
                        chunk: startIndex,
                        offset: firstChunkTextIndex
                    },
                    end: {
                        chunk: endIndex,
                        offset: lastChunkTextIndex
                    }
                }
            }
        }
    }

    onEditorClick = (event) => {
        event.preventDefault();
        const cursorPos = this.getSelectedChunksRange()
        this.setState({ cursorPos: [cursorPos.end.chunk, cursorPos.end.offset] })
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
                <Main content={this.state.chunks}
                      style={this.state.style}
                      setContent={this.setContent}
                      getSelectedChunksRange={this.getSelectedChunksRange}
                      onEditorClick={this.onEditorClick}
                />
                <Footer />
            </div>
        )
    }

}

export default App