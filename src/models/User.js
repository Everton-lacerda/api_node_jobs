const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: { 
        type: String, 
        required: true, 
        select: false 
    },
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    type: {
        type: String,
        enum: ['candidate', 'company'],
        default: 'candidate'
    }
}, 
{
    timestamps: true
})

module.exports = model('User', UserSchema)
