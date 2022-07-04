import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
