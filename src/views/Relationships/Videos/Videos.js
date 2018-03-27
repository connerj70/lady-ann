import React, { Component } from "react";
import "./Videos.css";
import axios from "axios";
import Container from "../../../components/Container/Container";
import YouTube from "react-youtube";
import InstagramEmbed from "react-instagram-embed";
import FacebookProvider, { EmbeddedPost } from "react-facebook";
import TweetEmbed from "react-tweet-embed";
import Ad from "../../../components/Ad/Ad";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";

class Videos extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
    }

    componentDidMount() {
        axios.get("/api/lady/videos").then(resp => {
            this.setState({
                videos: resp.data
            });
        });
    }

    render() {
        var postsToRender = this.state.videos.map((value, i) => {
            if (value.type === "twitter") {
                return (
                    <Container
                        admin={this.state.loggedIn}
                        key={i}
                        title={value.title}
                        tags={value.tags}
                        postId={value.post_id}
                        creation_date={value.creation_date}
                        category={value.category}
                        time={value.time}
                        moment_date={value.moment_date}
                    >
                        <div className="media-wrapper">
                            {/* <TwitterTweetEmbed tweetId={value.url} /> */}
                            <TweetEmbed id={value.url} />
                        </div>
                    </Container>
                );
            } else if (value.type === "instagram") {
                return (
                    <Container
                        admin={this.state.loggedIn}
                        key={i}
                        title={value.title}
                        tags={value.tags}
                        postId={value.post_id}
                        creation_date={value.creation_date}
                        category={value.category}
                        time={value.time}
                        moment_date={value.moment_date}
                    >
                        <Link to={value.url}>
                            {" "}
                            <div className="media-wrapper">
                                <InstagramEmbed
                                    url={value.url}
                                    hideCaption={false}
                                    containerTagName="div"
                                />
                            </div>
                        </Link>
                    </Container>
                );
            } else if (value.type === "youtube") {
                return (
                    <Container
                        admin={this.state.loggedIn}
                        key={i}
                        title={value.title}
                        tags={value.tags}
                        postId={value.post_id}
                        creation_date={value.creation_date}
                        category={value.category}
                        time={value.time}
                        youtubeContainer={true}
                        moment_date={value.moment_date}
                    >
                        <div
                            style={{ maxWidth: "700px" }}
                            className="media-wrapper"
                        >
                            <YouTube
                                videoId={value.url}
                                opts={{ suggestedQuality: "small" }}
                            />
                        </div>
                    </Container>
                );
            } else if (value.type === "facebook") {
                return (
                    <Container
                        admin={this.state.loggedIn}
                        key={i}
                        title={value.title}
                        tags={value.tags}
                        postId={value.post_id}
                        creation_date={value.creation_date}
                        category={value.category}
                        time={value.time}
                        moment_date={value.moment_date}
                    >
                        <div className="media-wrapper">
                            <FacebookProvider
                                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                            >
                                <EmbeddedPost href={value.url} width="500" />
                            </FacebookProvider>
                        </div>
                    </Container>
                );
            } else if (value.type === "ad") {
                return (
                    <Container
                        admin={this.state.loggedIn}
                        key={i}
                        title={value.title}
                        tags={value.tags}
                        postId={value.post_id}
                        creation_date={value.creation_date}
                        category={value.category}
                        time={value.time}
                        ad={true}
                    >
                        {/* <div className="media-wrapper"> */}
                        <Ad />
                        {/* </div> */}
                    </Container>
                );
                // } else if (value.type === "news") {
                //     return (
                //         <Container
                //             creation_date={value.creation_date}
                //             admin={this.state.loggedIn}
                //             key={i}
                //             tags={value.tags}
                //             postId={value.post_id}
                //             category={value.category}
                //             time={value.time}
                //             title={value.title}
                //             news={true}
                //             moment_date={value.moment_date}
                //         >
                //             <NewsCard
                //                 time={value.time}
                //                 creation_date={value.creation_date}
                //                 title={value.title}
                //                 description={value.description}
                //                 image={value.url}
                //                 // day={value.creation_date.split("/")[1]}
                //                 // month={value.creation_date.split("/")[0]}
                //             />
                //         </Container>
                //     );
                // } else {
                return null;
            }
        });

        return (
            <div className="relationship-videos-container">
                <div className="home_inner-posts-sidebar-container">
                    <div className="left-post-container">{postsToRender}</div>
                    <Sidebar search={this.handleTagClick} />
                </div>
            </div>
        );
    }
}

export default Videos;
