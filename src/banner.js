import * as fs from 'fs'

import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { version } = require('../../package.json')

function appendPkgVersion(pkgJSONPath, jsFilePath) {
    const {version} = require(pkgJSON)
    fs.readFile(jsFilePath, 'utf8', (err, data) => {
        if (err) { console.error(err); return; }
        fs.writeFile(jsFilePath, `/*version: ${version}*/\n${data}` , err => {
            if (err) { console.error(err);  return; }
        });
    })
}

export {appendPkgVersion}