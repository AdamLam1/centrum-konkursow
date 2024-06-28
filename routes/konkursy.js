var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/konkursy', function(req, res, next) {
  res.render('konkursy', { title: 'Express' });
});

module.exports = router;
