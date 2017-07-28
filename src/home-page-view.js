'use strict'

const m = require('mithril');

module.exports = {
	users: [],

	oninit: function(vnode) {
		m.request({
				method: 'GET',
				url: 'https://randomuser.me/api'
			})
			.then(json => {
				console.log('Mes données: ', json);
				this.users = json.results;
			});
	},

	view: function view (vnode) {
		return [
			m('h1', 'Hello world !!!'),
			m('a', {
				href: '/second',
				oncreate: m.route.link
			}, 'Page second'),
			m('ul', vnode.state.users.map(function(user) {
				return m('li', [
					user.name.title,
					user.name.first,
					user.name.last
				].join(' '));
			}))
		];
	}
};
