const express = require('express')
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

const router = express.Router()

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const products = await Product.find({})

        res.status(200).json({
            status: 'success',
            results: products.length,
            products,
        })
    })
)

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id)

        if (!product) {
            res.status(404)
            throw new Error('Product Not Found!')
        }

        res.status(200).json({
            status: 'success',
            product,
        })
    })
)

module.exports = router
