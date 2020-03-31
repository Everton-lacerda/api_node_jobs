const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const server = express()

const routes = require('./routes')

require ('./config/database')
server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(process.env.PORT || 9000)