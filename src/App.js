import { useDispatch } from 'react-redux';
import './App.scss';
import React from 'react';
import { postData } from './redux/slices/formSlice';

function App() {
  const dispatch = useDispatch()
  const [user, setUser] = React.useState({
    name: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    password: '',
    passwordRepeat: ''
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (user.password !== user.passwordRepeat) {
      <div className='error'>
        <p>Passwords do not match</p>
      </div>
      return;
    }

    dispatch(postData(user))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <div className='form-control'>
            <label htmlFor="name"><b>First Name</b></label>
            <input onChange={handleChange} type="text" placeholder="Enter Name" id="name" name="name"  />
          </div>

          <div className='form-control'>
            <label htmlFor="lastName"><b>Last Name</b></label>
            <input onChange={handleChange} type="text" placeholder="Enter Last Name" id="lastName" name="lastName"  />
          </div>

          <div className='form-control'>
            <label htmlFor="date"><b>Date of birth</b></label>
            <input onChange={handleChange} type="date" name="dateOfBirth"  />
          </div>

          <div className='form-control'>
            <label>Gender:</label><br />
            <input onChange={handleChange} type="radio" id="male" name="gender"  />
            <label htmlFor="male">Male</label><br />
            <input onChange={handleChange} type="radio" id="female" name="gender" />
            <label htmlFor="female">Female</label>
          </div>

          <div className='form-control'>
            <label htmlFor="email"><b>Email</b></label>
            <input onChange={handleChange} type="text" placeholder="Enter Email" id="email" name="email"  />
          </div>

          <div className='form-control'>
            <label htmlFor="password"><b>Password</b></label>
            <input onChange={handleChange} type="password" placeholder="Enter Password" id="password" name="password" required />
          </div>

          <div className='form-control'>
            <label htmlFor="passwordRepeat"><b>Repeat Password</b></label>
            <input onChange={handleChange} type="password" placeholder="Repeat Password" id="passwordRepeat" required />
          </div>
          <hr />

          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" className="registerbtn">Register</button>
        </div>

        <div className="container signin">
          <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>
      </form>
    </div>
  );
}

export default App;