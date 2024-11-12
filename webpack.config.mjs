import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let common_config = {
    node: {
        __dirname: true,
    },
    mode: process.env.ENV || 'development',
    resolve: {
        extensions: [".ts", ".tsx", '.js', '.jsx', '.css', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
        ]
    },
}

let obj = [
    Object.assign({}, common_config, {
        node: {
            __dirname: true,
        },
        target: 'electron-main',
        entry: {
            renderrer: './src/main/main.ts',
        },
        output: {
            filename: '[name]-bundle.js',
            path: path.resolve(__dirname, 'src/main/dist'),
        },
    }),
    Object.assign({}, common_config, {
        node: {
            __dirname: true,
        },
        target: 'electron-renderer',
        entry: {
            ui: './src/renderer/index.tsx',
        },
        output: {
            filename: '[name]-bundle.js',
            path: path.resolve(__dirname, 'src/renderer/dist'),
        },
        devServer: {
            hot: true,  // hot reloading
            port: 3000,  // port on which server will run
            open: true // open browser automatically on start
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './public/index.html' }),
            new MiniCssExtractPlugin(),
        ],
    })
]
export default obj