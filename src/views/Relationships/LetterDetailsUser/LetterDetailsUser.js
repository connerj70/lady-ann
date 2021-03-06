import React, { Component } from "react";
import "./LetterDetailsUser.css";
import axios from "axios";
import Letter from "../../../components/Letter/Letter";

class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            situation: "",
            sender: "",
            anonymous: false,
            response: "",
            date: ""
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios
            .get("/api/lady/letter/" + this.props.match.params.id)
            .then(resp => {
                const {
                    subject,
                    situation,
                    sender,
                    response,
                    date
                } = resp.data;
                this.setState({
                    subject,
                    situation,
                    sender,
                    response,
                    date
                });
            });
    }

    render() {
        return (
            <div className="letter-details-user-container">
                <Letter
                    subject={this.state.subject}
                    situation={this.state.situation}
                    sender={this.state.sender}
                    anonymous={this.state.anonymous}
                    cut={false}
                    response={this.state.response}
                    date={this.state.date}
                />
            </div>
        );
    }
}

export default componentName;
