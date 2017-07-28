'use strict'

const m = require('mithril');

module.exports = {
	view: function view () {
		return [
			m('head', [
				m('title', 'Page home !'),
				m('meta[charset=utf-8]'),
				m('script', {
					src: '/app.js',
					async: true
				})
			])
		];
	}
};
