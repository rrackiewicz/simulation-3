import React,  { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { action_updateUser } from '../ducks/reducer'

class Auth extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.registerUser = this.registerUser.bind(this)
    this.loginUser = this.loginUser.bind(this)
  }

  updateUsername(e) {
    this.setState({username: e.target.value})
  }

  updatePassword(e) {
    this.setState({password: e.target.value})
  }

  registerUser(){
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('/api/auth/register', user).then(res => {
      //sync with Redux store
      this.props.action_updateUser(res.data)
      //console.log(res.data, "Registration successful")
    }).catch( err => {
      console.log("Failed to register user")
    })
  }

  loginUser(){
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('/api/auth/login', user).then(res => {
      //sync with Redux store
      this.props.action_updateUser(res.data)
      //console.log(res.data, "Login successful")
    }).catch( err => {
      console.log("Failed to login user")
      //How do i do a redirect?
    })
  }

  render() {
    return(
      <div className="flexH jcc container lightgray">
        <div className="authBox flexV orange jcc">
          <div className="authContent">
            <div>
              <h1>;|</h1>
            </div>
            <div>
              <h1>Helo</h1>
            </div>
            <div>
              <label htmlFor="">Username: </label>
              <input onChange={this.updateUsername} value={this.state.username} type="text"/>
            </div>
            <div>
              <label htmlFor="">Password: </label>
              <input onChange={this.updatePassword} value={this.state.password} type="text"/>
            </div>
            <div className="flexH jca">
              <div>
                <Link to="/dashboard"><button onClick={this.loginUser}>Login</button></Link>
              </div>
              <div>
                <Link to="/dashboard"><button onClick={this.registerUser}>Register</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let actions = {
  action_updateUser
}
export default connect(null, actions)(Auth)
