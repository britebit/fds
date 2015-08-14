/*
 * Created by Gordon on 11/08/2015.
 */
/// <reference path="type_definitions\express\express.d.ts"/>
/// <reference path="type_definitions\body-parser\body-parser.d.ts"/>
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// Tell app to use bodyParser.
// This will allow us to process data from a POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Set the port on which the app will listen
var port = process.env.PORT || 80;
//Set the response to be returned when requesting the root of the service
var router = express.Router();
// All routes will be prefixed with 'api'
app.use('/api', router);
router.get('/', function (request, response) {
    response.json({
        serviceName: "Elsevier Fraud Service",
        version: "v0.1.0"
    });
});
// GB: Need to work out how to get the express.Router reference in the RouteFactory
// var routeFactory = new RouteFactory();
//routeFactory.SetRoutes(app.Router());//app.Router() is the same as express.Router()
app.listen(port);
console.log('Server running ...');
//# sourceMappingURL=server.js.map