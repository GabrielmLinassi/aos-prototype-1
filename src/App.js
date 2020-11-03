import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* --- */
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { Lease } from "./Components/Lease/Lease";

function App() {
  return (
    <Router>
      <Route path="/">
        <Navbar />
      </Route>
      <Route exact path="/">
        <Hero />
      </Route>
      <Route exact path="/lease/:type/:city">
        <Lease />
      </Route>
    </Router>
  );
}

export default App;
