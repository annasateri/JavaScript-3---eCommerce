const mongodb = require('mongoose');
const Product = require('./productSchema');


exports.getProducts = (req, res) => {
  Product.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.getOneProduct = (req, res) => {
  Product.findById(req.params.id)
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.saveProduct = (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    img: req.body.img,
    category: req.body.category
  })

  product.save()
  .then(() => {
    res.status(201).json({
      statusCode: 201,
      status: true,
      message: 'Product created successfully'
    })
  })
  .catch(() => {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to create product'
    })
  })
}

exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
  .then(() => {
    res.status(200).json({
      statusCode: 200,
      status: true,
      message: 'Product deleted'
    })
  })
  .catch(() => {
    res.status(500).json({
      statusCode: 500, 
      status: false,
      message: 'Failed to delete Product'
    })
  })
}

exports.updateProduct = (req, res) => {
  Product.updateOne({ _id: req.params.id }, req.body)
  .then(() => {
    res.status(200).json({
      statusCode: 200,
      status: true,
      message: 'Product updated successfully'
    })
  })
  .catch(() => {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to update product'
    })
  })
}