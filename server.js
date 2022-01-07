var http = require("http");
var url = require("url");
var qs = require('querystring');
const { MongoClient } = require("mongodb");                                                                                                                                       
const url1 = "mongodb+srv://surya:lakshmanan@cluster0.lmqbx.mongodb.net/test";
const client = new MongoClient(url1);
const dbName = "test";
                      
 async function run(req,res) {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         const col = db.collection("people");         
        var body ='';

        req.on('data', function (data) 
        {
            body += data;
        });

        req.on('end', function () 
        {
            var post = qs.parse(body);
            name1 = post['name'];
            phno1 = post['phno'];
            pass1=post['pass'];
            email1 = post['email'];
            cpass1=post['cpass'];
            var MongoClient=require('mongodb');    
            MongoClient.connect(url1, function(err, db)
            {
                if(err) throw err;
                   var dbo = db.db("test");
                   var myobj = { name: name1, email: email1, phone: phno1, password: pass1, cpassword: cpass1 };
                   dbo.collection("people").insertOne(myobj, function(err, response)
                   {
                        if(err) throw err;
                        console.log("1 document inserted successfully");   
                        db.close();
                    });
            });
        });
}
run().catch(console.dir);
http.createServer(run).listen(7000);