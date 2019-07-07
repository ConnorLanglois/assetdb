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

'use strict';

const ASSET_GROUPS = {
	'BLACK POINT FIRE BARN': 5,
	'BLUE POINT SCHOOL': 49,
	'CENTRAL OFFICE': 2,
	'DUNSTAN FIRE BARN': 5,
	'EIGHT CORNERS SCHOOL': 48,
	'MULTIPLE SCHOOLS': 1,
	'NORTH SCARBOROUGH FIRE BARN': 5,
	'OAK HILL FIRE BARN': 5,
	'PINE POINT FIRE BARN': 5,
	'PLEASANT HILL SCHOOL': 47,
	'PLEASANT HILL FIRE BARN': 5,
	'POLICE DEPARTMENT': 3,
	'POLICE COMMAND VAN': 3,
	'POLICE TASK FORCE': 3,
	'PUBLIC WORKS': 4,
	'SCARBOROUGH HIGH SCHOOL': 44,
	'SCARBOROUGH MIDDLE SCHOOL': 46,
	'SCARBOROUGH TOWNHALL': 2,
	'THE CAVE': 2,
	'UNKNOWN/MISSING': '',
	'WENTWORTH SCHOOL': 45
};

'use strict';

const ASSET_TYPES = {
	'AUDIO': '',
	'AUTOMOBILE': '',
	'CAMERA': '',
	'CHARGING STATION': '',
	'CHROMEBOOK': 1, // Network device
	'DESKTOP': '',
	'DIGITAL SIGNAGE HARDWARE': '',
	'DOCUMENT CAMERA': '',
	'DVD Drive': '',
	'FURNITURE': '',
	'INTERACTIVE WHITEBOARD': '',	
	'LAPTOP': '',
	'MONITOR': '',
	'NETBOOK': '',
	'PHONE': '',
	'PRINTER': '',
	'PROJECTOR': '',
	'SCANNER': '',
	'SERVER': '',
	'SOFTWARE': '',
	'SWITCH': '',
	'TABLET': '',
	'TV': '',
	'VR HEADSET': ''
};

'use strict';

const DATA = {
	__VIEWSTATE: '',
	state: '1',
	assettype: '1',
	assettypelock: 'on',
	assetname: '',
	assetnamelock: 'on',
	ipaddress: '',
	macaddress: '',
	manufacturer: '',
	manufacturerlock: 'on',
	model: '',
	modellock: 'on',
	domain: '',
	serial: '',
	SerialnumberLock: 'on',
	DNSName: '',
	FQDN: '',
	systemSKU: '',
	scanserver: 'thnetmon',
	assetgroups: '0',
	assetgroups: '',
	newAssetRelations: '',
	removeAssetRelations: '',
	newUserRelations: '',
	removeUserRelations: '',
	description: '',
	comments: '',
	purchased: '',
	warranty: '',
	contact: '',
	location: '',
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
	customfield1: '',
	customfield2: '',
	customfield3: '',
	customfield4: '',
	customfield5: '',
	customfield6: '',
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
	chksm: '',
	au: ''
};

class Data {
	static create(asset = {}) {
		return Object.assign({}, DATA, Object.keys(asset).length !== 0 && asset.constructor === Object {
			state: asset.state,
			assetType: asset.assetType,
			assetName: asset.assetName,
			ipaddress: asset.ipAddress,
			macaddress: asset.macAddress,
			manufacturer: asset.manufacturer,
			model: asset.model,
			serial: asset.serial,
			DNSName: asset.dnsName,
			FQDN: asset.fqdn,
			systemSKU: asset.systemSKU,
			assetgroups: asset.assetGroup,
			division: asset.division,
			purchased: asset.purchased,
			warranty: asset.warranty,
			contact: asset.contact,
			location: asset.location,
			building: asset.building,
			department: asset.department,
			branchoffice: asset.branchOffice,
			barcode: asset.barcode,
			order: asset.order,
			lastpatched: asset.lastPatched,
			lastbackup: asset.lastBackup,
			lastimage: asset.lastImage,
			delimg: asset.delImg,
			customfield1: asset.assetNum,
			customfield2: asset.beu,
			customfield3: asset.room,
			customfield4: asset.customField4,
			customfield5: asset.customField5,
			customfield6: asset.customField6,
			customfield7: asset.customField7,
			customfield8: asset.customField8,
			customfield9: asset.customField9,
			customfield10: asset.customField10,
			customfield11: asset.customField11,
			customfield12: asset.customField12,
			customfield13: asset.customField13,
			customfield14: asset.customField14,
			customfield15: asset.customField15,
			customfield16: asset.customField16,
			customfield17: asset.customField17,
			customfield18: asset.customField18,
			customfield19: asset.customField19,
			customfield20: asset.customField20
		} : {});
	}
}

