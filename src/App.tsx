import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user: string, password: string) => {
    // For demonstration purposes, we'll use a simple check
    if (user === 'demo' && password === 'password') {
      setIsLoggedIn(true);
      setUsername(user);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard username={username} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;