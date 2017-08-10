'use strict'

const m = require('mithril');
const StyletronUtils = require('styletron-utils');

function contactStyle (styletron) {
	return StyletronUtils.injectStyle(styletron, {
		display: 'block'
	});
}

module.exports = {
	view: function view (vnode) {
		var user = vnode.attrs.user;

		return m('poc-contact-elem', {
			class: contactStyle(vnode.attrs.styletron)
		}, [
			m('poc-lazy-img-elem', {
				src: 'img/' + user.picture,
				slot: 'picture'
			}, m('img', {
					src: user.base64,
					height: '128px',
					width: '128px'
				})),
			m('span', {
				slot: 'name'
			}, [
				user.name.title,
				user.name.first,
				user.name.last
			].join(' ')),
			m('a', {
				slot: 'link',
				href: '/users/' + user.id,
				oncreate: m.route.link
			}, 'more...')
		]);
	}
};
