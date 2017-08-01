'use strict'

const m = require('mithril');
const contactView = require('./contact-view.js');

module.exports = {
	users: [],

	oninit: function(vnode) {
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
			m('h1', 'Hello world !!!'),
			m('h2', 'Liste de personne:'),
			m('ul', vnode.state.users.map(function(user) {
				return m(contactView, {
					user: user
				});
			})),
			m('script', 'window.data = ' + JSON.stringify(vnode.state.users))
		];
	}
};
