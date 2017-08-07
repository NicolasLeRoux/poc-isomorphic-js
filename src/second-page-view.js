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
	user: {},

	oninit: function(vnode) {
		if (!vnode.attrs.styletron) {
			const elements = document.getElementsByClassName('_styletron_hydrate_');
			vnode.attrs.styletron = new StyletronClient(elements);
		}

		if (window[vnode.attrs.userId]) {
			vnode.state.user = window[vnode.attrs.userId];
		} else {
			return m.request({
					method: 'GET',
					url: 'http://localhost:3000/rest/users/' + vnode.attrs.userId
				})
				.then(json => {
					vnode.state.user = json;
				});
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
			m('p', [
				vnode.state.user.name.title,
				vnode.state.user.name.first,
				vnode.state.user.name.last
			].join(' ')),
			m('p', [
				vnode.state.user.location.street,
				vnode.state.user.location.postcode,
				vnode.state.user.location.state,
				vnode.state.user.location.city
			].join(' ')),
			m('script', 'window["' + vnode.attrs.userId + '"] = ' + JSON.stringify(vnode.state.user))
		];
	}
};
