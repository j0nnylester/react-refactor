import React from "react";

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
        const { value } = event.target;
        const { name } = event.target;
        this.setState(() => ({
            [name]: value
        }));
    };

    render() {
        return (
            <form>
                <input
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    type="text"
                />
                <input
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="text"
                />
                <input
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                />
                <input
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
