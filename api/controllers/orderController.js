const router = require('express').Router();
const orderModel = require('../models/orders/orderModel');


router.get('/', orderModel.getOrder);
router.get('/:id', orderModel.getOneOrder);

router.post('/', orderModel.saveOrder);

router.patch('/:id', orderModel.updateOrder);

router.delete('/:id', orderModel.deleteOrder);

module.exports = router;
