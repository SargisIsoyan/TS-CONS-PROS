const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const config = {
    devServer: {
        historyApiFallback: true,
        contentBase: "./",
        host: "0.0.0.0",
        port: 2018,
        hot: true
    },
    devtool: "source-map",
    entry: "./src/",
    resolve: {
        alias: {
            components: path.resolve(__dirname, "src/components"),
            containers: path.resolve(__dirname, "src/containers"),
            services: path.resolve(__dirname, "src/services"),
            helpers: path.resolve(__dirname, "src/helpers"),
            modules: path.resolve(__dirname, "src/modules"),
            assets: path.resolve(__dirname, "./assets")
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "ts-loader"
            },
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                loader: "url-loader?limit=5120&name=./images/[hash].[ext]"
            },
            {
                test: /\.(mp3)$/,
                loader: "file-loader"
            },
            {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: "file-loader"
            }
        ]
    },
    output: {
        filename: `js/[name]_[hash].js`,
        chunkFilename: "js/[name]-chunk_[chunkhash].js",
        path: path.resolve("./dist"),
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.ejs",
            title: "Pros & Cons",
            hash: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};

module.exports = config;
