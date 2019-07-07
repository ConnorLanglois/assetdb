'use strict';

class Utils {
	static serialize(obj) {
		return Object.keys(obj).map((key) => {
			return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
		}).join('&');
	}

	static sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}
