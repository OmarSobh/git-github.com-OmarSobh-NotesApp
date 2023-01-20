import React, { useState, } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import '../css/Login.css';
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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const { emailPass } = useContext(AuthContext);



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailPass.email === email && emailPass.password === password) {
      setIsAuthenticated(true);
      alert(`Welcome ${email}!`);
      navigate("/AddNote");
    } else {
      alert("Email or password is incorrect");
    }
  };

  return (
    <div className="login-container">
      
      <MDBContainer className='my-5'>
      <h2>Login</h2>
        <MDBCard>

          <MDBRow className='g-0 d-flex align-items-center'>

            <MDBCol md='4'>
              <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
            </MDBCol>

            <MDBCol md='8'>
              <form onSubmit={handleSubmit}>
                <MDBCardBody>

                  <MDBInput wrapperClass='mb-4' label='Email address' id='form1' value={email}
                    onChange={handleEmailChange}
                    required />
                  <MDBInput wrapperClass='mb-4' label='Password' id='form2' value={password}
                    onChange={handlePasswordChange}
                    required />

                  <div className="d-flex justify-content-between mx-4 mb-4">
                    
                    
                    <Link to={"register"} ><a href="!#">Create Acount </a></Link>
                  </div>

                  <MDBBtn type="submit" className="mb-4 w-100">Sign in</MDBBtn>

                </MDBCardBody>
              </form>
            </MDBCol>

          </MDBRow>

        </MDBCard>
      </MDBContainer>


     
    </div >
  );
};

export default Login;
