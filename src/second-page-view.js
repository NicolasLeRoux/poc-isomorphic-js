'use strict'

const m = require('mithril');

module.exports = {
	view: function view (vnode) {
		return [
			m('h1', 'Hello world !!!'),
			m('a', {
				href: '/',
				oncreate: m.route.link
			}, 'Page home'),
			m('p', vnode.attrs.id)
		];
	}
};
