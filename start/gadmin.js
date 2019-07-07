'use strict';

class Asset {
	constructor (asset) {
		this.state = asset.state;
		this.assetType = asset.assetType;
		this.assetName = asset.assetName;
		this.manufacturer = asset.manufacturer;
		this.model = asset.model;
		this.serial = asset.serial;
		this.group = asset.group;
		this.location = asset.location;
		this.division = asset.division;
		this.assetNum = asset.assetNum;
		this.type = asset.type;
		this.school = asset.school;
		this.room = asset.room;
	}
}

class THNetMon {
	constructor (queryUrl, createUrl) {
		this.queryUrl = queryUrl;
		this.createUrl = createUrl;
	}

	create(assets) {
		for (const asset of assets) {
			const request = new XMLHttpRequest();

			request.onload = function () {
				if (request.responseText.length === 0) {
					const request = new XMLHttpRequest();
					const dataRaw = {
						__VIEWSTATE: '',
						state: '1',
						assettype: '1',
						assettypelock: 'on',
						assetname: asset.assetName,
						assetnamelock: 'on',
						ipaddress: '',
						macaddress: '',
						manufacturer: asset.manufacturer,
						manufacturerlock: 'on',
						model: asset.model,
						modellock: 'on',
						domain: '',
						serial: asset.serial,
						SerialnumberLock: 'on',
						systemSKU: '',
						scanserver: 'thnetmon',
						assetgroups: '0',
						assetgroups: asset.group,
						newAssetRelations: '',
						removeAssetRelations: '',
						newUserRelations: '',
						removeUserRelations: '',
						description: '',
						comments: '',
						purchased: '',
						warranty: '',
						contact: '',
						location: asset.location,
						locationlock: 'on',
						building: '',
						department: '',
						branchoffice: '',
						barcode: '',
						order: '',
						lastpatched: '',
						lastbackup: '',
						lastimage: '',
						delimg: '0',
						customfield1: asset.assetNum,
						customfield2: '',
						customfield3: asset.type,
						customfield4: '',
						customfield5: asset.school,
						customfield6: asset.room,
						customfield7: '',
						customfield8: '',
						customfield9: '',
						customfield10: '',
						customfield11: '',
						customfield12: '',
						customfield13: '',
						customfield14: '',
						customfield15: '',
						customfield16: '',
						customfield17: '',
						customfield18: '',
						customfield19: '',
						customfield20: '',
						tempid: '0',
						chksm: ''
					};
					const data = serialize(dataRaw);

					request.onload = function () {
						Gui.getCurrent().log(asset.assetNum, 'created');
					};

					request.open('POST', CREATE_URL);
					request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					request.send(data);
				} else {
					Gui.getCurrent().log(asset.assetNum, 'exists');
				}
			};

			request.open('GET', QUERY_URL + asset.assetNum);
			request.send();
		}
	}
}

class GAdmin {
	constructor (url, cTokenSub, rowsSub, domainName, xsrfToken) {
		this.url = url;
		this.cTokenSub = cTokenSub;
		this.rowsSub = rowsSub;

		this.domainName = domainName;
		this.xsrfToken = xsrfToken;

		this.rows = 30;
		this.cToken = '';
	}

	async query() {
		const assets = [];

		do {
			var obj = await this.queryEx(this.cToken, this.rows, false);

			for (const device of obj['1']) {
				const asset = new Asset({
					state: 'Active',
					assetType: 'Network device',
					assetName: 'CHROMEBOOK ' + parseInt(device['39']),
					manufacturer: 'Lenovo',
					model: device['2'],
					serial: device['1'],
					group: 45,
					location: 'WENTWORTH SCHOOL',
					division: 'School',
					assetNum: parseInt(device['39']),
					type: 'Chromebook',
					school: 'WS',
					room: '',
				});

				assets.push(asset);
				Gui.getCurrent().log(asset.assetNum, 'complete');
			}

			this.cToken = obj['2'];
		} while (obj['1'].length === this.rows);

		return assets;
	}

	async queryEx(cToken, rows, async = true) {
		return new Promise((resolve) => {
			const request = new XMLHttpRequest();

			request.onload = function () {
				resolve(JSON.parse(request.responseText));
			};

			request.open('GET', this.url.replace(this.cTokenSub, cToken).replace(this.rowsSub, rows), async);
			request.setRequestHeader('cpanel_active_user_domain_name', this.domainName);
			request.setRequestHeader('x-dcp-xsrftoken', this.xsrfToken);
			request.send();
		});
	} 
}

class Gui {
	constructor (text, onclick) {
		this.text = text;
		this.onclick = onclick;

		this.textarea = document.createElement('textarea');
	}

	show() {
		const td = document.getElementsByClassName('B1QQ0QC-hd-b')[0].getElementsByTagName('*')[2];
		const button = td.children[1].cloneNode(true);
		const subButton = button.getElementsByTagName('*')[6];

		button.textContent = this.text;
		button.onclick = this.onclick;

		subButton.className = subButton.className.split(' ')[1];
		
		this.textarea.style.position = 'absolute';
		this.textarea.readOnly = true;

		td.appendChild(button);
		td.appendChild(this.textarea);

		for (const element of td.children) {
			element.style.verticalAlign = 'top';
		}

		Gui.current = this;
	}

	log(...texts) {
		this.textarea.value += this.textarea.value.length > 0 ? '\n' : '';

		for (const text of texts) {
			this.textarea.value += text + ' ';
		}
	}

	static getCurrent() {
		return Gui.current;
	}
}

Gui.current = null;

const C_TOKEN_SUB = 'TOKEN';
const ROWS_SUB = 'ROWS';

const QUERY_URL = 'http://thnetmon/autosuggest.aspx?q=';
const CREATE_URL = 'http://thnetmon/editasset.aspx?new=1';
const G_ADMIN_URL = `https://admin.google.com/ServiceSettings/QueryChromeOsDevices?continuationToken=${C_TOKEN_SUB}&deviceSearchNumRows=${ROWS_SUB}&deviceSearchSortBy=LAST_SYNC%3ADESC&deviceSearchQuery=+status%3Aactive&deviceSearchTimeZoneOffsetMinutes=-240&maskedOrgUnitId=3f4c2vu3jz0vm7`;

const DOMAIN_NAME = 'scarboroughschools.org';
const XSRF_TOKEN = 'AJdSznKn_D-JIReIRHvC0_k1K4ZabryooQ:1499969503927';

(function () {
	const thnetmon = new THNetMon(QUERY_URL, CREATE_URL);
	const gadmin = new GAdmin(G_ADMIN_URL, C_TOKEN_SUB, ROWS_SUB, DOMAIN_NAME, XSRF_TOKEN);

	const gui = new Gui('Script', async function () {
		const assets = await gadmin.query();

		// thnetmon.create(assets);
	});

	gui.show();
})();
