const fs = require('fs');
const path = require('path');

const processBundlePath = path.resolve(__dirname, '../node_modules/@angular-devkit/build-angular/src/utils/process-bundle.js');
const processBundle = fs.readFileSync(processBundlePath, 'utf8');
const processBundleNew = processBundle.replace("sourceType: 'script'", "sourceType: 'unambiguous'");
fs.writeFileSync(processBundlePath, processBundleNew, 'utf8');
