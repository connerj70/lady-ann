import React, { Component } from "react";
import "./Post.css";
import Navbar from "../../components/Navbar/Navbar";
import instagram from "../../assets/instagram-example2.png";
import youtube from "../../assets/youtube-example2.png";
import twitter from "../../assets/twitter-example2.png";

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            type: ""
        };
    }

    handleChange(e) {
        var name = e.target.name;
        var value = e.target.value;

        this.setState(
            {
                [name]: value
            },
            () => console.log(this.state)
        );
    }

    handleClick(e) {
        e.preventDefault();
        console.log("clicked");
    }

    render() {
        return (
            <div className="post">
                <Navbar secondaryNav={false} />
                <div className="post_inner-container">
                    <h1>Create New Post</h1>
                    <form>
                        <fieldset>
                            <label>Post Title</label>
                            <input
                                onChange={e => this.handleChange(e)}
                                type="text"
                                name="title"
                            />
                        </fieldset>
                        <fieldset>
                            <label>Post Type</label>
                            <select
                                name="type"
                                onChange={e => this.handleChange(e)}
                            >
                                <option value="">Select An Option</option>
                                <option value="twitter">Twitter</option>
                                <option value="instagram">Instagram</option>
                                <option value="youtube">Youtube</option>
                                <option value="news">News</option>
                            </select>
                        </fieldset>

                        {this.state.type === "" ? null : this.state.type ===
                        "twitter" ? (
                            <div>
                                <h3 className="social-helper-h3">
                                    Please copy this number, from the tweet you
                                    would like to post, into the box below
                                </h3>
                                <img
                                    className="social-helper-image"
                                    src={twitter}
                                />
                                <input
                                    name="url"
                                    onChange={e => this.handleChange(e)}
                                    type="text"
                                    placeholder="twitter post id"
                                />
                            </div>
                        ) : this.state.type === "instagram" ? (
                            <div>
                                <h3 className="social-helper-h3">
                                    Please copy the entire url of the instagram
                                    post your would like to post into the box
                                    below
                                </h3>
                                <img
                                    className="social-helper-image"
                                    src={instagram}
                                />
                                <input
                                    name="url"
                                    onChange={e => this.handleChange(e)}
                                    type="text"
                                    placeholder="instagram post url"
                                />
                            </div>
                        ) : this.state.type === "youtube" ? (
                            <div>
                                <h3 className="social-helper-h3">
                                    Please copy this number from the youtube
                                    video you would like to post into the box
                                    below
                                </h3>
                                <img
                                    className="social-helper-image"
                                    src={youtube}
                                />
                                <input
                                    name="url"
                                    onChange={e => this.handleChange(e)}
                                    type="text"
                                    placeholder="youtube video id"
                                />
                            </div>
                        ) : (
                            <input
                                name="url"
                                onChange={e => this.handleChange(e)}
                                type="text"
                                placeholder="new article url"
                            />
                        )}
                        <button onClick={e => this.handleClick(e)}>
                            Submit Post
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Post;