// very big note










// src folder is only for development purpose >>> and the final, code will be in the dist folder (bundeled code)














const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = 
{
    // in webpack there are 4 core concepts: entry point, output, loaders and plugins

    entry: ['babel-polyfill', './src/js/index.js'], // where our webpack will start the bundling (the file where we write js)
                // babel-polyfill >>> related to babel-polyfill in the package.json which converts things that are not in es5 like promises, array.from
    output: {  // where to save our bundle file
        path: path.resolve(__dirname, 'dist'), // __dirname: the project file(9-forkify >>>> (starter))
        filename: 'js/bundle.js'
    },
    devServer: { // related to the webpack-dev-server (to auto reload the page when you save your work)
        // specify the folder from which webpack should serve our files (all of the final code)
        contentBase: './dist'
    },
    plugins: [ // related to html-webpack-plugin
        // to copy the source html content from the src(development file) to the dist(bundeled file)
        new HtmlWebpackPlugin({
            filename: 'index.html', // the final version of html (in the dist)
            template: './src/index.html' // the source html

            // if you made a new project, you won't find the html(and bundle.js) in the dist folder because when using dev-server, it will not save the file on the disk, it will simply like stream them to the server
            // if you wanted to see the html file in the dist, you will have to run the dev or build (in command line>>>> npm run build)
        
           
        })
    ],
    module: {   // related to BABEL
         // babel is a compiler used to convert es6 to es5 and babel-loader >> SASS to CSS
        rules: [
            {
                test: /\.js$/,  // look at all javascript file (which end with .js)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
