import React, {Component} from "react"
import "../style/content.css"

class TextEditor extends Component {

    render() {
        const formattedContent = this.formatContent(this.props.content, this.props.style)
        return (
            <div id="TextEditor">
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
            return <span className={styleClasses}>{chunk}</span>
        })
    }
}

export default TextEditor;