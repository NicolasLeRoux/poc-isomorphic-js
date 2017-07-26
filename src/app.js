'use strict'

const m = require('mithril');
const domready = require('domready');
const home = require('./home-page-view');
const second = require('./second-page-view');

domready(function () {
	m.route(document, '/', {
		'/': home,
		'/second': second,
	});
});
