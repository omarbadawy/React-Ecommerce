const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            maxlength: [40, 'Name must have less or equal than 40 characters'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            maxlength: [40, 'Email must have less or equal than 40 characters'],
            minlength: [5, 'Email must have more or equal than 5 characters'],
        },
        password: {
            type: String,
            required: true,
            minlength: [
                8,
                'Password must have more or equal than 8 characters!',
            ],
        },
        isAdmin: {
            type: Boolean,
            requied: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User
