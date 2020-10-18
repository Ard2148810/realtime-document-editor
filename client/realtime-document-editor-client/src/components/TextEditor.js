import React, {Component} from "react"
import Editor from'react-medium-editor'
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import CornerTriangle from "./CornerTriangle";

class TextEditor extends Component {

    render() {
        return (
            <div className="editor-wrapper">
                <CornerTriangle sideX="left" sideY="top" color={"#BBBBBB"} size={24} />
                <Editor
                    className="text-editor"
                    text={this.props.content}
                    onChange={this.props.setContent}
                    options={{
                        placeholder: {
                            text: ""
                        }
                    }}
                />
            </div>
        )
    }

}

export default TextEditor;
