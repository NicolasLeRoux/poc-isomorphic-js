'use strict'

const m = require('mithril');

module.exports = {
	users: [],

	oninit: function(vnode) {
		return m.request({
				method: 'GET',
				url: 'https://randomuser.me/api?results=10'
			})
			.then(json => {
				vnode.state.users = json.results;
			});
	},

	view: function view (vnode) {
		return [
			m('h1', 'Hello world !!!'),
			m('h2', 'Liste de personne:'),
			m('ul', vnode.state.users.map(function(user) {
				return m('li', [
					m('p', [
						user.name.title,
						user.name.first,
						user.name.last
					].join(' ')),
					m('a', {
						href: '/users/' + user.login.username,
						oncreate: m.route.link
					}, 'more...'),
				]);
			}))
		];
	}
};
