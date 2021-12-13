import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Info from "./screens/Info";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/payment" exact element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
