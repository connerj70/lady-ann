import React from "react";
import "./CustomForm.css";
import axios from "axios";

const CustomForm = ({ status, message, onValidated, handleClick }) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });

    const handleBoth = () => {
        submit();
        axios.post("/api/user-subscribe");
    };

    return (
        <div
            style={{
                background: "#efefef",
                borderRadius: 2,
                width: "320px",
                height: "270px",
                margin: "10px auto",
                padding: 10,
                display: "flex",
                flexDirection: "column"
            }}
        >
            {status === "sending" && (
                <div style={{ color: "blue" }}>sending...</div>
            )}
            {status === "error" && (
                <div style={{ color: "red" }}>{message}</div>
            )}
            {status === "success" && (
                <div style={{ color: "green" }}>{message}</div>
            )}
            <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>
                Subscribe for daily updates
            </h1>
            <br />
            <input
                style={{ fontSize: "1.1em", padding: 5 }}
                ref={node => (email = node)}
                type="email"
                placeholder="Your email"
            />
            <br />
            <button
                className="chimp-mail-button"
                style={{ fontSize: "2em", padding: 5 }}
                onClick={handleBoth}
            >
                Submit
            </button>
        </div>
    );
};

export default CustomForm;
