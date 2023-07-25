import React from 'react';

import PropTypes from 'prop-types';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  } from 'mdb-react-ui-kit';

const Register = () => {
   
           



 return (
        <div>

    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <module.MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <module.MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <module.MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'/>
          <module.MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
          <module.MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          <module.MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <module.MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <module.MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</module.MDBBtn>
        </module.MDBCardBody>
      </module.MDBCard>
    </MDBContainer>


        </div>
    );
};


Register.propTypes = {

};


export default Register;
