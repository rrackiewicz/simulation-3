module.exports = {
  //TODO: POST body {username, password}
  register: (req, res) => { 
    const dbInstance = req.app.get('db')
    const {username, password} = req.body
    
    dbInstance.register_user([username, password])
      .then((user) => {
        console.log(user, " User registered")
        //db returns an array of objects
        const { id } = user[0].id
        req.session.userid = id;
        res.status(200).send(id)
      })
      .catch((err) => res.status(500).send(err))
  },
  
  //TODO: POST body {username, password}
  login: (req, res) => { 
    const dbInstance = req.app.get('db')
    const {username, password} = req.body
    
    dbInstance.get_user([username, password])
      .then((user) => {
        //console.log(user[0])
        //db returns an array of objects
        //const { id } = user[0].id
        //req.session.userid = id;
        res.status(200).send(user[0])
      })
      .catch((err) => res.status(500).send(err))
  },

  //TODO: No database interaction, just log oout
  logout: (req, res) => { 
    //req.session.destroy
    //Nothing to res.send?
  },

   //TODO: GET user id on req.session.userid
   authMe: (req, res) => { 
    const dbInstance = req.app.get('db')
    
    dbInstance.get_user_auth([req.session.userid])
      .then((user) => {
        res.status(200).send(user)
      })
      .catch((err) => res.status(500).send(err))
  },
 
}