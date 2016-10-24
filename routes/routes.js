'use strict';

var express = require("epress");
var router = epress.Router();

module.exports = router;

router.get("/", function(req, res) {
	res.json({
		response: "You will get me a GET request"
	});
});

router.post(("/", function(req, res) {
	res.json({
		response: "You sent me a POST request",
		body: res.body
	});
});


router.get("/:qID", function(req, res) {
	res.json({
		response: "You will get me a GET request " + req.params.qID
	});
});

router.post("/:qID/answers", function(req, res) {
	res.json({
		response: "You sent me a POST request",
		questionID: req.params.qID,
		body: req.body
	});
});

router.put("/:id/answers/:aID", function(req, res) {
	res.json({
		response: "You sent me a PUT request to /answer",
		questionID: req.params.qID,
		answerID: req.params.aID,
		body: req.body
	});
});

router.delete("/:id/answers/:aID", function(req, res) {
	res.json({
		response: "You sent me a DELETE request to /answer",
		questionID: req.params.qID,
		answerID: req.params.aID,
	});
});

router.post("/:id/answers/:aID/vote-:dir", function(req, res) {
	res.json({
		response: "You sent me a POST request to /vote-" + req.params.dir,
		questionID: req.params.qID,
		answerID: req.params.aID,
		vote: req.params.dir
	});
});
