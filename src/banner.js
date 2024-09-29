import * as fs from 'fs'

function appendPkgVersion(pkgJSONPath, jsFilePath) {
    const {version} = require(pkgJSONPath)
    fs.readFile(jsFilePath, 'utf8', (err, data) => {
        if (err) { console.error(err); return; }
        fs.writeFile(jsFilePath, `/*version: ${version}*/\n${data}` , err => {
            if (err) { console.error(err);  return; }
        });
    })
}

export {appendPkgVersion}