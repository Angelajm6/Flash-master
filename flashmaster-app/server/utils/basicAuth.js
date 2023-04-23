function authUser(req, res, next) {
    if (req.user == null) {
      res.status(403)
      return res.send('Authentication is required. You need to sign in.')
    }
  
    next()
  }
  
  function authRole(role) {
    return (req, res, next) => {
      if (req.user.role !== role) {
        res.status(401)
        return res.send('Sorry, you are not allowed access to this page.')
      }
  
      next()
    }
  }
  
  module.exports = {
    authUser,
    authRole
  }