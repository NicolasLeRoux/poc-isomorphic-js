'use strict'

const m = require('mithril');
const StyletronClient = require('styletron-client');
const StyletronUtils = require('styletron-utils');

function titleStyle (styletron) {
	return StyletronUtils.injectStyle(styletron, {
		color: 'blue',
		'text-decoration': 'underline'
	});
}

module.exports = {
	oninit: function(vnode) {
		if (!vnode.attrs.styletron) {
			const elements = document.getElementsByClassName('_styletron_hydrate_');
			vnode.attrs.styletron = new StyletronClient(elements);
		}
	},

	view: function view (vnode) {
		return [
			m('h1', {
				class: titleStyle(vnode.attrs.styletron)
			}, 'Hello world !!!'),
			m('a', {
				href: '/',
				oncreate: m.route.link
			}, 'Page home'),
			m('p', vnode.attrs.id)
		];
	}
};
