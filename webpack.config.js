'use strict'
const path = require('path');

module.exports = {
    entry:{
        index:'./src/index.js',
        search:'./src/search.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    plugins:[
    ],
    mode:'production',
    module:{
        rules:[
            {
                test:/.js$/,
                use:'babel-loader'
            },
            {
                test:/.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}