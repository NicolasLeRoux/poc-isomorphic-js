'use strict'

module.exports = {
	'/': require('./home-page-view'),
	'/users/:userId': require('./second-page-view')
}
