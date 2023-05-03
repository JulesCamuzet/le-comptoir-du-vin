import "./App.css";
import Home from "./Home";
import NavMenu from "./components/NavMenu";
import NosVignerons from "./NosVignerons";

import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <NavMenu navButtonColor="white" />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/nos-vignerons" element={<NosVignerons />} />
          <Route path="*" element={<Navigate to={"/home"} replace />} />
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
