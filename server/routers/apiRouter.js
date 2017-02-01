const router = require('express').Router();
// const userRouter = require('./userRouter');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('apiRouter');
    next();
  });
}

module.exports = router;
