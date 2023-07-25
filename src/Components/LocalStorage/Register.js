import React,{useState} from 'react'


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  
  
  const handleReg = () => {
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

    if (password !== cpassword) {
      setRegistrationError('Password and confirm password do not match.');
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
    setCpassword('');
    setRegistrationError('');
  };

  return (
    <div className='all'>
    <div className="container">
      <form action="" id="form">
        <h2>REGISTER</h2>

        <div className="input-grp">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            id="username"
          />
          <div className="error"></div>
        </div>
        <div className="input-grp">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
          <div className="error"></div>
        </div>
        <div className="input-grp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
          />
          <div className="error"></div>
        </div>
        <div className="input-grp">
          <label htmlFor="cpassword">Confirm password</label>
          <input
            type="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            name="confirm password"
            id="cpassword"
          />
          <div className="error">
            {registrationError && <div className="error">{registrationError}</div>}
          </div>
        </div>
        <div className='btn'>
          <button type="button" onClick={handleReg}>
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register