'use strict';

(async function () {
	const gui = new Gui('Script Create', async function () {
		const ASSET_NUMS = (function () {
			const inputs = document.getElementsByName('ctl00$m$g_f68c69ca_2ad9_41f8_8dbc_ae76305ca678$ctl06');

			if (inputs.length === 1) {
				return inputs[0].value.replace(/\s/g, '').split(',').map(assetNum => parseInt(assetNum));
			}

			return undefined;
		})();
		const thnetmon = new Thnetmon();
		const tweb = new Tweb();
		const queryTag = 'assetNum';

		Gui.getCurrent().clear();

		const assets = await tweb.getAssets(ASSET_NUMS);

		for (const asset of assets) {
			const queryRes = await thnetmon.queryAsset(asset[queryTag]);

			if (queryRes.length === 0) {
				thnetmon.createAsset(asset);
			} else {
				console.log(asset.assetNum, 'exists');
				Gui.getCurrent().log(asset.assetNum, 'exists');
			}
		}
	});

	gui.show();
})();
