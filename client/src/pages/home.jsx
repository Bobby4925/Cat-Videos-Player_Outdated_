import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
    <div className="App">
      <h1 className="text-center text-4xl">{message}</h1>
      <h2>Hello</h2>
      <button><Link to="/test">Test</Link></button>
    </div>
    </>
  );
}
