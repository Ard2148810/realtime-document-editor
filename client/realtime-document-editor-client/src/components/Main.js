import React from "react";
import TextEditor from "./TextEditor";
import Users from "./Users";
import Login from "./Login";

function Main(props) {
    return (
        <main>
            <Users users={props.users} />
            {props.userNameSelected ?
                <TextEditor content={props.content} setContent={props.setContent} />
                :
                <Login setUserName={props.setUserName} />
            }

        </main>
    )
}

export default Main