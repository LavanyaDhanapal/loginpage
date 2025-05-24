import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import LoginUI from './Components/LoginUi';
import RegisterUI from './Components/Register'; // import register component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginUI />} />
        <Route path="/register" element={<RegisterUI />} />
        <Route path="*" element={<LoginUI />} /> {/* default route */}
      </Routes>
    </Router>
  );
}

export default App;
