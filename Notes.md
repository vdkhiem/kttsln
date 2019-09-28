### Create a new route

const express = require('express');
const router = express.Router;

// @route GET api/users
// @desc Test route
// @access Public
router.get('/', (req, res) => res.send('User route'));

module.exports = router;

### Middleware

It is used to validate http request
If using auth with facebook/google login, then use passwordjs
Else use standard middleware
