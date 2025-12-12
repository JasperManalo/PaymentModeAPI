const express = require('express');
const router = express.Router();
const { getPaymentMode } = require('../controllers/paymentmode.controllers');
const { postPaymentMode } = require('../controllers/paymentmode.controllers');
const { putPaymentMode } = require('../controllers/paymentmode.controllers');

router.get('/', getPaymentMode);
router.post('/', postPaymentMode);
router.put('/:paymentmodeid', putPaymentMode);


module.exports = router;