import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 12; // Password length
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; // Characters to include in password
    let newPassword = "";
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    
    setPassword(newPassword);
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <input type="text" value={password} readOnly />
      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
}

export default App;
