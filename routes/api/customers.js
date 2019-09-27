const { Router } = require('express');
const router = new Router();

// @route   GET api/customers
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Customers route'));

module.exports = router;
