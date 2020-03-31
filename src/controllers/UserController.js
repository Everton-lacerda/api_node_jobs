const User = require('../models/User')


module.exports = {
    async index(req, res) {

    },

    async show(req, res) {

    },

    async store(req, res) {
       
        const userExists  = await User.findOne({email: req.body.email})

        if(userExists) {
            return res.status(400).json({ error: 'User already exists.' })
        }

        const {id, name, email, type} = await User.create(req.body)

        return res.json({id, name, email, type})
    },

    async update(req, res) {

    },

    async delete(req, res) {

    }
}