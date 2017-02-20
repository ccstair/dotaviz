const router = require('express').Router();
const heroDataController = require('../controllers/heroDataController');

router.get('/', heroDataController.getAll);

module.exports = router;
