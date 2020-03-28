// config used by store server side only
module.exports = {
	// store UI language
	language: process.env.LANGUAGE || 'ar',
	// used by Store (server side)
	ajaxBaseUrl: process.env.AJAX_BASE_URL || 'https://api.demo.store.cyborgstech.com/ajax',
	// used by Store (server side)
	apiBaseUrl: process.env.API_BASE_URL || 'https://api.demo.store.cyborgstech.com/api/v1',

	storeListenPort: process.env.STORE_PORT || 3000,

	// key to sign tokens
	jwtSecretKey: process.env.JWT_SECRET_KEY || '@MeenZaidTareq',

	// key to sign store cookies
	cookieSecretKey: process.env.COOKIE_SECRET_KEY || '@MeenZaidTareq'
};
