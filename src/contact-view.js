'use strict'

const m = require('mithril');

module.exports = {
	view: function view (vnode) {
		var user = vnode.attrs.user;

		return m('poc-contact-elem', [
			m('img', {
				slot: 'picture',
				src: user.picture.thumbnail
			}),
			m('span', {
				slot: 'name'
			}, [
				user.name.title,
				user.name.first,
				user.name.last
			].join(' ')),
			m('a', {
				slot: 'link',
				href: '/users/' + user.login.username,
				oncreate: m.route.link
			}, 'more...')
		]);
	}
};