'use strict';

class Gui {
	constructor (text, onclick) {
		this.text = text;
		this.onclick = onclick;

		this.button = document.createElement('button');
		this.button.type = 'button';
		this.button.textContent = this.text;
		this.button.onclick = this.onclick;

		this.textarea = document.createElement('textarea');
		this.textarea.readOnly = true;
		this.textarea.style.position = 'absolute';
		this.textarea.style.width = '150px';
		this.textarea.style.height = '15px';
	}

	show() {
		const tr = document.getElementsByClassName('ms-webpartpagedescription')[0];

		tr.append(this.button);
		tr.append(document.createTextNode('\u00A0'));
		tr.append(this.textarea);

		Gui.current = this;
	}
	
	log(...texts) {
		this.textarea.value += this.textarea.value !== '' ? '\n' : '';

		for (const text of texts) {
			this.textarea.value += text + ' ';
		}

		this.textarea.scrollTop = this.textarea.scrollHeight;
	}

	clear() {
		this.textarea.value = '';
	}

	static getCurrent() {
		return Gui.current;
	}
}

Gui.current = null;

'use strict';

const STATES = {
	'In Service': 1, // Active
	'Broken': 5, // Broken
	"Don't show": 6, // Don't show
	'In repair': 8, // In repair
	'Inactive': 2, // Non-active
	'Salvaged': 10, // Salvaged
	'Sold': 3, // Sold
	'Spare': 7, // Spare
	'Stock': 9, // Stock
	'Stolen': 4, // Stolen

};

'use strict';

class Thnetmon {
	createAssets(assets) {
		for (const asset of assets) {
			this.createAsset(asset);
		}
	}

	async createAsset(asset) {
		const request = new XMLHttpRequest();
		const dataRaw = Data.create(asset);
		const data = Utils.serialize(dataRaw);

		request.onload = () => {
			console.log(asset.assetNum, 'created');
			Gui.getCurrent().log(asset.assetNum, 'created');
		};

		request.open('POST', Thnetmon.URL_CREATE);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		request.send(data);
	}

	editAssets(assetIds, edit) {
		for (const assetId of assetIds) {
			this.editAsset(assetId, edit);
		}
	}

	async editAsset(assetId, edit) {
		const assetTokens = await this.genAssetTokens(asset.assetId);
		const asset = await this.getAsset(assetId);

		const request = new XMLHttpRequest();
		const dataRaw = Data.create(Asset.edit(asset, edit));
		const data = Utils.serialize(dataRaw);

		request.onload = () => {
			console.log(assetId, 'edited');
			Gui.getCurrent().log(asset.assetNum, 'edited');
		};

		request.open('POST', Thnetmon.URL_EDIT + assetId);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		request.send(data);
	}

	async getAssets(assetIds) {
		const assets = [];

		for (assetId of assetIds) {
			assets.push(await this.getAsset(assetId));
		}

		return assets;
	}

