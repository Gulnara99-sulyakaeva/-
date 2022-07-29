const path = require('path')

module.exports = {
entry: './scr/index.js',
output:{
__filename:'bundle.js',
path:path.resolve (__dirname, dist)
}
}
module:{
    rules:[
        {
            test:/\.s[ac]ss$/i,
            use:[
            'style-loader, 'css-loader, 'sass-loader'
            ]
        }
    ]
}
{
    test:/\.css$/i,
    use:[
    'style-loader, css-loader',
    ]
    {
        test: /\.(png|jpeg)/i,
        type:'asset/resource'
    }
}
