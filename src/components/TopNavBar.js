import React, {Component} from 'react';
import logo from "../assets/images/nba-logoman-word-white.svg";
import "../styles/TopNavBar.css";

export class TopNavBar extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}
