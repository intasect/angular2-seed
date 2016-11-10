/**
 * @author: @AngularClass
 */

require('ts-node/register');
var helpers = require('./helpers');

const SSReporter = require('protractor-jasmine2-screenshot-reporter');

const screenshotReporter = new SSReporter({
    dest: 'e2e-test/screenshots',
    pathBuilder: function (currentSpec, suites) {
        var name = currentSpec.fullName;
        return name.replace(/\s+/g, '-').toLowerCase();
    },
    filename: 'index.html',
    reportTitle: 'e2e tests'
});

exports.config = {
  baseUrl: 'http://localhost:3000/',

  // use `npm run e2e`
  specs: [
    helpers.root('src/**/**.e2e.ts'),
    helpers.root('src/**/*.e2e.ts')
  ],
  exclude: [],

  framework: 'jasmine2',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function () {
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: true }));
    // Add screenshot reporter
    jasmine.getEnv().addReporter(screenshotReporter);
    browser.ignoreSynchronization = false;
    browser.driver.manage().window().setSize(414, 736);

  },

  beforeLaunch: function () {
    require('ts-node').register({
      project: '.',
      compilerOptions: {
        module: 'commonjs'
      },
      disableWarnings: true,
      fast: true
    });
  },

  // hook into screenshotReporter's afterLaunch
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      screenshotReporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   */
  useAllAngular2AppRoots: true
};
