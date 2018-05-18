import React,  { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
  render(){
    return(
      <div className="navContainer pink">
        <div className="navBox flexV ">
          <div>
            <img src={this.props.profile_pic} width="75px" alt=""/>
            <p>{this.props.username}</p>
          </div>
          <div>
            <Link to="/dashboard"><button>Home</button></Link>
          </div>
          <div>
            <Link to="/new"><button>Create Post</button></Link> 
          </div>
          <div>
            <Link to="/"><button>Logout</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state 
  const { username, profile_pic } = user
  return {
      username,
      profile_pic
  }
}

let actions = {
  // action_clearUser
  // When the power button is pressed
}

export default connect(mapStateToProps, actions)(Nav)
