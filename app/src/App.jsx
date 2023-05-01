import './App.css';
import Home from './Home';
import NosVignerons from './NosVignerons';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/nos-vignerons' element={<NosVignerons />} />
        <Route path='*' element={<Navigate to={'/home'} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
