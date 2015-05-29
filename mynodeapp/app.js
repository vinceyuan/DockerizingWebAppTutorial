var express = require('express');
var http = require('http');
var path = require('path');
var pg = require('pg');
var redis = require("redis");

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

var redis_host = process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1';
var redis_port = process.env.REDIS_PORT_6379_TCP_PORT || 6379;
var db_host = process.env.POSTGRES_PORT_5432_TCP_ADDR || 'localhost';
  
var conString;
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  conString = "postgres://vince:@localhost/mynodeappdb"; // Use your db, user and password
} else {
	conString = "postgres://postgres:postgres@" + db_host + "/mynodeappdb"; // Use your db, user and password
}
 
var pgClient = new pg.Client(conString);
pgClient.connect(function(err) {
  if(err) return console.error('Could not connect to postgres', err);
  console.log('Connected to postgres');
});
var redisClient = redis.createClient(redis_port, redis_host, {})

app.get('/', function(req, res) {
	pgClient.query('SELECT NOW() AS "theTime"', function(err1, result) {
    redisClient.get("number", function(err2, reply) {
	    res.render('index', { pgTime: result.rows[0].theTime, number: reply });
		});
  }); // Errors Ignored in this example. You should check errors in a real project. 
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
