const router = require('express').Router();
const heroDataRouter = require('./heroDataRouter');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('apiRouter');
    next();
  });
}

router.use('/heroData', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> heroDataRouter');
  }
  next();
}, heroDataRouter);

module.exports = router;
