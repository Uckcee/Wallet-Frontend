import React, { Component } from 'react'
import axios from 'axios'
// import { useNavigate } from "react-router-dom";
import '../Login/Login.css'
import login from '../Images/login.png'
// import { useHistory } from 'react-router-dom';
// import { redirect } from 'react-router-dom/';
class Login extends Component{
  constructor(props){
    super(props)
    this.loginMethod = this.loginMethod.bind(this)
    this.state = {
      email: '',
      password: '',
      message: '',
      user: '',
      token: '',
      submitting: false,
      errors: {
        email: [],
        password: [],
      }
      
    }
  }
  
  loginMethod = (e) => {
    e.preventDefault()

      const email = this.state.email;
      const password = this.state.password;
      

      const errors = this.state.errors;

      for (let i in errors) {
        if (errors.hasOwnProperty(i)) {
          errors[i] = [];
        }
      }

      if ((email === "string" && email=== null) || email === "") {
        errors.email.push("Input name field");
      }
      if ((password === "string" && password ===null) || password === "") {
         errors.password.push("Input password");
            }
        this.setState({ errors: errors });

         for (let i in errors) {
           if (errors.hasOwnProperty(i)) {
              if (errors[i].length) {
                 return false;
              }
           }
       }
              //  const navigate = useNavigate();
              //  if (navigate) {
              //    navigate("/dashboard");
              //  }
       this.setState({submitting:true})
       const url = "http://localhost:8083/api/users/login/";
       axios.post(url, {email, password}).then((res) => {
        const data = res.data
        const message = data.message
        if(data.status){
          localStorage.setItem('Token', data.data.token)
          this.setState({submitting:false, message:message, token: data.data.token, user:data.data.user})
          this.props.history.push('/register')
          // redirect("/register");

        }else{
          this.setState({submitting:false, message:message})
        }
       }).catch((error) => {
        console.log(error)
       })


  }

    render(){
        return (
          <>
          <h1 className='login--header'>Login to Account</h1>

            <div className="login">
             {this.state.submitting? (<div>Submitting ...</div>): null}
             {this.state.message? (<div> {this.message} </div>): null}
              <form onSubmit={this.loginMethod} className='login--reg'>
                
                <input onChange={(e)=> {this.setState({email:e.target.value})}} value={this.state.email} type="email" placeholder="Email" className='login--input' /><i class="fa-solid fa-envelope"></i>
                 <div className="login--error"> {this.state.errors.email.join(', ')} </div>
                <input onChange={(e)=> {this.setState({password:e.target.value})}} value={this.state.password} type='password' placeholder="Password" className='login--input' /><i class="fa-solid fa-lock"></i>
                 <div className="login--error"> {this.state.errors.password.join(', ')} </div>
                <button type="submit" className='login--btn'> Login </button>
              </form>
              {/* <a href="http://localhost:3000/dashboard" className='link'>Login</a> */}
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