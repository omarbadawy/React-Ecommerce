const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()

connectDB()

const app = express()

app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}...`.yellow.bold)
})
