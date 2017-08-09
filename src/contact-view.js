'use strict'

const m = require('mithril');
const StyletronUtils = require('styletron-utils');

function contactStyle (styletron) {
	return StyletronUtils.injectStyle(styletron, {
		display: 'block'
	});
}

function imageStyle (styletron) {
	return StyletronUtils.injectStyle(styletron, {
		width: '128px',
		height: '128px'
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
					class: imageStyle(vnode.attrs.styletron),
					src: user.base64
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
