var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/mydb';

// Use connect method to connect to the Server
/* GET home page. */
router.all('/', function(req, res, next) {
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);
 var collection = db.collection('pizzaorder');
 collection.find({"deliverystatus":true}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
        res.send(result);
        //res.render('view',{
          //user:result
        //});
      } else {
        console.log('No document(s) found with defined "find" criteria!');
        res.send("No data to display!")
      }
      //Close connection
      db.close();
    });
  }
});
});

module.exports = router;
