/*import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Login/Register.jsx';
function App() {
  return (
    <Router>
    <div className='App'>
      
          <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          </Routes>
          </div>
      </Router>
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import GenrePage from './Components/Genree/GenrePage.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/genres" element={<GenrePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

