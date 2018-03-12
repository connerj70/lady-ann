import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../assets/lady-ann-3.svg";
import SecondaryNav from "./SecondaryNav/SecondaryNav.js";
import { Link } from "react-router-dom";
import CustomForm from "../../components/CustomForm/CustomForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import axios from "axios";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            popup: false,
            hideBtn: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get("/api/check-user").then(resp => {
            console.log(resp);
            if (resp.data.subscribed) {
                this.setState({
                    hideBtn: true
                });
            } else if (resp.data.firstVisit && !resp.data.subscribed) {
                this.setState({ popup: true });
            }
        });
    }

    handleMenu() {
        this.setState(prevState => {
            return {
                menu: !prevState.menu
            };
        });
    }

    handleClick() {
        this.setState(prevProps => {
            return {
                popup: !prevProps.popup
            };
        });
    }

    render() {
        return (
            <div className="navbar_wrapper">
                {this.state.popup ? (
                    <div className="mail-chimp-wrapper">
                        <span
                            style={{ color: "var(--red)", float: "right" }}
                            onClick={() => this.handleClick()}
                        >
                            X
                        </span>
                        <MailchimpSubscribe
                            url="https://pankaata.us12.list-manage.com/subscribe/post?u=760e8048ea540051ed798d77f&amp;id=d91f68e130"
                            render={({ subscribe, status, message }) => (
                                <CustomForm
                                    handleClick={this.handleClick}
                                    status={status}
                                    message={message}
                                    onValidated={formData =>
                                        subscribe(formData)
                                    }
                                />
                            )}
                        />
                    </div>
                ) : null}
                <div className="navbar">
                    <div className="navbar_logo">
                        <Link to="/">
                            <img
                                className="pankaata-logo"
                                alt="logo"
                                src={logo}
                            />
                        </Link>
                    </div>
                    <div
                        className="menu-drop"
                        onClick={() => this.handleMenu()}
                    >
                        {this.state.menu ? (
                            <div
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "100"
                                }}
                            >
                                x
                            </div>
                        ) : (
                            <div>MENU &#9660;</div>
                        )}
                    </div>
                </div>
                <div
                    className={
                        this.state.menu
                            ? "navbar_mobile-dropdown"
                            : "navbar_hide"
                    }
                >
                    <ul>
                        <Link to="/relationships/videos">
                            <li className="navbar_dropdown">Videos</li>
                        </Link>
                        <Link to="/relationships/letters">
                            <li className="navbar_dropdown">Letters</li>
                        </Link>
                        <Link to="/relationships/email">
                            <li className="navbar_dropdown">Email Lady. Ann</li>
                        </Link>
                        <Link to="/relationships/about">
                            <li className="navbar_dropdown">About Lady. Ann</li>
                        </Link>
                    </ul>
                </div>
                {this.props.secondaryNav ? (
                    <div className="navbar_secondary-nav-container">
                        <SecondaryNav
                            handleSearchTerm={this.props.handleSearchTerm}
                            handleSearchEnter={this.props.handleSearchEnter}
                            clearSearch={this.props.clearSearch}
                            searchTerm={this.props.searchTerm}
                        />
                    </div>
                ) : null}

                {!this.state.hideBtn ? (
                    !this.state.popup ? (
                        <div
                            className="subscribe-update-btn"
                            onClick={() => this.handleClick()}
                        >
                            Subscribe
                        </div>
                    ) : null
                ) : null}
            </div>
        );
    }
}

export default Navbar;

Navbar.defaultProps = {
    secondaryNav: true,
    ladyAnn: false
};
