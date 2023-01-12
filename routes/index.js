var express = require('express');
var router = express.Router();
var translate = require('@vitalets/google-translate-api');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "TEXT LANGUAGE TRANSLATOR", translated: "" });
});

router.post('/index', function (req, res, next) {

  translate(req.body.text, { to: req.body.language}).then(response => {

    res.render('index', { title: "TEXT LANGUAGE TRANSLATOR", translated: response.text })
  }).catch(err => {
    console.error(err);
  });
});
module.exports = router;
