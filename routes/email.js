const { Router } = require('express');
const {emailPost} = require('../controllers/email')

const router = Router();

router.post('/send-email', emailPost );

module.exports = router;