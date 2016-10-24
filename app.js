'use strict';

var epress = require("express");
var app = express();
var jsonParser = require("body-parser").json;
var logger = require("morgan");

app.use(jsonParser());

app.use("/questions", routes);

app.use(function(req, res, next){
	var err = new Error("Not found");
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.json({
		error:{ message: err.message }
	});
});
