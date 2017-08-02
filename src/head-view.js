'use strict'

const m = require('mithril');

module.exports = {
	view: function view (vnode) {
		return [
			m('head', [
				m('title', 'Page home !'),
				m('meta[charset=utf-8]'),
				m('style', {
					class: '_styletron_hydrate_'
				}, vnode.attrs.styletron.getCss()),
				m('script', {
					src: '/app.js',
					async: true
				}),
				m('link', {
					rel: 'import',
					href: '/poc-contact-elem.html',
					async: true
				})
			])
		];
	}
};
