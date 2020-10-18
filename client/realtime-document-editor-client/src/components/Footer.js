import React from "react"
import CornerTriangle from "./CornerTriangle";

function Footer() {
    return (
        <footer>
            <CornerTriangle sideX="right" sideY="top" color={"floralwhite"} size={24}/>
            <div>
                Adrian Ałaszewski &copy; {new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer
