// use a mock DOM so we can run mithril on the server
require('mithril/test-utils/browserMock')(global);

const express = require('express');
const path = require("path");
const m = require('mithril');
const render = require('mithril-node-render');
const appClient = require('./src/app');

var app = express();

app.get('/', function (req, res) {
	//res.sendFile(path.join(__dirname + '/public/index.html'));
	render(appClient()).then(function (html) {
		res.send(html);
	});
});

app.listen(3000);
