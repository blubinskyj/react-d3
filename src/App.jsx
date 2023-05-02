import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/hone/home.jsx';
import Navigation from './navigation/header.jsx';
import Examples from './pages/examples/examples.jsx';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="examples" element={<Examples />} />
      </Routes>
    </div>
  );
};
export default App;
