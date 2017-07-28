'use strict'

const m = require('mithril');

module.exports = {
	view: function view () {
		return [
			m('h1', 'Hello world !!!'),
			m('a', {
				href: '/',
				oncreate: m.route.link
			}, 'Page home')
		];
	}
};
