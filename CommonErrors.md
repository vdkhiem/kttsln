### MongoDB DeprecationWarning

Error
DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect

Solution
mongoose.connect(dbURI, {useUnifiedTopology: true, useNewUrlParser: true});

### Express router throw error

TypeError: Cannot read property 'push' of undefined
at Function.route (/Users/khiem.vo/Projects/kttsln/node_modules/express/lib/router/index.js:502:14)

Cause
const express = require('express');
const router = express.Router;

Solution
const { Router } = require('express');
const router = new Router();

### profile validation failed: handle: Path `handle` is required.

# Cause: Profile defind handle field as required field. However, we don't pass handle when we save a profile

# Solution:

Implement validation for handle
check('handle', 'Handle is required')
.not()
.isEmpty()

Set handle value
if (handle) profileFields.handle = handle;
const {
company,
handle,
