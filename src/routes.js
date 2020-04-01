const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')
const SessionControlle = require('./controllers/SessionControlle')

const authMiddlewares = require('./middlewares/auth')


routes.get('/', (req, res) => {
    return res.json({ message: "Welcome api jobs" })
})

routes.post('/user/register', UserController.store)
routes.post('/sessions', SessionControlle.store)

// Sem autenticação
routes.use(authMiddlewares)

// Com autenticação

routes.get('/users', UserController.index)
routes.get('/user/:id', UserController.show)
routes.post('/user/update/:id', UserController.update)
routes.post('/user/delete', UserController.delete)




module.exports = routes