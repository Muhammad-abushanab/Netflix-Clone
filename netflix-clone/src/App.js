import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import FavList from './components/FavList/FavList';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favlist' element={<FavList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
