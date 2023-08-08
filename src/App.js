import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom"
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
