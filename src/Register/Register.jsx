import React, { Component } from "react";
import '../Register/Register.css'
import register from '../Images/register.png'
import axios from 'axios'

class Register extends Component {
  constructor(props) {
     super(props)
     this.submitRegistration = this.submitRegistration.bind(this)
     this.state = {
      name: '',
      username: '',
      password: '',
      email: '',
      phoneNum: '',
      // gender: '',
      address: '',
      occupation: '',
      BVN: '',
      errors: {
        name: [],
        username: [],
        password: [],
        email: [],
        phoneNum: [],
        // gender: [],
        address: [],
        occupation: [],
        BVN: []
      }

     }
  }
 submitRegistration(e) {
  e.preventDefault()
  const name = this.state.name
  const username = this.state.username
  const password = this.state.password
  const email = this.state.email
  const phoneNum = this.state.phoneNum
  // const gender = this.state.gender
  const address = this.state.address
  const occupation = this.state.occupation
  const BVN = this.state.BVN

  const errors = this.state.errors

  for(let i in errors) {
    if(errors.hasOwnProperty(i)) {
        errors[i] = [];
    }
}

  if (name === 'string' && name === null ||name === '')
    {errors.name.push('Invalid name field')
  }


  this.setState({errors: errors});

  for(let i in errors) {
      if(errors.hasOwnProperty(i)) {
          if(errors[i].length) {
              return false;
          }
      }
  }
 
  console.log(this.state.name +''+ this.state.username)


  const url = 'http://localhost:8083/api/users/register/'
  axios.post(url, {
    name,
    username,
    password,
    email,
    phoneNum,
    // gender,
    address,
    occupation,
    BVN,
  }).then((res)=> {
    alert("You have successfully registered")
    console.log(res)
  })
 

 }

 

  render() {
    return (
      <>
      <div className="head--container">
      <button className="head--btn"><a href="http://localhost:3000/home">Home</a></button>
      <h1 className="head--text">Create an Account</h1>
      </div>
{/* action="" method="post" */}

      <form onSubmit={this.submitRegistration} className="form--reg">
        <input onChange={(e)=> {this.setState({name:e.target.value})}} value={this.state.name} type="text" placeholder="Full name" className="reg--input" />
        <div className="error"> {this.state.errors.name.join(', ')} </div>
        
        
        <input onChange={(e)=> {this.setState({username:e.target.value})}} value={this.state.username} type="text" placeholder="Username" className="reg--input" />
        <input onChange={(e)=> {this.setState({password:e.target.value})}} value={this.state.password} type="password" placeholder="Password" className="reg--input" />
        <input onChange={(e)=> {this.setState({email:e.target.value})}} value={this.state.email} type="email" placeholder="Email" className="reg--input" />
        <input onChange={(e)=> {this.setState({phoneNum:e.target.value})}} value={this.state.phoneNum} type="tel" placeholder="Phone number" className="reg--input" />
        {/* <select className="reg--input">
          <option value="Gender" selected disabled>Gender</option>
          <option onChange={(e)=> {this.setState({gender:e.target.value})}} value={this.state.gender} >Male</option>
          <option onChange={(e)=> {this.setState({gender:e.target.value})}} value={this.state.gender}>Female</option>
        </select> */}
        <textarea onChange={(e)=> {this.setState({address:e.target.value})}} value={this.state.address} rows="1" cols="50" placeholder="Address" className="reg--input"></textarea>
        <input onChange={(e)=> {this.setState({occupation:e.target.value})}} value={this.state.occupation} type="text" placeholder="Occupation/Business" className="reg--input"/>
        <input onChange={(e)=> {this.setState({BVN:e.target.value})}} value={this.state.BVN} type="tel" placeholder="BVN" className="reg--input"/>

        <button type="submit" className='reg--btn'> Register </button>
      </form>
 {/* <a href="http://localhost:3000/login">Register</a> */}
            <div className="reg--container">
        <img src={register} alt="register" className="reg--img"/>
      </div>
      </>
    );
  }
}

export default Register;
