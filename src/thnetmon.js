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
