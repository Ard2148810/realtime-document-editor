import React from "react"

function CornerTriangle(props) {    // Parent must have position set to relative
    const style = {
        borderColor: `
        ${getColorValueBySide(props.sideY, "top")}
        ${getColorValueBySide(props.sideX, "right")}
        ${getColorValueBySide(props.sideY, "bottom")}
        ${getColorValueBySide(props.sideX, "left")}`,
        borderWidth: `${props.size / 2}px`,
        [props.sideX]: 0,
        [props.sideY]: 0,
        position: "absolute"
    }

    function getColorValueBySide(sideWanted, sideExpected) {
        return sideWanted === sideExpected ? props.color : "transparent"
    }

    return (
        <div className="triangle" style={style}/>
    )
}

export default CornerTriangle
