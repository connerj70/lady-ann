import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../assets/lady-ann-3.svg";
import SecondaryNav from "./SecondaryNav/SecondaryNav.js";
import { Link } from "react-router-dom";
import CustomForm from "../../components/CustomForm/CustomForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import axios from "axios";
import ReactGA from "react-ga";
import Notification from "react-web-notification";
import Modal from "../Modal/Modal";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            popup: false,
            hideBtn: false,
            title: "Notifications set",
            options: {
                body: "You will receive notifications from  ladyann.com"
            },
            modal: false,
            notifications: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleBellClick = this.handleBellClick.bind(this);
        this.handleBellClick2 = this.handleBellClick2.bind(this);
    }

    componentDidMount() {
        axios.get("/api/check-user").then(resp => {
            if (resp.data.subscribed) {
                this.setState({
                    hideBtn: true,
                    notifications: false
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
        this.sendEvent();
        this.setState(prevProps => {
            return {
                popup: !prevProps.popup
            };
        });
    }

    handleBellClick() {
        this.setState(prevProps => {
            return {
                modal: !prevProps.modal
            };
        });
    }

    handleBellClick2() {
        this.setState(prevProps => {
            return {
                modal: !prevProps.modal,
                notifications: true
            };
        });
    }

    sendEvent = event => {
        ReactGA.event({
            category: "button click",
            action: "click",
            label: "subscribe modal opened"
        });
    };

    closePopup = () => {
        this.setState({
            popup: false
        });
    };
    render() {
        let noti;
        if (this.state.notifications) {
            noti = (
                <Notification
                    title={this.state.title}
                    options={this.state.options}
                    askAgain={true}
                />
            );
        }
        return (
            <div className="navbar_wrapper">
                {this.state.modal ? (
                    <Modal
                        fnc={this.handleBellClick}
                        fnc2={this.handleBellClick2}
                        title="Would you like to recieve notifications?"
                    />
                ) : null}
                {noti}
                {this.state.popup ? (
                    <div className="mail-chimp-wrapper">
                        <span
                            style={{ color: "var(--red)", float: "right" }}
                            onClick={() => this.handleClick()}
                        >
                            X
                        </span>
                        <MailchimpSubscribe
                            url="https://pankaata.us12.list-manage.com/subscribe/post?u=22c1870a1568339e5ca97c8f0&amp;id=148d98d01f"
                            render={({ subscribe, status, message }) => (
                                <CustomForm
                                    closePopup={this.closePopup}
                                    handleClick={this.handleClick}
                                    status={status}
                                    message={message}
                                    onValidated={formData => {
                                        subscribe(formData);
                                    }}
                                />
                            )}
                        />
                    </div>
                ) : null}
                <div className="navbar">
                    <div className="smaller-navbar-wrapper">
                        <div className="navbar_logo">
                            <Link to="/">
                                <img
                                    className="pankaata-logo"
                                    alt="logo"
                                    src={logo}
                                />
                            </Link>
                        </div>
                        <div className="desktop-nav">
                            <ul>
                                <Link to="/relationships/videos">
                                    <li className="navbar_dropdown">Videos</li>
                                </Link>
                                <Link to="/relationships/letters">
                                    <li className="navbar_dropdown">Letters</li>
                                </Link>
                                <Link to="/relationships/goals">
                                    <li className="navbar_dropdown">
                                        Relationship Goals
                                    </li>
                                </Link>
                                <Link to="/relationships/email">
                                    <li className="navbar_dropdown">
                                        Email Lady. Ann
                                    </li>
                                </Link>
                                <Link to="/relationships/about">
                                    <li className="navbar_dropdown">
                                        About Lady. Ann
                                    </li>
                                </Link>

                                <li
                                    onClick={() => this.handleBellClick()}
                                    style={{ color: "#ea8b88" }}
                                    className="navbar_dropdown"
                                >
                                    <i className="fas fa-bell" />
                                </li>

                                <li className="navbar_dropdown">
                                    {!this.state.popup ? (
                                        <div
                                            role="button"
                                            aria-label="Add Chamukos tequila to cart"
                                            className="subscribe-update-btn"
                                            onClick={() => this.handleClick()}
                                        >
                                            Subscribe
                                        </div>
                                    ) : null}
                                </li>
                                {/* <Link to="/thousandwords">
                            <li className="navbar_dropdown">ThousandWords</li>
                        </Link> */}
                            </ul>
                        </div>
                        <div
                            className="menu-drop"
                            onClick={() => this.handleMenu()}
                        >
                            {this.state.menu ? (
                                <div
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "100",
                                        marginLeft: "40px"
                                    }}
                                >
                                    x
                                </div>
                            ) : (
                                <div>MENU &#9660;</div>
                            )}
                        </div>
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
                        <Link to="/relationships/goals">
                            <li className="navbar_dropdown">
                                Relationship Goals
                            </li>
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
                        {!this.props.ladyAnn ? (
                            <SecondaryNav
                                handleSearchTerm={this.props.handleSearchTerm}
                                handleSearchEnter={this.props.handleSearchEnter}
                                clearSearch={this.props.clearSearch}
                                searchTerm={this.props.searchTerm}
                            />
                        ) : null}
                    </div>
                ) : null}

                {!this.state.hideBtn ? (
                    !this.state.popup ? (
                        <div
                            aria-label="Open email list subscribe modal"
                            role="button"
                            className="subscribe-update-btn hide"
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
