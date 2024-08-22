// src/Components/Login/PasswordReset.jsx
import React, { useState } from 'react';
import { sendPasswordReset } from '../../firebaseConfig';

function PasswordReset() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleReset = async (event) => {
        event.preventDefault();
        try {
            await sendPasswordReset(email);
            setMessage('Password reset email sent. Please check your inbox.');
        } catch (error) {
            setMessage('Failed to send password reset email.');
        }
    };

    return (
        <div className='login-container'>
            <h2>Reset Password</h2>
            <form onSubmit={handleReset}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email"
                        placeholder="enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Reset Email</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default PasswordReset;
