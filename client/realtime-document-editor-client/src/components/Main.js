import React from "react";
import TextEditor from "./TextEditor";
import Toolbar from "./Toolbar";

function Main(props) {
    return (
        <main>
            <Toolbar />
            <TextEditor content={props.content} style={props.style} setContent={props.setContent}  />
        </main>
    )
}

export default Main