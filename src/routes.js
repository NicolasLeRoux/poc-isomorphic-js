'use strict'

module.exports = {
	'/': require('./home-page-view'),
	'/users/:id': require('./second-page-view')
}
