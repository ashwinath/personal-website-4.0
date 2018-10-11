import React, { Component } from 'react';
import Typed from "typed.js";
import "./LandingText.css";

class LandingText extends Component {
    componentDidMount() {
        const strings = [
            "hello world",
            "goodbye world",
        ];
        const options = {
            strings,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <div className="landing-text-container">
                <h1>Hello there, I'm Ashwin</h1>
                <div className="type-wrap">
                    <span
                        style={{ whiteSpace: 'pre' }}
                        ref={(el) => { this.el = el; }}
                    />
                </div>
            </div>
        );
    }
}

export default LandingText;

