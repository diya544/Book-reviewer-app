// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// src/index.js or src/App.js

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import PasswordReset from './Components/Login/PasswordReset';
import Romance from './Components/Romance/Romance';
import Horror from './Components/Horror/Horror';
import GenrePage from './Components/Genree/GenrePage';
import PrivateRoute from './Components/PrivateRoute'; // Import PrivateRoute

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    {/* Auth Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/password-reset" element={<PasswordReset />} />
                    
                    {/* Main Content Routes */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/romance" element={<Romance />} />
                    <Route path="/horror" element={<Horror />} />
                    
                    {/* Protected Routes */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/genres" element={<GenrePage />} />
                    </Route>
                    
                    {/* Default Route */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
