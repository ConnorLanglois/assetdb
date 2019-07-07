'use strict';

const ASSET = {
	state: '',
	assetType: '',
	assetName: '',
	ipAddress: '',
	macAddress: '',
	manufacturer: '',
	model: '',
	serial: '',
	dnsName: '',
	fqdn: '',
	systemSKU: '',
	assetGroup: '',
	division: '',
	purchased: '',
	warranty: '',
	contact: '',
	location: '',
	building: '',
	department: '',
	branchOffice: '',
	barcode: '',
	order: '',
	lastPatched: '',
	lastBackup: '',
	lastImage: '',
	delImg: 0,
	assetNum: '',
	beu: '',
	room: '',
	customField4: '',
	customField5: '',
	customField6: '',
	customField7: '',
	customField8: '',
	customField9: '',
	customField10: '',
	customField11: '',
	customField12: '',
	customField13: '',
	customField14: '',
	customField15: '',
	customField16: '',
	customField17: '',
	customField18: '',
	customField19: '',
	customField20: ''
};

class Asset {
	static create() {
		return Object.assign({}, ASSET);
	}

	static edit(asset, edit) {
		return Object.assign(asset, edit);
	}
}
