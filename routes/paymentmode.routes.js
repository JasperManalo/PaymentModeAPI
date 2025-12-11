const express = require('express');
const router = express.Router();
const { getPaymentMode } = require('../controllers/paymentmode.controllers');

router.get('/', getPaymentMode);

module.exports = router;