import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./Components/NavBar";
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import Artists from './Components/Artists';

function App() {
  return (
    <Router>
    <NavBar />
    <Footer />
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/artists" element={<Artists />} />
    </Routes>
  </Router>
  );
}

export default App;
