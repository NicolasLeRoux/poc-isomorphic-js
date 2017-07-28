'use strict'

const m = require('mithril');

module.exports = {
	view: function view () {
		return [
			m('head', [
				m('title', 'Seconde page.'),
				m('meta[charset=utf-8]'),
				m('script[src=/app.js]')
			]),
			m('body', [
				m('h1', 'Hello world !!!')
			])
		];
	}
};
