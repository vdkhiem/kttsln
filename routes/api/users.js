const { Router } = require('express');
const router = new Router();
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

// @route   POST api/users
// @desc    Test route
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // bad request
    }

    const { name, email, password } = req.body;

    try {
      // Checks if user exists
      const existingUser = await User.findOne({ email }).then();
      if (existingUser) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exist' }] }); // use this error format to consistent error from express-validator
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      var newUser = new User({
        name,
        email,
        avatar,
        password
      });

      // Encrypt password and save a new user
      const salt = await bcrypt.genSalt(10); // 10 is recommended by bcryptjs
      newUser.password = await bcrypt.hash(password, salt);
      await newUser.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: newUser.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'), //jwtSecret defines in config/default.json
        { expiresIn: 360000 }, // 3600 is 1hour
        (err, token) => {
          if (err) throw err;
          res.send({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/', (req, res) => {
  res.send('Users route');
});

module.exports = router;
