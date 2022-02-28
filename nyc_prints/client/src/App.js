import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./Components/NavBar";
import Welcome from './Components/Welcome';

function App() {
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  </Router>
  );
}

export default App;
