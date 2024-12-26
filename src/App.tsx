import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import NovelPage from './pages/NovelPage';
import LogIn from './pages/LogIn';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/novels/:name" element={<NovelPage />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </Router>
  );
};

export default App;
