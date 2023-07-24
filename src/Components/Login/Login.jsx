import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const auth = getAuth();
    const [error,setError] = useState();
    const [success, setSuccess] = useState();
    const handleLogin = (event) => {
        event.preventDefault;
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("Email & Password: ", email,password);
      
// Validation 
setError('');
setSuccess('');
        if(!/(?=.*[A-Z].*[A-Z]) /.test(password)){
          setError('Please add at least two uppercase');
          return
        }
        else if(!/(?=.*[!#$%&? "]) /.test(password)){
          setError('Please add a special character.');
          return
        }
        else if(password.length < 6){
          setError('password must be 6 characters long');
          return
        }
{
  setError('Please add at least two uppercase')
}

// 

signInWithEmailAndPassword(auth,email,password)
.then(result => {
const loggedUser = result.user;
setSuccess('User Login Successful');
setError('');
})
.catch(error => {
  setError(error.message);
})

}
    return (
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mx-auto">
            <form onSubmit={handleLogin}>
              <h2 className="text-center">Login</h2>
              <div className="form-group mb-3">
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="form-control" id="password" placeholder="Password" required/>
              </div>
              <div className="form-group form-check mb-3">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>

            <p><small>New to this website? Please <Link to="/register-rbs">Register</Link></small></p>

            <p className="text-danger">{error}</p>
            <p className="text-success">{success}</p>
          </div>
        </div>
      </div>
    );
};

export default Login;