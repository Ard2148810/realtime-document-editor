import React from "react";
import TextEditor from "./TextEditor";
import Users from "./Users";

function Main(props) {
    return (
        <main>
            <Users users={props.users} />
            <TextEditor
                content={props.content}
                setContent={props.setContent}
            />
        </main>
    )
}

export default Main