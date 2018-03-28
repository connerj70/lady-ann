import React, { Component } from "react";
import "./SecondaryNav.css";

class SecondaryNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false
        };
    }

    handleSearchOpen() {
        this.setState(prevProps => {
            return {
                search: !prevProps.search
            };
        });
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.props.handleSearchEnter();
        }
    }

    handleSearchClear() {
        this.props.clearSearch();
        this.setState({
            search: false
        });
    }

    render() {
        return (
            <div className="secondary-nav">
                <div className="secondary-nav-wrapper">
                    {this.state.search ? (
                        <div className="secondary-nav_search-open-div">
                            <div>
                                <i className="fas fa-search" />
                                <input
                                    value={this.props.searchTerm}
                                    onKeyPress={e => this.handleKeyPress(e)}
                                    onChange={e =>
                                        this.props.handleSearchTerm(
                                            e.target.value
                                        )
                                    }
                                    autoFocus="autoFocus"
                                    className="secondary-nav-input"
                                    type="text"
                                />
                            </div>
                            <div>
                                <div
                                    style={{
                                        marginRight: "10px",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => this.handleSearchClear()}
                                >
                                    Clear
                                </div>
                                <div
                                    style={{ cursor: "pointer" }}
                                    onClick={() => this.handleSearchOpen()}
                                >
                                    x
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="secondary-nav_initial-search">
                            <div />
                            <div
                                className="secondary-nav_search"
                                onClick={() => this.handleSearchOpen()}
                            >
                                <i className="fas fa-search" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default SecondaryNav;
