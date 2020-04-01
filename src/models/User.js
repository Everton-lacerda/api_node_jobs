const { Schema, model } = require('mongoose')

const SALT_WORK_FACTOR = 10;

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
    },
    jobsId: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    
}, 
{
    timestamps: true
})

schema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
  });
  
  schema.methods.checkPassword = async function checkPassword(data) {
    return bcrypt.compare(data, this.password);
  };

module.exports = model('User', UserSchema)
