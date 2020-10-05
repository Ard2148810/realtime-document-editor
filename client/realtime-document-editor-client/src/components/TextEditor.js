import React, {Component} from "react"
import Editor from'react-medium-editor'
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

class TextEditor extends Component {

    render() {
        return (
            <Editor
                className="text-editor"
                text={this.props.text}
                onChange={this.props.setContent}
                options={{
                    placeholder: {
                        text: "You can start typing here..."
                    }
                }}
            />
        );
    }

}

export default TextEditor;