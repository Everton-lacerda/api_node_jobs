const jwt = require('jsonwebtoken')
const Yup = require('yup')

const User = require('../models/User')

const AuthConfig = require('../../config/auth')

module.exports = {
    async index(req, res) {
        
    },

    async show(req, res) {

    },

    async store(req, res) {
        const Validation = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required()
        }) 

        if(!(await Validation.isValid(req.body))){
            return res.status(400).json({error: 'Validation fails'})
        }

        const { email, password } = req.body
        const user = await User.findOne( { email: email } )

        if (!user) {
            return res.status(401).json({ error: 'User not found' })
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'password does not match' })
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, AuthConfig.secret, {
                expiresIn: AuthConfig.expiresIn
            })
        })
    },

    async update(req, res) {

    },

    async delete(req, res) {

    }
}
