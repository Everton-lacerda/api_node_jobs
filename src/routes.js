const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')


routes.get('/', (req, res) => {
    return res.json({message: "Welcome api jobs"})
})

 routes.post('/user', UserController.store)


// routes.get('/devs', DevController.index)
// routes.post('/devs', DevController.store)

// routes.post('/devs/:devId/likes', LikeController.store)
// routes.post('/devs/:devId/dislikes', DislikeController.store)

module.exports = routes