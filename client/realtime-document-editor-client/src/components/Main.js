import React from "react";
import TextEditor from "./TextEditor";

function Main(props) {
    return (
        <main>
            <TextEditor
                content={props.content}
                setContent={props.setContent}
            />
        </main>
    )
}

export default Main