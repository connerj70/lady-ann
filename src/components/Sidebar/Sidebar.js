import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Ad from "../../components/Ad/Ad";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { tags: [] };
    }
    // componentDidMount() {
    //     axios.get("/api/tags").then(resp => {
    //         this.setState({
    //             tags: resp.data.sort((a, b) => {
    //                 return b.count - a.count;
    //             })
    //         });
    //     });
    // }

    render() {
        // let tagsToRender = this.state.tags.map((value, i) => {
        //     let color = randomColor();
        //     return (
        //         <div key={i}>
        //             <div
        //                 style={{ backgroundColor: color }}
        //                 className="sidebar_color"
        //             />
        //             <div
        //                 className="sidebar_tag"
        //                 onClick={() => this.props.search(value.name)}
        //             >
        //                 {/* <div>{value.name}</div> */}
        //                 {/* <div>{value.count}</div> */}
        //             </div>
        //         </div>
        //     );
        // });
        return (
            <div className="sidebar">
                <Link to="/relationships/videos">
                    <div>
                        <div
                            style={{ backgroundColor: "#333333" }}
                            className={
                                // window.location.hash ===
                                // "#/relationships/videos"
                                //     ? "sidebar_color active"
                                "sidebar_color"
                            }
                        />
                        <div className="sidebar_tag">
                            {/* <div>{value.name}</div> */}
                            {/* <div>{value.count}</div> */}
                            Videos
                        </div>
                    </div>
                </Link>
                <Link to="/relationships/letters">
                    <div>
                        <div
                            style={{
                                backgroundColor: "var(--secondary-highlights)"
                            }}
                            className={
                                // window.location.hash ===
                                // "#/relationships/letters"
                                //     ? "sidebar_color active"
                                //     : "sidebar_color"
                                "sidebar_color"
                            }
                        />
                        <div className="sidebar_tag">
                            {/* <div>{value.name}</div> */}
                            {/* <div>{value.count}</div> */}
                            Letters
                        </div>
                    </div>
                </Link>
                <Link to="/relationships/email">
                    <div>
                        <div
                            style={{ backgroundColor: "#333333" }}
                            className={
                                // window.location.hash === "#/relationships/email"
                                //     ? "sidebar_color active"
                                //     : "sidebar_color"
                                "sidebar_color"
                            }
                        />
                        <div className="sidebar_tag">
                            {/* <div>{value.name}</div> */}
                            {/* <div>{value.count}</div> */}
                            Email Lady. Ann
                        </div>
                    </div>
                </Link>
                <Link to="/relationships/about">
                    <div>
                        <div
                            style={{
                                backgroundColor: "var(--secondary-highlights)"
                            }}
                            className={
                                // window.location.hash === "#/relationships/about"
                                //     ? "sidebar_color active"
                                //     : "sidebar_color"
                                "sidebar_color"
                            }
                        />
                        <div className="sidebar_tag">
                            {/* <div>{value.name}</div> */}
                            {/* <div>{value.count}</div> */}
                            About Lady. Ann
                        </div>
                    </div>
                </Link>

                <div className="sidebar_ad-container">
                    <Ad />
                </div>
            </div>
        );
    }
}

export default Sidebar;
