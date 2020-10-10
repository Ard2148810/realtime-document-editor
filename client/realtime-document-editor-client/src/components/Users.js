import React, {Component} from "react"
import User from "./User";
import {FaUsers} from 'react-icons/fa'
import {IconContext} from "react-icons";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
        this.colors = ["#1E90FF", "#DAA520", "#CD5C5C", "#9370DB", "#FF4500", "#8B4513", "#40E0D0", "#708090",
            "#000000"]
    }

    toggleVisibility = () => {
        this.setState(prevState => {
            return {
                visible: !prevState.visible
            }
        })
    }

    render() {
        const users = this.props.users.map((user, index) =>
            <User
                key={user}
                name={user}
                color={this.colors[index % this.colors.length]}
                show={this.state.visible}
            />)
        return (
            <div className="users">
                <IconContext.Provider value={{color: "white"}}>
                    <button
                        onClick={this.toggleVisibility}
                        className="btn-switch-users-show"
                        style={{ transition: "all 0.5s", boxShadow: this.state.visible ? "none" : "0 0 10px 3px lightgreen"}}
                    >
                        <FaUsers/>
                    </button>
                    {users}
                </IconContext.Provider>
            </div>
        )
    }

}

export default Users