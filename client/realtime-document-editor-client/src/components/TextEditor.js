import React, {Component} from "react"
import "../style/content.css"

class TextEditor extends Component {

    static chunkKey = 0

    static getNextChunkKey() {
        return this.chunkKey++
    }

    render() {
        const formattedContent = this.formatContent(this.props.content, this.props.style)
        return (
            <div id="TextEditor" onClick={this.props.onEditorClick}>
                {formattedContent}
            </div>
        )
    }

    formatContent(content, style) {
        return content.map((chunk, index) => {
            let styleClasses = ""
            style[index].forEach(styleClass => {
                styleClasses += styleClass + " "
            })
            return (
                <span key={TextEditor.getNextChunkKey()}
                      className={styleClasses} data-chunk-index={index}>{chunk}
                </span>)
        })
    }

}

export default TextEditor;