	getAsset(assetId) {
		return new Promise(resolve => {
			const request = new XMLHttpRequest();

			request.onload = () => {
				const asset = Asset.create();
				const html = document.createElement('html');

				html.innerHTML = request.responseText;

				const states = html.getElementById('state').selectedOptions;
				const assetTypes = html.getElementById('assettype').selectedOptions;
				const assetGroups = html.getElementById('assetgroups').selectedOptions;

				asset.state = states.length > 0 ? states[0].value : '';
				asset.assetType = assetTypes.length > 0 ? [0].value : '';
				asset.assetName = html.getElementById('assetname').value;
				asset.ipAddress = html.getElementById('ipaddress').value;
				asset.macAddress = html.getElementById('macaddress').value;
				asset.manufacturer = html.getElementById('manufacturer').value;
				asset.model = html.getElementById('model').value;
				asset.serial = html.getElementById('serial').value;
				asset.dnsName = html.getElementById('DNSName').value;
				asset.fqdn = html.getElementById('FQDN').value;
				asset.systemSKU = html.getElementById('systemSKU').value;
				asset.assetGroup = assetGroups.length > 0 ? assetGroups[0].value : '';
				asset.purchased = html.getElementById('purchased').value;
				asset.warranty = html.getElementById('warranty').value;
				asset.contact = html.getElementById('contact').value;
				asset.location = html.getElementById('location').value;
				asset.building = html.getElementById('building').value;
				asset.department = html.getElementById('department').value;
				asset.branchOffice = html.getElementById('branchoffice').value;
				asset.barcode = html.getElementById('barcode').value;
				asset.order = html.getElementById('order').value;
				asset.lastPatched = html.getElementById('lastpatched').value;
				asset.lastBackup = html.getElementById('lastbackup').value;
				asset.lastImage = html.getElementById('lastimage').value;
				asset.delImg = html.getElementById('delimg').value;
				asset.assetNum = html.getElementById('customfield1').value;
				asset.beu = html.getElementById('customfield2').value;
				asset.room = html.getElementById('customfield3').value;
				asset.customField4 = html.getElementById('customfield4').value;
				asset.customField5 = html.getElementById('customfield5').value;
				asset.customField6 = html.getElementById('customfield6').value;
				asset.customField7 = html.getElementById('customfield7').value;
				asset.customField8 = html.getElementById('customfield8').value;
				asset.customField9 = html.getElementById('customfield9').value;
				asset.customField10 = html.getElementById('customfield10').value;
				asset.customField11 = html.getElementById('customfield11').value;
				asset.customField12 = html.getElementById('customfield12').value;
				asset.customField13 = html.getElementById('customfield13').value;
				asset.customField14 = html.getElementById('customfield14').value;
				asset.customField15 = html.getElementById('customfield15').value;
				asset.customField16 = html.getElementById('customfield16').value;
				asset.customField17 = html.getElementById('customfield17').value;
				asset.customField18 = html.getElementById('customfield18').value;
				asset.customField19 = html.getElementById('customfield19').value;
				asset.customField20 = html.getElementById('customfield20').value;

				resolve(asset);
			};

			request.open('GET', Thnetmon.URL_EDIT + assetId);
			request.send();
		})
	}

	async getAssetId(query) {
		return (await this.queryAsset(query)).match(/(?:<s>)(.*)(?:<\/s>)/)[1];
	}

	queryAsset(query) {
		return new Promise(resolve => {
			const request = new XMLHttpRequest();

			request.onload = () => {
				resolve(request.responseText);
			};

			request.open('GET', Thnetmon.URL_QUERY + query);
			request.send();
		});
	}

	genAssetTokens(assetId) {
		return new Promise(resolve => {
			const request = new XMLHttpRequest();

			request.onload = () => {
				const assetTokens = {
					tempid: '',
					chksm: '',
					au: ''
				};

				assetTokens.tempid = assetId;
				assetTokens.au = request.responseText.match(/(?:<input type="hidden" id="au" name="au" value=")(.*)(?:"\/>)/)[1];
				assetTokens.chksm = (() => {
					var chksm = '';

					for(var i = 0; i < assetTokens.au.length; i++) {
					    chksm += assetTokens.au.charCodeAt(i);
					}

					return ((chksm / 15) + '').replace('.', '').replace(',', '').substring(0, 10);
				})();

				console.log(assetId, 'got');
				Gui.getCurrent().log(assetId, 'got');

				resolve(assetTokens);
			};

			request.open('GET', Thnetmon.URL_EDIT + assetId);
			request.send();
		});
	}
}

Thnetmon.URL_QUERY = 'http://thnetmon/autosuggest.aspx?q=';
Thnetmon.URL_CREATE = 'http://thnetmon/editasset.aspx?new=1';
Thnetmon.URL_EDIT = 'http://thnetmon/editasset.aspx?assetid=';

'use strict';

