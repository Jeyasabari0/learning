import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { TextField,Button } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dash, setDash] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      const foundUser = userData.find(
        (user) => user.username === username && user.password === password);
      if (foundUser) {
        alert('Login successful!');
        setDash(true)
       
      } else {
        alert('Wrong credentials. Please try again.');
      }
    } else {
      alert('No user data found. Please register first.');
    }
  };

  return (
    <div className="container">
      {dash ? <Dashboard /> :
      <form>
        <h2>LOGIN</h2>
        <div className="input-grp">
          <TextField variant='outlined'label='Username' type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input-grp">
          <TextField variant='outlined'label='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <Button variant='contained' type="submit" onClick={handleLogin} >Login</Button>
        </div>
      </form>
      }
    </div>
  );
};

export default Login;

