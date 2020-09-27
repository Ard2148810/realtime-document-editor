import React from "react";

function Toolbar(props) {

    return (
        <div className="toolbar">
            <button className="btn btn-toolbar" onClick={props.getSelectedChunksRange}>B</button>
            <button className="btn btn-toolbar">I</button>
            <button className="btn btn-toolbar">U</button>
        </div>
    )
}

export default Toolbar