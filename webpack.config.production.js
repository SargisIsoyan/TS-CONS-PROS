const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./dist",
    resolve: {
        alias: {
            components: path.resolve(__dirname, "dist/components"),
            containers: path.resolve(__dirname, "dist/containers"),
            services: path.resolve(__dirname, "dist/services"),
            helpers: path.resolve(__dirname, "dist/helpers"),
            modules: path.resolve(__dirname, "dist/modules"),
            assets: path.resolve(__dirname, "./assets")
        },
        extensions: [".js", ".jsx", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                loaders: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: `js/[name]_[chunkhash].js`,
        chunkFilename: "js/[name]-chunk_[chunkhash].js",
        path: __dirname + "/content",
        publicPath: "/"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            template: "index.ejs",
            title: "Live Casino",
            hash: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name: "node-modules",
            minChunks(module) {
                const context = module.context;
                return context && context.indexOf("node_modules") >= 0;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            async: "used-twice",
            minChunks(module, count) {
                return count >= 2;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            sourcemap: true,
            beautify: false,
            dead_code: true
        }),
        new BundleAnalyzerPlugin()
    ]
};
