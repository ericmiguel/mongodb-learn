// sudo docker run -d  --name mongond  -p 27888:27017  mongo:3.6

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27888/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});