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
