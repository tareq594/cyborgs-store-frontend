// config used by store client side only
module.exports = {
	// store UI language
	language: process.env.LANGUAGE || 'de',
	// used by Store (server side)
	ajaxBaseUrl: process.env.AJAX_BASE_URL || 'https://api.demo.store.cyborgstech.com/ajax',
	developerMode: process.env.DEVELOPER_MODE || false
};
