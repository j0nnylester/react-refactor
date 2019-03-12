import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Toggle from "../Toggle";
import Inputs from "../Inputs";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOn: false
        };
    }

    handleClick = () => {
        this.setState(state => ({
            isOn: !state.isOn
        }));
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {/* 1 */}

                    <Toggle onClick={this.handleClick} isOn={this.state.isOn} />
                    <Toggle
                        onClick={this.handleClick}
                        isOn={!this.state.isOn}
                    />

                    {/* 2 */}

                    <Inputs />
                </header>
            </div>
        );
    }
}

export default App;
