import React from "react";
import style from "./Inputs.module.css";

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleChange = event => {
        // console.log(event.target);
        // console.log({ object: event.target });
        const { name, value } = event.target;
        this.setState(() => ({
            [name]: value
        }));
    };

    render() {
        return (
            <form>
                <input
                    className={style.input}
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    type="text"
                />
                <input
                    className={style.input}
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="text"
                />
                <input
                    className={style.input}
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                />
                <input
                    className={style.input}
                    name="confirmPassword"
                    placeholder="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    type="password"
                />
            </form>
        );
    }
}

export default Inputs;
