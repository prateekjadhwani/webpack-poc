module.exports = {
    entry: './app.js',
    output: {
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: '/(node_modules|bower_components)/',
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devtool: 'source-map'
}