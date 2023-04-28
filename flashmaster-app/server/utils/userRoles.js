const express = require('express')
const app = express()
const { ROLE, users } = require('./data')
const { authUser } = require('./basicAuth')
const projectRouter = require('./routes/projects')

app.use(express.json())
app.use(setUser)
app.use('/projects', projectRouter)

app.get('/', (req, res) => {
  res.send('Home')
})

function authRole(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role || req.user.role === 'teacher') {
      next()
    } else {
      res.status(401).send('Not Authorized')
    }
  }
}

app.get('/portal', authUser, (req, res) => {
  res.send('Student Portal')
})

app.get('/teacher', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Teacher Portal')
})

function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

app.listen(3000)
