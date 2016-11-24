'use strict';
let path = require('path');
let ts = require('typescript');
let tsConfig = require('./tsconfig.json');
let rnTransform = require('react-native/packager/transformer').transform;

module.exports = function transform(data, callback) {
    // Do custom transformations
    let result = data.sourceCode;
    console.log(data);
    if (path.extname(data.filename) == '.tsx' || path.extname(data.filename) == '.ts') {
        try {
            result = ts.transpileModule(result, { compilerOptions: tsConfig.compilerOptions });
            result = result.outputText;
            console.log(result);
        } catch (e) {
            console.log(e);

            callback(e);
            return;
        }
    }

    console.log('---------');

    try {
        result = rnTransform(result, data.filename, data.options);
    } catch (e) {
        callback(e);
        return;
    }
    callback(null, result);
}