'use strict';

(async function () {
	const gui = new Gui('Script Edit', async function () {
		const ASSET_NUMS = (function () {
			const inputs = document.getElementsByName('ctl00$m$g_f68c69ca_2ad9_41f8_8dbc_ae76305ca678$ctl06');

			if (inputs.length === 1) {
				return inputs[0].value.replace(/\s/g, '').split(',').map(assetNum => parseInt(assetNum));
			}

			return undefined;
		})();
		const thnetmon = new Thnetmon();
		const tweb = new Tweb();
		const edit = {

		};
		const queryTag = 'serial';

		Gui.getCurrent().clear();

		const assets = await tweb.getAssets(ASSET_NUMS);

		for (const asset of assets) {
			thnetmon.editAsset(await thnetmon.getAssetId(asset[queryTag]), edit);
		}
	});

	gui.show();
})();
