const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const app = express();
var url = "mongodb://localhost:27017/";
//var url = "mongodb://localhost:27017/";


app.get('/movies', (req, res) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ashutosh_movie");
  var query = { };
  dbo.collection("movie").find(query).toArray(function(err, result) {
    if (err){
        console.log("Error occured::" + err);
    };
    console.log(result);
    res.send(result);
    db.close();
  });
});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
