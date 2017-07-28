'use strict'

const m = require('mithril');

module.exports = {
	view: function view () {
		return [
			m('h1', 'Hello world !!!'),
			m('a', {
				href: '/second',
				oncreate: m.route.link
			}, 'Page second')
		];
	}
};
