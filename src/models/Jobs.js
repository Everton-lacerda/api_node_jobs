const { Schema, model } = require('mongoose')

const JobsSchema = new Schema({
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
    },
    jobsId: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    
}, 
{
    timestamps: true
})

module.exports = model('Jobs', JobsSchema)
