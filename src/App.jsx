import "./App.css";

import React from "react";

import { BrowserRouter } from "react-router-dom";

import Router from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
