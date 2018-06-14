
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
    outFolder: path.resolve(__dirname, 'dist'),
    inFolder: path.resolve(__dirname, 'src'),
    viewsFolder: path.resolve(__dirname, 'src/views'),
    nodeModulesFolder: path.resolve(__dirname, "node_modules")
};

module.exports = {
    entry: {
        app: ["./src/app/index.jsx"],
        libs: ["react", "react-dom", "jquery", "react-bootstrap"]
    },
    output: {
        path: paths.outFolder,
        publicPath: "",
        filename: "js/[name].bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
    },
    mode: "production", //"development",
    devtool: "source-map",
    optimization: {
        splitChunks: {
            cacheGroups: {
                app: { test: "app", name: "app", enforce: true },
                libs: { test: "libs", name: "libs", enforce: true }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            showErrors: true,
            minify: false,
            hash: true,
            path: paths.outFolder,
            title: "React App",
            template: "./src/app/index.ejs",
            filename: "index.html"
        }),
        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
        new CleanWebpackPlugin(path.outFolder, process.cwd()),
        new CopyWebpackPlugin([{ from: path.resolve(__dirname, 'src/mocks/'), to: path.resolve(__dirname, 'dist/mocks/') }])
        // mode:"production" can be added to remove below
        // new UglifyJsPlugin({ sourceMap: false }),        
        // new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'app',
        //     chunks: ['bundle'],
        //     filename: "js/app.bundle.js",
        //     minChunks: Infinity
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'lib',
        //     chunks: ['bundle'],
        //     filename: "js/libs.bundle.js",
        //     minChunks: Infinity
        // })
    ],
    performance: {
        hints: "warning", // enum
        maxAssetSize: 1500000, // int (in bytes),
        maxEntrypointSize: 4000000, // int (in bytes)
        assetFilter: function (assetFilename) {
            // Function predicate that provides asset filenames
            return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
        }
    },
    stats: {
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: true
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
            { test: /\.html$/, use: "raw-loader" },
            //{ test: /\.json$/, use: "json-loader"},
            { test: /\.(gif|png|jpe?g)$/i, use: "file-loader?limit=20000&name=[name].[ext]&publicPath=/&outputPath=images/" },
            {
                test: /\.(css|scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            { test: /\.svg$/, use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
            { test: /\.woff$/, use: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
            { test: /\.woff2$/, use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
            { test: /\.eot$/, use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' }

        ],
    },
    devServer: {
        contentBase: paths.inFolder,
    }
};