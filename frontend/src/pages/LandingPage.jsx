import React, { Component } from 'react';
import LandingText from "../components/LandingText";
import "./LandingPage.css";

class LandingPage extends Component {
    render() {
        return (
            <section className="landing-section">
                <LandingText />
            </section>
        );
    }
}

export default LandingPage;
