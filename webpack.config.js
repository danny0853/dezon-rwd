const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


var config =  {
                entry: [
                    path.join(__dirname, './src/main.js')
                ],
                module: {
                    rules: [
                        {
                            test: /\.vue$/,
                            loader: 'vue-loader',
                            options: {
                                loaders: {}
                                // other vue-loader options go here
                            }
                        },
                        {
                            test: /\.html$/,
                            use: [{
                                loader: "html-loader",
                                options: {
                                    minimize: false
                                }
                            }]
                        },
                        {
                            test: /\.(png|svg|jpg|gif)$/,
                            use: [
                                'file-loader'
                            ]
                        }
                    ]
                },
                  resolve: {
                    extensions: ['.js', '.vue'],
                    /**
                     * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本，若要使用 standalone 功能則需下列設定
                     */
                    alias: {
                      vue: 'vue/dist/vue.js'
                    }
                  },
               
                plugins: [
                    new CleanWebpackPlugin(['dist']),
                    new HtmlWebPackPlugin({
                        template: "./public/index.html",
                        filename: "./index.html"
                    }),
                    new MiniCssExtractPlugin({
                        filename: "[name].css",
                        chunkFilename: "[id].css"
                    }),
                    new VueLoaderPlugin()
                ]
            };



module.exports = config;