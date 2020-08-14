var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cool', function(req, res, next) {
  res.send("you're so cool");
});
router.get('/sign-up', (req, res) => {
  res.render("sign-up-form", {title: "Sign up here"});
});


module.exports = router;
