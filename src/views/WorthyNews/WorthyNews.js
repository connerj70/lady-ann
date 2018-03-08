import React, { Component } from "react";
import "./WorthyNews.css";
import Navbar from "../../components/Navbar/Navbar";

class WorthyNews extends Component {
    componentDidMount() {}

    render() {
        return (
            <div>
                <Navbar />

                <div id="mc_embed_signup">
                    <form
                        action="https://connerjensen.us12.list-manage.com/subscribe/post?u=d027a268dc690865020f8ba3c&amp;id=bed3d31b47"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        class="validate"
                        target="_blank"
                        novalidate
                    >
                        <div id="mc_embed_signup_scroll">
                            <h2>Subscribe for daily updates</h2>
                            <div class="indicates-required">
                                <span class="asterisk">*</span> indicates
                                required
                            </div>
                            <div class="mc-field-group">
                                <label for="mce-EMAIL">
                                    Email Address{" "}
                                    <span class="asterisk">*</span>
                                </label>
                                <input
                                    type="email"
                                    value=""
                                    name="EMAIL"
                                    class="required email"
                                    id="mce-EMAIL"
                                />
                            </div>
                            <div class="mc-field-group">
                                <label for="mce-FNAME">First Name </label>
                                <input
                                    type="text"
                                    value=""
                                    name="FNAME"
                                    class=""
                                    id="mce-FNAME"
                                />
                            </div>
                            <div class="mc-field-group">
                                <label for="mce-LNAME">Last Name </label>
                                <input
                                    type="text"
                                    value=""
                                    name="LNAME"
                                    class=""
                                    id="mce-LNAME"
                                />
                            </div>
                            <div id="mce-responses" class="clear">
                                <div
                                    class="response"
                                    id="mce-error-response"
                                    style={{ display: "none" }}
                                />
                                <div
                                    class="response"
                                    id="mce-success-response"
                                    style={{ display: "none" }}
                                />
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    left: "-5000px"
                                }}
                                aria-hidden="true"
                            >
                                <input
                                    type="text"
                                    name="b_d027a268dc690865020f8ba3c_bed3d31b47"
                                    tabindex="-1"
                                    value=""
                                />
                            </div>
                            <div class="clear">
                                <input
                                    type="submit"
                                    value="Subscribe"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    class="button"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default WorthyNews;
