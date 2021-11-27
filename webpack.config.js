const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = { 
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src','index.tsx'),
    output: {
        path: path.resolve(__dirname,'dist'),
        file: 'bundle.js'
    }
}