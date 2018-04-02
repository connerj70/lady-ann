import React, { Component } from "react";
import "./Footer.css";
import logo from "../../assets/lady-ann-3.svg";

class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer_logo-container">
                    <img
                        alt="pankaata logo"
                        className="footer-logo"
                        src={logo}
                        style={{ width: "200px", marginTop: "0px" }}
                    />
                </div>
                <div className="footer_social-container">
                    <a href="https://www.facebook.com/pankaata/?ref=br_rs">
                        {" "}
                        <i
                            style={{
                                cursor: "pointer",
                                color: "#ea8b88"
                            }}
                            className="fab fa-facebook-f"
                        />
                    </a>
                    <a href="https://twitter.com/officialladyann">
                        <i
                            style={{
                                cursor: "pointer",
                                color: "#ea8b88"
                            }}
                            className="fab fa-twitter"
                        />
                    </a>
                    <a href="https://www.instagram.com/officialladyann/">
                        <i
                            style={{
                                cursor: "pointer",
                                color: "#ea8b88"
                            }}
                            className="fab fa-instagram"
                        />
                    </a>
                </div>
                <div className="footer_links-container">
                    <ul>
                        <li style={{ color: "#ea8b88" }}>About Pankaata</li>
                        <li style={{ color: "#ea8b88" }}>Privacy Policy</li>
                        <li style={{ color: "#ea8b88" }}>
                            Communications Preference
                        </li>
                        <li style={{ color: "#ea8b88" }}>Terms of Use</li>
                        <li style={{ color: "#ea8b88" }}>
                            Place An Advert With Pankaata
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;
