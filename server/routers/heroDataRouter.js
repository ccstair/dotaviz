const router = require('express').Router();
const heroDataController = require('../controllers/heroDataController');

router.get('/images', heroDataController.getAllImages);
router.get('/:id', heroDataController.getSingleHeroAttributes);

module.exports = router;
