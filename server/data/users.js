const bcrypt = require('bcryptjs')

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('test1234', 10),
        isAdmin: true,
    },
    {
        name: 'Jhon Doe',
        email: 'jhon@example.com',
        password: bcrypt.hashSync('test1234', 10),
    },
    {
        name: 'jane Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('test1234', 10),
    },
]

module.exports = users
