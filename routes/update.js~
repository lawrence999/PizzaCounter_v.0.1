
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

 var content=req.body;
 console.log("updated");
  console.log(content);
 var id=new mongodb.ObjectID(content.Contactno);
collection.update({"_id":id},{$set:{"deliverystatus":false}},function(err,result){
	console.log(result);
});
  }
});
});

module.exports = router;
