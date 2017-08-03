'use strict'

const m = require('mithril');
const contactView = require('./contact-view.js');
const StyletronClient = require('styletron-client');
const StyletronUtils = require('styletron-utils');

function titleStyle (styletron) {
	return StyletronUtils.injectStyle(styletron, {
		color: 'green'
	});
}

module.exports = {
	users: [],

	oninit: function(vnode) {
		if (!vnode.attrs.styletron) {
			const elements = document.getElementsByClassName('_styletron_hydrate_');
			vnode.attrs.styletron = new StyletronClient(elements);
		}

		if (window.data) {
			vnode.state.users = window.data;
		} else {
			return m.request({
					method: 'GET',
					url: 'https://randomuser.me/api?results=10'
				})
				.then(json => {
					vnode.state.users = json.results;
				});
		}
	},

	view: function view (vnode) {
		return [
			m('h1', {
				class: titleStyle(vnode.attrs.styletron)
			}, 'Hello world !!!'),
			m('h2', 'Liste de personne:'),
			m('ul', vnode.state.users.map(function(user) {
				return m(contactView, {
					user: user,
					styletron: vnode.attrs.styletron
				});
			})),
			m('script', 'window.data = ' + JSON.stringify(vnode.state.users))
		];
	}
};
