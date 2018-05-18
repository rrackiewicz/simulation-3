const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const uc = require('./user_controller')
const pc = require('./post_controller')
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) )

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  console.log('Database connecting...')
  app.set('db', dbInstance)
}) //could put a catch here

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

//Users endpoints
app.post('/api/auth/register', uc.register);
app.post('/api/auth/login', uc.login);
//app.post('/api/auth/logout', uc.logout)
//Last enpoint uses id on req.session.userid which was
//set in uc.register and uc.login handlers
//app.get('/api/auth/me', uc.authMe);


//Posts endpoints
app.get('/api/posts/:userid', pc.getPosts);
app.get('/api/post/:postid', pc.getPost);
app.post('/api/posts/:userid', pc.addPost);

const port = process.env.SERVER_PORT || 3500;
app.listen(port, () => console.log(`Server listening on port ${port}.`))
