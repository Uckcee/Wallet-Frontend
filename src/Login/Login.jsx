import React, { Component } from 'react'

import '../Login/Login.css'
import login from '../Images/login.png'
class Login extends Component{
    render(){
        return (
          <>
          <h1 className='login--header'>Login to Account</h1>

            <div className="login">
              <form className='login--reg'>
                
                <input type="email" placeholder="Email" className='login--input' /><i class="fa-solid fa-envelope"></i>
                <input type='passsword' placeholder="Password" className='login--input' /><i class="fa-solid fa-lock"></i>
                <button type="submit" className='login--btn'> <a href="http://localhost:3000/dashboard" className='link'>Login</a> </button>
              </form>
              <p className='login--text' >Don't have an account yet? <a href="http://localhost:3000/register" >Register</a>
              </p>
            </div>

            <div className="login--container">
              <img src={login} alt="login" className="login--img" />
            </div>
          </>
        );
    }
}

export default Login;