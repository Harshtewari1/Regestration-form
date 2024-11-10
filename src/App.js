import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />  {/* Default Signup Page */}
          <Route path="/login" element={<Login />} /> {/* Login Page */}
        </Routes>
      </Router>
    </> 
  
  )
}

export default App;
