import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import useSWR from 'swr'
export default function Home() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/getvideos")
      .then((res) => res.json())
      .then((video) => setMessage(video[0].url))
  }, []);
  return (
    <>
    <div className="App">
      <h1 className="text-center text-5xl pt-10">Cat Videos!</h1>
      <iframe src={message} className="m-auto pt-52" width={700} height={700}></iframe>
    </div>
    </>
  );
}

