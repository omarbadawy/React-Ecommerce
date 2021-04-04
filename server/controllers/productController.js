const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

exports.getProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find({})

    res.status(200).json({
        status: 'success',
        results: products.length,
        products,
    })
})

exports.getProductById = asyncHandler(async (req, res, next) => {
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