class Tweb {
	async getAssets(assetNums) {
		let assets = [];

		if (assetNums !== undefined) {
			for (const assetNum of assetNums) {
				await this.query(assetNum);

				const hrefs = this.parse();
				const assetsEx = await this.getAssetsEx(hrefs, assetNum);

				assets.push(...assetsEx);
			}
		} else {
			const hrefs = this.parse();
			const assetsEx = await this.getAssetsEx(hrefs);
			
			assets = assetsEx;
		}

		return assets;
	}

	async getAssetsEx(hrefs, assetNum='') {
		const assets = [];
		
		if (hrefs.length > 0) {
			await new Promise((resolve) => {
				for (const href of hrefs) {
					const request = new XMLHttpRequest();

					request.onload = () => {
						const asset = Asset.create();
						const html = request.responseText;
						const state = html.match(/(?:"Status)(?:(?:\s|\S)*?-->\s*)(.*)/)[1];
						const roomSlot = html.match(/(?:"ROOM)(?:(?:\s|\S)*?-->\s*)(.*)/)[1];
						const index = roomSlot.indexOf('-');
						const assetNum = html.match(/(?:"Asset_)(?:(?:\s|\S)*?-->\s*)(.*)/)[1];
						const location = html.match(/(?:"Location)(?:(?:\s|\S)*?-->\s*<(?:\s|\S)*?>)(.*)</)[1];
						const assetType = html.match(/(?:"Asset_x0020_Category0)(?:(?:\s|\S)*?-->\s*<(?:\s|\S)*?>)(.*)</)[1];

						asset.state = STATES[state] !== undefined ? STATES[state] : '';
						asset.assetType = ASSET_TYPES[assetType] !== undefined ? ASSET_TYPES[assetType] : '';
						asset.assetNum = parseInt(assetNum);
						asset.assetName = assetType + ' ' + asset.assetNum;
						asset.manufacturer = html.match(/(?:"Make)(?:(?:\s|\S)*?-->\s*)(.*)/)[1];
						asset.model = html.match(/(?:"Model)(?:(?:\s|\S)*?-->\s*)(.*)/)[1] + ' ' + html.match(/(?:"Model_)(?:(?:\s|\S)*?-->\s*)(.*)/)[1];
						asset.serial = html.match(/(?:"Serial_)(?:(?:\s|\S)*?-->\s*)(.*)/)[1].toUpperCase();
						asset.assetGroup = ASSET_GROUPS[location] !== undefined ? ASSET_GROUPS[location] : '';
						asset.location = location;
						asset.division = html.match(/(?:"Division)(?:(?:\s|\S)*?-->\s*)(.*)/)[1];
						asset.type = TYPES[assetType] !== undefined ? TYPES[assetType] : '';
						asset.school = asset.division === 'School' && SCHOOLS[location] !== undefined ? SCHOOLS[location] : '';
						asset.room = roomSlot.substring(0, index != -1 ? index : roomSlot.length);

						assets.push(asset);

						console.log(asset.assetNum, 'complete');
						Gui.getCurrent().log(asset.assetNum, 'complete');

						if (hrefs.indexOf(href) === hrefs.length - 1) {
							resolve();
						}
					};

					request.open('GET', href);
					request.send();
				}
			});
		} else {
			assets.push(Object.assign(Asset.create(), {assetName: assetNum, assetNum: assetNum}));

			console.log(assetNum, 'incomplete');
			Gui.getCurrent().log(assetNum, 'incomplete');
		}

		return assets;
	}

	parse() {
		const table = document.getElementById('ctl00_m_g_f68c69ca_2ad9_41f8_8dbc_ae76305ca678_ctl21_gvResults');
		const divs = table.getElementsByClassName('ms-vb itx');
		const as = Array.from(divs).map(div => div.firstElementChild);
		const hrefs = as.map(a => a.href);
				
		return hrefs;
	}

	async query(assetNum) {
		const input = document.getElementsByName('ctl00$m$g_f68c69ca_2ad9_41f8_8dbc_ae76305ca678$ctl06')[0];
		const button = document.getElementsByName('ctl00$m$g_f68c69ca_2ad9_41f8_8dbc_ae76305ca678$ctl07')[0];

		input.value = '0' + assetNum;

		button.click();

		await Utils.sleep(5000);
	}
}

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

