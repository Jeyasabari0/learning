import { TextField,Button} from '@mui/material';
import React, { useState } from 'react'


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');


  const submit = () => {
    const storedUserData = localStorage.getItem('userData');
    const existingUserData = storedUserData ? JSON.parse(storedUserData) : [];

    const existingUser = existingUserData.find(
      (user) => user.username === username || user.email === email
    );

    if (existingUser) {
      setRegistrationError(
        existingUser.username === username
          ? alert('Username already exists. Please choose a different one.')
          : alert('Email address is already registered. Please use a different one.')
      );
      return;
    }

    const newUserData = {
      username,
      email,
      password,
    };

    const updatedUserData = [...existingUserData, newUserData];
    localStorage.setItem('userData', JSON.stringify(updatedUserData));

    setUsername('');
    setEmail('');
    setPassword('');
    setRegistrationError('');
  };

  return (
    <div className='all'>
      <div className="container">
        <form action="" id="form">
          <h2>REGISTER</h2>
          <div><TextField variant='outlined' type="text" label='Username' value={username} onChange={(e) => setUsername(e.target.value)}/></div>
            <div><TextField variant='outlined' type="text" label='email' value={email} onChange={(e) => setEmail(e.target.value)}/></div>
            <div><TextField variant='outlined' type="password" label='password' value={password} onChange={(e) => setPassword(e.target.value)}/></div>
            <Button variant='contained'type="button" onClick={submit}>Submit</Button>
            {registrationError && <div className="error">{registrationError}</div>}

        </form>
      </div>
    </div>
  );
};

export default Register