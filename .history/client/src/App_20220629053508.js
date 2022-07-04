import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import Navbar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
