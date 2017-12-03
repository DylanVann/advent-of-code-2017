const babel = require('@babel/core')

module.exports = {
    process(src, path) {
        if (path.endsWith('.ts')) {
            return babel.transformSync(src, { filename: path })
        }
        return src
    },
}
