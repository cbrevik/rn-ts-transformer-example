'use strict';

var path = require('path');

console.log('Does this even run?');

module.exports = {
    getCodeExts() {
        return [
            'js', 'ts', 'tsx', 'json'
        ]
    },

    getTransformModulePath() {
        return path.join(__dirname, 'transformer.js');
    },

};