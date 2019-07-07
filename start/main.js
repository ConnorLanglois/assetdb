'use strict';

[
	'utils',
	'thnetmon',
	'tweb',
	'gui',
	'asset',
	'data',
	'states',
	'asset_types',
	'asset_groups',
].map(script => {
	return 'https://rawgit.com/Colo553/AssetDB/master/assetdb/' + script + '.js';
}).forEach(url => {
	document.body.appendChild(Object.assign(document.createElement('script'), {src: url}));
});
