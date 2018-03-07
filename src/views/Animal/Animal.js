import React, { Component } from "react";
import "./Animal.css";
import Navbar from "../../components/Navbar/Navbar";
import PostContainer from "../../components/PostContainer/PostContainer";

class Animal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <PostContainer category="animal" />
            </div>
        );
    }
}

export default Animal;
