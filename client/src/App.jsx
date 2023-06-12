import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home'
import Test from './pages/test'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test/>} />
    </Routes>
    </div>
    </>
  );
}

export default App