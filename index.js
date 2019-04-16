'use strict';
const alfy = require('alfy');

const getPackages = async (q) => await alfy.fetch('https://api.npms.io/v2/search', {
	query: {
		q,
		size: 10,
	}
});

const getPackageSize = async (pkg) => await alfy.fetch('https://bundlephobia.com/api/size', {
	query: {
		package: pkg,
	}
});

// human readible file size
function hfs(size) {
	var i = Math.floor( Math.log(size) / Math.log(1024) );
	return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ['B', 'kB', 'MB', 'GB', 'TB'][i];
};

(async () => {
	const packages = await getPackages(alfy.input);

	if (packages.results.length > 1 && packages.results[0].searchScore < 100000) {
		const items = packages.results
			.filter(result => result.package.name.length > 1)
			.map(result => {
				const { name, description, version, links: { npm } } = result.package;
				const { final: rank } = result.score;
				return {
					title: `${name}@${version}`,
					subtitle: description,
					arg: npm,
					mods: {
						cmd: {
							subtitle: `Trust rating: ${(rank * 100).toFixed(2)}%`,
						},
					}
				};
			});
		alfy.output(items);
	} else {
		const packageName = packages.results[0].package.name;
		const { name, size, gzip, version, repository, description } = await getPackageSize(packageName);
		alfy.output([{
			title: `${name}@${version}`,
			subtitle: `${hfs(size)}, ${hfs(gzip)} GZIPPED`,
			arg: repository,
			mods: {
				cmd: {
					subtitle: description,
				},
			}
		}]);
	}
})();
