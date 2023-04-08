import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useContext } from "react";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import Nav from "./Components/Nav";
import MyList from "./Components/MyList";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/myList" element={<MyList />} />
        <Route path="/" element={<Home />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
  <Home />;
}

export default App;
