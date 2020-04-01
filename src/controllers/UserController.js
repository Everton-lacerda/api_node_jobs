const User = require('../models/User')

const Bcrypt = require('bcrypt')
const Yup = require('yup')

module.exports = {
    async index(req, res) {
        try {
            const userAll = await User.find()
            return res.json(userAll)
        } catch (error) {
            return res.json(error)
        }
    },

    async show(req, res) {
        const { id } = req.params
        
        try {
            const user = await User.findById(id)
            return res.json(user)
        } catch (error) {
            return res.json(error)
        }

    },

    async store(req, res) {
        const Validation = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
        })

        if (!(await Validation.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' })
        }

        const userExists = await User.findOne({ email: req.body.email })

        if (userExists) {
            return res.status(400).json({ error: 'User already exists.' })
        }

        try {
            req.body.password = Bcrypt.hashSync(req.body.password, 10)
            const { id, name, email, type } = await User.create(req.body)
            return res.json({ id, name, email, type })

        } catch (error) {
            return res.status(400).json(error)
        }


    },

    async update(req, res) {
        const Schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            password: Yup.string()
        })

        if(!(await Schema.isValid(req.body))){
            return res.status(400).json({error: 'Validation fails'})
        }

        const { id } = req.params

        const userExists = await User.findById(id)

        const { email, oldPassword } = req.body
        
        if (email == !user.email) {
            const userExists = await User.findOne({ email:  email  })

            if (userExists) {
                return res.status(400).json({ error: 'User already exists.' })
            }
        }

        try {
            req.body.password = Bcrypt.hashSync(req.body.password, 10)
            const { id, name, email, type } = await User.update(req.body)
            return res.json({ id, name, email, type })

        } catch (error) {
            return res.status(400).json(error)
        }

    },

    async delete(req, res) {

    }
}