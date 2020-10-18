import React from "react"
import { IconContext } from "react-icons"
import { FaUserCircle } from "react-icons/all";
import CornerTriangle from "./CornerTriangle";

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    setInputValue = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    onEnterClicked = (event) => {
        event.preventDefault();
        this.props.setUserName(this.state.name)
    }

    render() {
        return (
            <div className="login-container">
                <div className="login">
                    <CornerTriangle sideX="left" sideY="top" color={"#575757"} size={24} />
                    <IconContext.Provider value={{ color: "darkslategray" }}>
                        <FaUserCircle size={"100"}/>
                        <p><h4>Type your username</h4></p>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Username"
                                value={this.state.name}
                                onChange={this.setInputValue}
                                style={{ margin: "10px" }}
                            />
                        </div>
                    <button onClick={this.onEnterClicked} className="button-green">Enter</button>
                    </IconContext.Provider>
                </div>
            </div>
        )
    }

}

export default Login
