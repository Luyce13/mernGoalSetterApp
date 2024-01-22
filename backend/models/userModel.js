const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: [true, 'Please Add Name Value']
    },
    email:
    {
        type: String,
        required: [true, 'Please Add Email Value'],
        unique: true
    },
    password:
    {
        type: String,
        required: [true,'Please Add Password Value']
    }
}, {
    timestamps: true ,
})

module.exports = mongoose.model('User', userSchema)
