const express =    require('express');
const router = express()
const FormController = require('../Controllers/FormContrller');

router.post("/form",FormController.Feedback);

module.exports = router;