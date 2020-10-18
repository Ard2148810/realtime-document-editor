import React from "react"
import CornerTriangle from "./CornerTriangle";

function Header() {
    return (
        <header>
            REALTIME DOCUMENT EDITOR
            <CornerTriangle sideX="left" sideY="bottom" color={"floralwhite"} size={24}/>
        </header>
    )
}

export default Header
