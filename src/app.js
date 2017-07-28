'use strict'

const m = require('mithril');
const domready = require('domready');
const routes = require('./routes');

m.route.prefix('');

domready(function () {
	m.route(document.body.parentElement, '/', routes);
});
