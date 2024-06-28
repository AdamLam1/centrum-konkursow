var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/regulamin', function(req, res, next) {
  res.render('regulamin', { title: 'Express' });
});

module.exports = router;
