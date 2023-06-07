import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import NetFlixShow from "./pages/NetFlixShow";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop /> 
        <Routes>
          <Route exact path="/" Component={Home} />,
          <Route path="netflix-show" Component={NetFlixShow} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
