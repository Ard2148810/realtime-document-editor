import React, {Component} from "react"
import "../style/content.css"

class TextEditor extends Component {

    render() {
        return (
            <div id="TextEditor" dangerouslySetInnerHTML={{__html: this.props.content}}>
            </div>
        )
    }

}

export default TextEditor;