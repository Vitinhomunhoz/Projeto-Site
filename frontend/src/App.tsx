
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Treinos from './pages/Treinos';
import PorQueTreinar from './pages/PorQueTreinar';
import './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treinos" element={<Treinos />} />
        <Route path="/por-que-treinar" element={<PorQueTreinar />} />
      </Routes>
    </Router>
  );
}