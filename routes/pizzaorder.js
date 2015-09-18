    var express = require('express');
    var router = express.Router();
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/pApp';

    router.all('/', function(req, res, next) {
      console.log(req.body);
      var MongoClient = mongodb.MongoClient;
      var url = 'mongodb://localhost:27017/pApp';
      MongoClient.connect(url, function (err, db) {
        if (err) {
          console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
          console.log('Connection established to', url);
          var collection = db.collection('pizzaorder');
          collection.insert(req.body,function (err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log('Insertion Successfull');
            }
          });
        }
      });
    });
    module.exports = router;
