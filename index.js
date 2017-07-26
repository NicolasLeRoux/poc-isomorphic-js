// use a mock DOM so we can run mithril on the server
require('mithril/test-utils/browserMock')(global);

const express = require('express');
const path = require("path");
const m = require('mithril');
const toHtml = require('mithril-node-render');
const routes = require('./src/routes');
const browserify = require('browserify-middleware')

var app = express();

app.get('/app.js', browserify('./src/app.js'));

Object.keys(routes).map(function (route) {
	const module = routes[route];
	const onmatch = module.onmatch || (() => module);
	const render = module.render || (a => a);

	app.get(route, function (req, res, next) {
		res.type('html');
		//res.send('Hello world !!!');

		Promise.resolve()
			.then(() => m(onmatch(req.params, req.url) || 'div', req.params))
			.then(render)
			.then(toHtml)
			.then(res.send.bind(res))
			.catch(next);
	});
});

app.listen(3000);
