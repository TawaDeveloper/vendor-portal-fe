const { resolve } = require('path');
const path = require('path');
const CracoLessPlugin = require('craco-less');
const CracoCSSModules = require('craco-css-modules');

const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ENV = process.argv[2];
const { getLoaders, loaderByName } = require('@craco/craco');
const { exit } = require('process');

module.exports = {
  style: {},
  eslint: {
    enable: false,
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
      [
        '@tawa/babel-plugin-import',
        {
          libraryName: '@tawa',
          libraryDirectory: 'es',
          style: true,
        },
        'tawa',
      ],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    { plugin: CracoCSSModules },
  ],
  webpack: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    plugins: [
      new WebpackBar({
        profile: true,
      }),
    ].concat(!!process.env.IS_ANALYZE ? new BundleAnalyzerPlugin() : []),
    configure: (config) => {
      const { hasFoundAny, matches } = getLoaders(
        config,
        loaderByName('file-loader'),
      );
      if (hasFoundAny) {
        matches.forEach((x) => {
          x.loader.options.name = 'assets/[name].[hash:8].[ext]';
        });
      }
      if (!!process.env.IS_BUILD) {
        config.optimization = {
          ...config.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                name: 'chunk-vendors',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial',
              },
              commons: {
                name: 'chunk-commons',
                minChunks: 3,
                priority: 5,
                reuseExistingChunk: true,
              },
              lib: {
                test(module) {
                  return (
                    module.size() > 160000 &&
                    /node_modules[/\\]/.test(module.nameForCondition() || '')
                  );
                },
                name(module) {
                  const packageNameArr = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
                  );
                  const packageName = packageNameArr ? packageNameArr[1] : '';
                  // 去除依赖路径中的@字符
                  return `chunk-lib.${packageName.replace('@', '')}`;
                },
                priority: 15,
                minChunks: 1,
                reuseExistingChunk: true,
              },
            },
          },
        };
      } else if (process.env.NODE_ENV === 'development') {
        config.devtool = 'eval-cheap-module-source-map';
        config.optimization = {
          ...config.optimization,
          minimize: false,
          sideEffects: true,
        };
      }

      Object.assign(config.output, {
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name][chunkhash].js',
        library: `mall-platform-[name]`,
        libraryTarget: 'umd',
        // publicPath: ENV_CONFIG[ENV].publicPath,
        chunkLoadingGlobal: `webpackJsonp_mall-platform`, // webpack5
        publicPath: '/',
      });

      config.plugins.map((plugin) => {
        if (plugin.constructor.name === 'MiniCssExtractPlugin') {
          Object.assign(plugin.options, {
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[name][chunkhash].css',
            ignoreOrder: true,
          });
        } else if (plugin.constructor.name === 'DefinePlugin') {
          Object.assign(plugin.definitions['process.env'], {
            APP_ENV: JSON.stringify(ENV),
          });
        }
        return plugin;
      });

      config.experiments = {
        topLevelAwait: true,
      };
      return config;
    },
  },
  devServer: {
    host: 'localhost',
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3002,
    client: {
      progress: true,
      reconnect: true,
    },
    historyApiFallback: true,
    proxy: {
      context: [
        '/backoffice',
        '/order/bo',
        '/account/bo',
        '/promotion',
        '/product',
        '/store',
        '/search/bo',
        '/order/app',
        '/warehouse/bo',
      ],
      target: 'https://api.dev.99ranch.online',
      secure: false,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
