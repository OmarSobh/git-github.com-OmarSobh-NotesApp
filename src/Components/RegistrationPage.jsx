import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import '../css/register.css';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { setEmailPass } = useContext(AuthContext);

  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords incoeect");
      return;
    }
    setEmailPass({ email: email, password: password });
    alert(`Acount craeted sucssefully`);
    navigate('/');
  };

  return (
    <div className="register-container">
      
      <MDBContainer className='my-5'>
      <h2>Register</h2>
        <MDBCard>

          <MDBRow className='g-0 d-flex align-items-center'>

            <MDBCol md='4'>
              <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
            </MDBCol>

            <MDBCol md='8'>
              <form onSubmit={handleSubmit}>
                <MDBCardBody >

                  <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={email}
                    onChange={handleEmailChange} />
                  <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password}
                    onChange={handlePasswordChange} />
                  <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form3' type='password' value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required />

                  <div className="d-flex justify-content-between mx-4 mb-4">
                    
                    <Link to={"/"}> Go to Login</Link>
                  </div>

                  <MDBBtn className="mb-4 w-100" type='submit'>Sign Up</MDBBtn>

                </MDBCardBody>
              </form>
            </MDBCol>

          </MDBRow>

        </MDBCard>
      </MDBContainer>

      
    </div>
  );
};

export default Register;
