var redis = require('redis');
var client = redis.createClient('6379',process.env.DB_HOST || '127.0.0.1');
var express = require('express')
var bodyParser = require('body-parser')



var app = express()
    .use(bodyParser.urlencoded({ extended: true }))

    // logger API
    .get('/api/logs', getLogs)
    .post('/api/logs', createEntry )


    // Start the server
    .listen(5000, () => console.log(`Listening on 5000`));



    async function createEntry(req, res) {
      client.set(new Date(), new Date());
      res.send("success");
    };

    async function getLogs(req, res){
      client.keys('*', (err, keys) => {
        res.send({number:keys.length});
      });
    };
