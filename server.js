var express        = require('express');
var methodOverride = require('method-override')
var bodyParser     = require('body-parser')
var jsonServer     = require('json-server');
var cors           = require('cors');
var errorhandler   = require('errorhandler');
var logger         = require('morgan');
var path           = require('path');
var jwt            = require('express-jwt');
var Jwt = require("jsonwebtoken");
var port = process.env.PORT || 3000;

// create http server
var server = express()
server.set('port', port);
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(methodOverride());
server.use(cors({ origin: true, credentials: true }));
if (process.env.NODE_ENV === 'development') {
  // only use in development
  server.use(errorhandler());
}

var secret="techiediaries";
// custom routes
server.post('/login', function(req, res) {
	    var tokenData = {
	                    username: "techiediaries",
	                    id: "1"
	    };
	    var result = {
	                    username: "techiediaries",
	                    access_token: Jwt.sign(tokenData, secret)
	    };

	    return res.json(result);

});

server.get('/', function(req, res) {
    res.send("A Simple Server For JWT Auth Testing");
});

server.use(jwt({ secret: secret,credentialsRequired: false}).unless({path: ['/login']}));

const router = jsonServer.router(path.join(__dirname, 'db.json'))

server.use('/api', router);

server.listen(port);
console.log('Mock server listening on port ' + port);
console.log('Press CTRL+C to stop server');
