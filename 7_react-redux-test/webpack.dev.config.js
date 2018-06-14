
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
    mode: "development", //"production",
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
    ],
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
            { test: /\.html$/, use: "raw-loader" },
            //{ test: /\.json$/, use: "json-loader" },
            { test: /\.(gif|png|jpe?g)$/i, use: ["file-loader?limit=20000&name=[name].[ext]&publicPath=/&outputPath=images/"] },
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
        stats: {
            chunks: false, // Makes the build much quieter
            colors: true,
            timings: true
        },
        contentBase: paths.outFolder, //contents basepath to be loaded in server
        port: 6606, //port to run dev server
        compress: false, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        open: true // auto open browser
    }
};