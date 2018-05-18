import React,  { Component } from 'react';
import Nav from './Nav'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      img: '',
      content: '',
    }
    
    this.submitPost = this.submitPost.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.updateImage = this.updateImage.bind(this)
    this.updateContent = this.updateContent.bind(this)
  }

  updateTitle(e){
    this.setState({title: e.target.value})
  }

  updateImage(e){
    this.setState({img: e.target.value})
  }

  updateContent(e){
    this.setState({content: e.target.value})
  }

  submitPost(){
    const post = {
      title: this.state.title,
      img: this.state.img,
      content: this.state.content
    }

    axios.post(`/api/posts/${this.props.id}`, post).then(res => {
      console.log(res.data)
      console.log("Form submitted successfully")
    }).catch(err =>{
      console.log("Failed to submit listing")
    })
  }

  render(){
    console.log(this.props.id, "Value of ID from this.props")
    return(
      <div className="flexH">
        <Nav/>
        <div className="container lightgray">   
        <div className="flexH jcc">
            <div className="postBox white flexV jcc">
              <div className="">
                <h1>New Post</h1>
              </div>
              <div>
                <label htmlFor="">Title</label>
                <input onChange={this.updateTitle} value={this.state.title} type="text"/>
              </div>
              <div>
                <img src={this.state.img} width="300px" alt=""/>
              </div>
              <div>
                <label htmlFor="">Image URL</label>
                <input onChange={this.updateImage} value={this.state.img} type="text"/>
              </div>
              <div>
                <label htmlFor="">Content</label>
                <textarea onChange={this.updateContent} value={this.state.content} name="" id="" cols="100" rows="30"></textarea>
              </div>
              <div className="flexH">
                <div className="mla">
                  <Link to="/dashboard"><button onClick={this.submitPost}>Post</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  const { user } = state 
  const { id } = user
  return {
      id
  }
}

let actions = {

}

export default connect(mapStateToProps, actions)(Form)