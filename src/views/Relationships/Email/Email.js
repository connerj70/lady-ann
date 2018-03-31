import React, { Component } from "react";
import "./Email.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import banner from "../../../assets/la banner-EDIT.png";
import logo from "../../../assets/Asset 1.svg";

class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: "",
            subject: "",
            situation: "",
            anonymous: false
        };
    }

    componentDidMount() {
        axios.get("/api-lady-ann-save").then(resp => {
            this.setState({
                subject: resp.data.subject,
                from: resp.data.from,
                situation: resp.data.situation
            });
        });
        this.setState({
            interval: setInterval(() => {
                axios
                    .post("/api-lady-ann-save", {
                        from: this.state.from,
                        subject: this.state.subject,
                        situation: this.state.situation
                    })
                    .then(resp => {});
            }, 10000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    handleChange(e) {
        let value = e.target.value;
        let name = e.target.name;

        this.setState({
            [name]: value
        });
    }

    handleCheckbox() {
        this.setState(prevProps => {
            return {
                anonymous: !prevProps.anonymous
            };
        });
    }

    handleClick() {
        axios
            .post("/api/lady/email", {
                from: this.state.from,
                subject: this.state.subject,
                situation: this.state.situation,
                anonymous: this.state.anonymous
            })
            .then(resp => {
                toast.info("Message Sent");
                setTimeout(() => {
                    this.props.history.push("/relationships/videos");
                }, 2000);
            });
    }

    render() {
        return (
            <div className="lady-ann-email">
                <img
                    style={{ width: "90%", margin: "20px auto" }}
                    src={banner}
                />
                <div className="lady-ann-logo2-container">
                    <img className="lady-ann-logo2" src={logo} />
                </div>
                {/* <h3 className="lady-ann-to">To: LadyAnn@Pankaata.com</h3> */}
                <div className="email_sub-container">
                    <h3>To:</h3>
                    <input
                        name="from"
                        type="text"
                        placeholder="LadyAnn@Pankaata.com"
                        disabled
                    />
                </div>
                <div className="email_sub-container">
                    <h3>From:</h3>
                    <input
                        value={this.state.from}
                        name="from"
                        onChange={e => this.handleChange(e)}
                        type="text"
                        placeholder="Johndoe@gmail.com"
                    />
                </div>
                <div className="email_sub-container">
                    <h3>Subject:</h3>
                    <input
                        value={this.state.subject}
                        name="subject"
                        onChange={e => this.handleChange(e)}
                        type="text"
                        placeholder="Hi Lady Ann."
                    />
                </div>
                <div className="email_sub-container">
                    <h3>Situation Box:</h3>
                    <textarea
                        value={this.state.situation}
                        placeholder="Dear Lady. Ann"
                        name="situation"
                        onChange={e => this.handleChange(e)}
                        rows="10"
                    />
                </div>

                <div className="email_sub-container">
                    <h3>Dear Lady. Ann, please keep me anonymous</h3>
                    <input
                        style={{
                            width: "30px",
                            height: "30px",
                            marginTop: "5px"
                        }}
                        onChange={() => this.handleCheckbox()}
                        type="checkbox"
                    />
                </div>
                <div className="email_sub-container button-container">
                    <button onClick={() => this.handleClick()}>Send</button>
                </div>
                <ToastContainer autoClose={1800} />
            </div>
        );
    }
}

export default Email;
