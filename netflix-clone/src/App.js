import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
