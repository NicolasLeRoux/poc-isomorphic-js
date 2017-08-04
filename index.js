// use a mock DOM so we can run mithril on the server
require('mithril/test-utils/browserMock')(global);
global.window.XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

const express = require('express');
const path = require("path");
const m = require('mithril');
const toHtml = require('mithril-node-render');
const routes = require('./src/routes');
const headView = require('./src/head-view');
const browserify = require('browserify-middleware');
const StyletronServer = require('styletron-server');

var app = express();

Object.keys(routes).map(function (route) {
	const module = routes[route];
	const onmatch = module.onmatch || (() => module);
	const render = module.render || (a => a);
	const styletron = new StyletronServer();

	app.get(route, function (req, res, next) {
		res.type('html');

		Promise.resolve()
			.then(() => {
				// TODO: Refacto pour rendre ça testable...
				return {
					view: function view () {
						return [
							m('!doctype[html]'),
							m('html[lang=en]', [
								m(headView, {styletron}),
								m('body', m(onmatch(req.params, req.url) || 'div', Object.assign({}, req.params, {styletron})))
							])
						];
					}
				};
			})
			.then(render)
			.then(toHtml)
			.then(res.send.bind(res))
			.catch(next);
	});
});

app.get('/app.js', function (req, res, next) {
	setTimeout(function () {
		browserify('./src/app.js')(req, res, next);
	}, 3000);
});

app.get('/poc-contact-elem.html', function (req, res, next) {
	setTimeout(function () {
		res.sendFile(path.join(__dirname, './src/poc-contact-elem.html'));
	}, 1000);
});

app.get('/rest/users', function (req, res, next) {
	res.sendFile(path.join(__dirname, './stub/users.json'));
});

app.get('/rest/users/:userId', function (req, res, next) {
	res.sendFile(path.join(__dirname, './stub/user.' + req.params.userId + '.json'));
});

app.get('/img/:image', function (req, res, next) {
	res.sendFile(path.join(__dirname, './img/' + req.params.image));
});

app.listen(3000);
