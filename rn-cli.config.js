var path = require('path');
module.exports = {
    getCodeExts() {
        return [
            'ts', 'tsx', 'json'
        ]
    },
    getTransformModulePath() {
        return path.join(__dirname, 'transformer.js');
    },
}