var express = require('express');
var router = express.Router();
var config = require('../config');
var mysql = require('promise-mysql');
var connection = mysql.createPool(config.db);
var JobsModel = require('../models/jobs').init(connection);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* get jobs list */
router.get('/jobs/:start', function(req, res, next) {
  var start = req.params.start;

  JobsModel.getJobs(start)
      .then(function(data) {
          res.jsonp({ result: "success", jobs: data });
      },function(err) {
          console.log("error = ", err);
          res.jsonp({ result: "success", jobs: [] });
      })
});

module.exports = router;
