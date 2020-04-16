import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./componets/layout/Navbar";
import Homepage from "./componets/pages/Homepage";
import Aboutpage from "./componets/pages/Aboutpage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={Aboutpage} />
    </div>
  );
}

export default App;
