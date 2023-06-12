import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Test() {
  return (
    <>
    <div className="App">
      <h1 className="text-center text-4xl">Test</h1>
      <button><Link to="/">Go Back</Link></button>
    </div>
    </>
  );
}
