import React,  { Component } from 'react';
import axios from 'axios'
import Nav from './Nav'

class Post extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      img: '',
      content: '',
      username: '',
      profile_pic: ''
    }
    this.getPost = this.getPost.bind(this)
  }

  componentDidMount() {
    this.getPost()
  }

  getPost(){
    console.log(this.props.match.params.postid)
    axios.get(`/api/post/${this.props.match.params.postid}`).then( res => {
      console.log(res.data, " Post Data")
      this.setState(
        { 
          title: res.data.title,
          img: res.data.img,
          content: res.data.content,
          username: res.data.username,
          profile_pic: res.data.profile_pic 
        });
    })
  }

  render(){
    
    return(
      <div className="flexH">
        <Nav/>
        <div className="container lightgray">   
          <div className="postBox white flexV jcc">
            <div className="flexH jcc aic">
              <div>
                <h5>{this.state.title}</h5>
              </div>
              <div className="mla">
                <h5>{this.state.username}</h5>
              </div>
              <div>
                <img src={this.state.profile_pic} width="35px" alt=""/>
              </div>
            </div>
            <div className="flexH">
              <div>
                <img src={this.state.img} width="300px" alt=""/>
              </div>
              <div>
                <p>{this.state.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post