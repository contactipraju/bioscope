const fs = require('fs');
const utils = require('tslint/lib/utils');

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function createVersionsFile(filename) {
	const vers = process.env.npm_package_version;
	const major = vers.split(".").splice(0, 2).join(".");

	const revCount = (await exec('git rev-list HEAD --count')).stdout.toString().trim();
	const minor = revCount;

	const rev = (await exec('git rev-parse --short HEAD')).stdout.toString().trim().toUpperCase();

	const date = new Date().toISOString();

	const content = utils.dedent`
	// this file is automatically generated by /version.ts script
	export const version = {
		major: '${major}',
		minor: '${minor}',
		rev: '${rev}',
		date: '${date}'
	};
	`;

	// writeFile function with filename, content and callback function
	fs.writeFile(filename, content, function (err) {
		if (err) throw err;
		console.log('Version file created successfully.');
	});
}

createVersionsFile('src/environments/version.ts'); 
