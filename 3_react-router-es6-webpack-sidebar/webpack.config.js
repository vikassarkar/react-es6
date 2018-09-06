
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

var routerConfigPath = "./src/configs/env_config.json";
const paths = {
    outFolder: path.resolve(__dirname, 'dist'),
    inFolder: path.resolve(__dirname, 'src'),
    viewsFolder: path.resolve(__dirname, 'src/views'),
    nodeModulesFolder: path.resolve(__dirname, "node_modules")
};

module.exports = {

    entry: {
        "my-module": ["./src/module/my-module/MyRouterLoader.jsx"],
        "react": ["react", "react-dom", "react-router", "react-router-dom"],
        "vendors": ["jquery", "reactstrap"]
    },
    output: {
        path: paths.outFolder,
        publicPath: "",
        pathinfo: true,
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
    },
    mode: "production", //"development",
    devtool: "source-map",
    optimization: {
        splitChunks: {
            cacheGroups: {
                "my-module": { test: "my-module", name: "my-module", enforce: true },
                "react": { test: "react", name: "react", enforce: true },
                "vendors": { test: "vendors", name: "vendors", enforce: true }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            showErrors: true,
            minify: false,
            hash: true,
            path: paths.outFolder,
            title: "React",
            template: "./src/index.ejs",
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

            // { test: /\.json$/, enforce: "pre", use: ['json-loader'] },
            { test: /\.(gif|png|jpe?g)$/i, use: ["file-loader?limit=20000&name=[name].[ext]&publicPath=/assets/images/&outputPath=assets/images/", "image-webpack-loader"] },
            { test: /\.svg$/, use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]' },
            { test: /\.woff$/, use: 'url-loader?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]' },
            { test: /\.woff2$/, use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]' },
            { test: /\.eot$/, use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]' },
            {
                test: /\.(css|scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ],
    },
    performance: {
        hints: "warning", // enum
        maxAssetSize: 1500000, // int (in bytes),
        maxEntrypointSize: 3000000, // int (in bytes)
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
    }
};