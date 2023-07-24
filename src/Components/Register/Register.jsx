import React, { useState } from 'react';
import './Register.css';

import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';


const Register = () => {
    const auth = getAuth(app);
    const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');

    // Submit Btn 
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.email.value; 
        // console.log(event.target.value);
        console.log(email,password);

        // create user in fb

        createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    const loggedUser = result.user;
    console.log(loggedUser);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
    // Email 
    const handleEmailChange = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);

    }

    // Password 

    const handlePasswordBlur = (event) => {
        console.log(event.target.value);
        // setPassword(event.target.value);
        
    }
    return (
        <div className='w-50 mx-auto'>
            <h4 className='mb-5'>Please Register</h4>
            <form action="" onSubmit="handleSubmit">
                <input onChange={handleEmailChange} type="text" className="w-50 mb-4 form-control rounded" name="email" id="email" placeholder="Your Email" />
               
                <input onBlur={handlePasswordBlur} type="password" className="form-control w-50 mb-4 rounded" name="password" id="password" placeholder="Your password" />
              
                <input className=" btn btn-primary" type="submit" value="Register" />

            </form>
        </div>
    );
};

export default Register;