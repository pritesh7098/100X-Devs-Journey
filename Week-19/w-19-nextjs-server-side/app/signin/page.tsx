'use client'

import React from "react";

function Signin() {
  const formStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
    width: "80%",
    maxWidth: "300px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 20px",
    marginTop: "20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={formStyle}>
      <h1>SignIn Page</h1>
      <input
        type="text"
        placeholder="Enter your name"
        required
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Enter your email"
        required
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Enter your password"
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </div>
  );
}

export default Signin;
