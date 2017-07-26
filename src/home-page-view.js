'use strict'

const m = require('mithril');

module.exports = function view () {
	return [
		m('!doctype[html]'),
		m('html[lang=en]', [
			m('head', [
				m('title', 'Page home !'),
				m('meta[charset=utf-8]'),
				m('script[src=/app.js]')
			])
		]),
		m('body', [
			m('h1', 'Hello world !!!')
		])
	];
};
