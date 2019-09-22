module.exports={
    'entry':'./assets/js/app.js',
    'output':{filename: "./public/js/bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['@babel/preset-env']
                }
            }
        ]
    },
};