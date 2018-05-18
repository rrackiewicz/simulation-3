module.exports = {

  //TODO: GET with :postID on params
  getPost: (req, res) => {
    const dbInstance = req.app.get('db')
    const { postid } = req.params
    console.log(postid)
    dbInstance.get_post([postid])
    .then((post) => {
      console.log(post[0], "Post from server")
      res.status(200).send(post[0])
    })
    .catch(() => res.status(500).send())
  },

  //TODO: GET with :userID on params and search and userposts (boolean) on req.query
  getPosts: (req, res) => {
    const dbInstance = req.app.get('db')
    const { userid } = req.params //later we will replace with with req.session.userid
    const { search, userposts } = req.query
    dbInstance.get_posts([userid, search, userposts])
    .then(posts => res.status(200).send(posts))
    .catch(err => res.status(500).send(err))
  },

  //TODO: POST with :userId on params and content on body
  addPost: (req, res) => {
    const dbInstance = req.app.get('db')
    const { userid }  = req.params //later we will replace with with req.session.userid
    const { title, img, content } = req.body
    console.log("querying database")
    console.log("content: ", content)
    dbInstance.add_post([title, img, content, userid])
    .then(() => {
      console.log(posts, "Post successful")
      res.status(200).send()
    })
    .catch(err => res.status(500).send(err))
  }
}