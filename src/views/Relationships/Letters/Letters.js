import React, { Component } from "react";
import "./Letters.css";
import Letter from "../../../components/Letter/Letter";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";

class Letters extends Component {
    constructor(props) {
        super(props);
        this.state = { letters: [] };
    }

    componentDidMount() {
        axios.get("/api/letters/replied").then(resp => {
            this.setState({
                letters: resp.data
            });
        });
    }

    render() {
        let lettersToShow = this.state.letters.map((value, i) => {
            return (
                <Link key={i} to={"/relationships/letter/" + value.letter_id}>
                    <Letter
                        subject={value.subject}
                        situation={value.situation}
                        cut={true}
                    />
                </Link>
            );
        });

        return (
            <div className="user-letter-wrapper">
                <div className="home_inner-posts-sidebar-container">
                    <div className="left-post-container">
                        <div className="letter-page-header">
                            <h1>Letters</h1>
                        </div>
                        <div className="user-letter-container">
                            {lettersToShow}
                        </div>
                    </div>
                    <Sidebar search={this.handleTagClick} />
                </div>
            </div>
        );
    }
}

export default Letters;
