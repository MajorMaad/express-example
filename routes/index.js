var express = require('express');
var router = express.Router();
var Message = require('./../models/message');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  Message.find(function(err, messages) {
    if (err) res.send(err);

    for (var d=0; d<messages.length; d++) {
      var newDate = new Date(messages[d].date);
      var dateFormated = "envoyé le " + newDate.getDate() + "/" + (newDate.getMonth()+1) + "/" + newDate.getFullYear();
      messages[d].dateFormated = dateFormated;
    }

    res.render('index', { title: 'Express', messages: messages });
  });
});

router.post('/', function(req, res, next) {
  var message = new Message();

  message.pseudo = req.body.pseudo;
  message.message = req.body.message;

  message.save(function(err) {
    if (err) res.send(err);

    res.writeHead(302, {
      'Location': '/'
    });
    res.end();
  });
});

module.exports = router;
