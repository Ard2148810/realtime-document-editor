import React from "react";
import TextEditor from "./TextEditor";
import Toolbar from "./Toolbar";

function Main(props) {
    return (
        <main>
            <Toolbar getSelectedChunksRange={props.getSelectedChunksRange}/>
            <TextEditor content={props.content}
                        style={props.style}
                        setContent={props.setContent}
                        onEditorClick={props.onEditorClick}
            />
        </main>
    )
}

export default Main