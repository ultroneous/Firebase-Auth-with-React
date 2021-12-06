import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Register from "./pages/Register";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/register"
              element={
                <Register
                  setIsLoggedIn={setIsLoggedIn}
                  setUserData={setUserData}
                />
              }
            />
            <Route path="*" element={<Navigate to={"/register"} />} />
            {isLoggedIn ? (
              <Route
                path="/"
                element={<Home setIsLoggedIn={setIsLoggedIn} user={userData} />}
              />
            ) : null}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
