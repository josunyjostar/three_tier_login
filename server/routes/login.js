const router = require('express').Router();
const controller = require('../contorller');

router.post('/', controller.login.post);

module.exports = router;
