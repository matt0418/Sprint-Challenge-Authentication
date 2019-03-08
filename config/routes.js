const axios = require('axios');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Users = require('./helper')


const { authenticate, jwtKey } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 12)
  user.password = hash
  try {
    const newUser = await Users.add(user)
    res.status(201).json(newUser)
  } catch(error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function login(req, res) {
  let {username, password} = req.body
  if (username && password) {
    try {
      const login = await Users.findBy({ username }).first()
      if (login && bcrypt.compareSync(password, login.password)) {
        const token = generateToken(login)
        res.status(200).json({
          message: 'Hello!',
          token
        })
      } else {
        res.status(401).json({ message: "Get rekt" })
      }
    } catch(error) {
      console.log(error)
      res.status(500).json(error)
    }
  } else {
    res.send({ message: 'please provide credentials' })
  }
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  }
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, jwtKey, options)
}