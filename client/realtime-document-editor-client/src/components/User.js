import React, {Component} from "react"

class User extends Component {

    render() {
        return (
            <div
                className={`user${this.props.show ? "" : " user-folded"}`}
                style={{borderLeft: `5px solid ${this.props.color}`}}
            >
                <span
                    style={{transform: this.props.show ? "translateX(0)" : "translateX(-100%)"}}
                    className={"name-label"}
                >
                    {this.props.name}</span>
            </div>
        );
    }

}

export default User
