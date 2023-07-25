import React, { useState } from 'react';
import Dashboard from './Dashboard';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [dash, setDash] = useState(false)
  const [login,setLogin]=useState(true)

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      const foundUser = userData.find(
        (user) => user.username === username && user.password === password);
      if ((user) => user.username === username && user.password === password){
        setDash(true)
        setLogin(false)
      }
      if (foundUser) {
        alert('Login successful!');
        setLoginError(false);
      } else {
        setLoginError(true);
      }
    } else {
      alert('No user data found. Please register first.');
    }
  };

  return (
    <div className="container">
      {dash ? <Dashboard /> :
      <form action="" id="login-form" onSubmit={handleLogin}>
        <h2>LOGIN</h2>
        <div className="input-grp">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="error"></div>
        </div>
        <div className="input-grp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error"></div>
        </div>
        {loginError && (
          <div className="error">Wrong credentials. Please try again.</div>
        )}
        <div>
          <button type="submit" >Login</button>
        </div>
      </form>
      }
    </div>
  );
};

export default Login;

