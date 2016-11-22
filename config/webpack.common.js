/**
 * @author: @AngularClass
 */

const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
// problem with copy-webpack-plugin
const AssetsPlugin = require('assets-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlHeadResource = require('./html-head-resource');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

// const autoprefixer = require('autoprefixer-loader');


/*
 * Webpack Constants
 */
const APP_TITLE = 'Angular2 Sample';

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {
  isProd = options.env === 'production';

  cssFileName = 'stylesheets/[name].css';
  if (isProd) {
    cssFileName = 'stylesheets/[name].[chunkhash].css';
  }

  return {

    /*
     * Cache generated modules and chunks to improve performance for multiple incremental builds.
     * This is enabled by default in watch mode.
     * You can pass false to disable it.
     *
     * See: http://webpack.github.io/docs/configuration.html#cache
     */
    //cache: false,

    /*
     * The entry point for the bundle
     * Our Angular.js app
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
      'polyfills': './src/polyfills.browser.ts',
      'vendor': './src/vendor.browser.ts',
      'main': './src/main.browser.ts'
    },

    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {

      /*
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['.ts', '.js', '.json'],

      // An array of directory names to be resolved to the current directory
      modules: [helpers.root('src'), 'node_modules'],

    },

    /*
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {

      rules: [

        /*
         * Typescript loader support for .ts and Angular 2 async routes via .async.ts
         * Replace templateUrl and stylesUrl with require()
         *
         * See: https://github.com/s-panferov/awesome-typescript-loader
         * See: https://github.com/TheLarkInn/angular2-template-loader
         */
        {
          test: /\.ts$/,
          loaders: [
            '@angularclass/hmr-loader?pretty=' + !isProd + '&prod=' + isProd,
            'awesome-typescript-loader',
            'angular2-template-loader',
            'angular2-router-loader?debug=true'
          ],
          exclude: [/\-(spec|e2e)\.ts$/]
        },

        /*
         * Json loader support for *.json files.
         *
         * See: https://github.com/webpack/json-loader
         */
        {
          test: /\.json$/,
          loader: 'json-loader'
        },

        // {
        //   test: /\.scss$/i,
        //   // loaders: ['style', 'css', 'autoprefixer-loader?browsers=last 2 versions', 'sass']
        //   loaders: ['to-string-loader', extractCSS.extract(['css', 'sass'])]
        // },

        /*
         * to string and css loader support for *.css files
         * Returns file content as string
         *
         */
        {
          test: /\.scss$/,
          loaders: ['to-string-loader', 'style-loader', 'css-loader', 'sass-loader']
        },

        /* Raw loader support for *.html
         * Returns file content as string
         *
         * See: https://github.com/webpack/raw-loader
         */
        {
          test: /\.html$/,
          loader: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        },

        /* File loader for supporting images, for example, in CSS files.
         */
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file'
        },

      ],

    },

    // postcss:[autoprefixer({browsers:['last 2 versions']})],

    // sassLoader: {
    //   includePaths: [path.resolve(__dirname, './some-folder')]
    // },

    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
      /**
       * Plugin: extract-text-webpack-plugin
       * Description: Extract text from bundle into a file.
       *
       * See: https://github.com/webpack/extract-text-webpack-plugin
       */
      new ExtractTextPlugin(cssFileName),

      /**
       * Plugin: assets-webpack-plugin
       * Description: Webpack plugin that emits a json file with assets paths
       *
       * See: https://github.com/kossnocorp/assets-webpack-plugin
       
      new AssetsPlugin({
        path: helpers.root('dist'),
        filename: 'webpack-assets.json',
        prettyPrint: true
      }),
*/
      /*
       * Plugin: ForkCheckerPlugin
       * Description: Do type checking in a separate process, so webpack don't need to wait.
       *
       * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
       */
      new ForkCheckerPlugin(),
      /*
       * Plugin: CommonsChunkPlugin
       * Description: Shares common code between the pages.
       * It identifies common modules and put them into a commons chunk.
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
       * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
       */
      new CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
      }),

      /**
       * Plugin: ContextReplacementPlugin
       * Description: Provides context to Angular's use of System.import
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
       * See: https://github.com/angular/angular/issues/11580
       */
      new ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('src') // location of your src
      ),

      /*
       * Plugin: CopyWebpackPlugin
       * Description: Copy files and directories in webpack.
       *
       * Copies project static assets.
       *
       * See: https://www.npmjs.com/package/copy-webpack-plugin
       */
      new CopyWebpackPlugin([{
        from: 'src/shared/assets',
        to: 'shared/assets',
      }]),


      /*
       * Plugin: HtmlWebpackPlugin
       * Description: Simplifies creation of HTML files to serve your webpack bundles.
       * This is especially useful for webpack bundles that include a hash in the filename
       * which changes every compilation.
       *
       * See: https://github.com/ampedandwired/html-webpack-plugin
       */
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: APP_TITLE,
        chunksSortMode: 'dependency',
        inject: 'head'
      }),

      /**
       * Plugin: html-webpack-externals-plugin
       * Description: This plugin supplements the fantastic html-webpack-plugin by providing
       * a very basic interface for loading your external dependencies.
       *
       * See: https://github.com/mmiller42/html-webpack-externals-plugin
       */
      new HtmlWebpackExternalsPlugin(
        HtmlHeadResource.resources,
        {
          // Resolve local modules relative to this directory
          basedir: __dirname
        }
      ),

      /*
       * Plugin: ScriptExtHtmlWebpackPlugin
       * Description: Enhances html-webpack-plugin functionality
       * with different deployment options for your scripts including:
       *
       * See: https://github.com/numical/script-ext-html-webpack-plugin
       */
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      })
    ],

    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

  };
}
