import React,  { Component } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      userposts: true,
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
    this.updateCheckbox = this.updateCheckbox.bind(this)
    this.getPosts = this.getPosts.bind(this)
    this.resetSearch = this.resetSearch.bind(this)
  }

  updateSearch(e) {
    this.setState({search: e.target.value})
  }

  updateCheckbox() {
    this.setState({userposts: !this.state.userposts})
  }

  getPosts(){
    axios.get(`/api/posts/${this.props.id}?search=${ this.state.search}?userposts=${this.state.userposts}`).then( res => {
      //console.log(res.data, " Post Data")
      let posts = [...this.state.posts]
      posts = res.data
      this.setState({ posts });
    })
  }

  resetSearch(){
    this.getPosts()
    this.setState({search: ''})
  }

  componentDidMount(){
    this.getPosts()
  }

  // componentWillUpdate() {
  //   this.getPosts()
  // }

  render() {
    let renderPosts = this.state.posts.map((e,i) => {
      return (
        <div key={e+i} className="container">       
          <Link to={`/post/${this.state.posts[i].author_id}`}>
            <div className="postBox darkgray flexH jcc aic">
              <div>
              <h5>{e.title}</h5>
              </div>
              <div className="mla">
                <h5>{e.username}</h5>
              </div>
              <div>
              <img src={e.profile_pic} width="35px" alt=""/>
              </div>
            </div>
          </Link>
        </div>
      )
    })
    
    return(
    <div className="flexH">
      <Nav />
      <div className="container lightgray">       
        <div className="dashBox flexH jcc">
          <div className="postsWrapper flexV jcc">
            <div className="searchBox flexH white">
              <div>
                <input onChange={this.updateSearch} className="search" type="text" value={this.state.search} placeholder="Search by Title"/>
              </div>
              <div>
                <button onClick={this.getPosts} >Search</button>
              </div>
              <div>
                <button onClick={this.resetSearch}>Reset</button>
              </div>
              <div>
                <label htmlFor="">My Posts </label>
                <input onChange={this.updateCheckbox} type="checkbox" checked={this.state.userposts ? true : false}/>
              </div>
            </div>
            <div className="postBox white">
              {renderPosts}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state
  const { id } = user
  return {
      id
  }
}

let actions = {

}

export default connect(mapStateToProps, actions)(Dashboard)