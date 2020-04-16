import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./componets/layout/Navbar";
import Homepage from "./componets/pages/Homepage";
import Aboutpage from "./componets/pages/Aboutpage";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/`)
      .then((res) => {
        console.log("Users: ", res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div className="App">
      <Route path="/" component={Navbar} />
      <Route exact path="/" render={() => <Homepage users={users} />} />
      <Route path="/about" component={Aboutpage} />
    </div>
  );
}

export default App;
