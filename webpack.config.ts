import * as path from 'path';
import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import DotEnv from 'dotenv-webpack'

const webpackConfig = (): Configuration => ({
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            components: path.resolve(__dirname, "./src/components/"),
            utils: path.resolve(__dirname, "./src/utils/")
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['file-loader?name=assets/[name].[ext]', 'image-webpack-loader?bypassOnDebug'],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                },
                exclude: '/dist/'
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        host: 'localhost',
        port: 3000,
        hot: true,
        overlay: true,
        historyApiFallback: true,
        stats: {
            assets: false,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: false,
            version: false,
            warnings: true,
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
        new DotEnv({
            path: './.env.development',
            safe: true
        })
    ]
});

export default webpackConfig;