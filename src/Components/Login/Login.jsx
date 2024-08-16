import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

function Login(){
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const handlesubmit=(event)=>{
        event.preventDefault();
        console.log('Username:',username);
        console.log('Password:',password);
    };
    return(
        <div className='login-container'>
        <h2 >Login Page</h2>
        <form onSubmit={handlesubmit}>
            <div>
            <label>Username:</label>
                <input 
                type="text"
                placeholder="enter username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                required
                />
            </div>
            <div>
            <label>Password:</label>
                <input 
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit">Login</button>

        </form>
        
        <h3>Not a member?<Link to="/register">Register</Link> </h3>
        </div>
    );
}
export default Login;