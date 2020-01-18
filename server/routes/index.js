const express = require('express');
const router = express.Router();
router.use('/', require('./create-storyboard'));

module.exports = router;