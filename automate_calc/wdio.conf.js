/* eslint-disable */
const argv = require('yargs').argv;

let opera;

let capabilities = [

    {
        maxInstances: 4,
        browserName: 'chrome',
        'chromeOptions': {
            'args': ['window-size=2880,1800'],
        },
        metadata: {
            device: 'MacBook Pro',
            platform: {
                name: 'OSX',
                version: '10.14',
            },
        },
    },

    {
        maxInstances: 1,
        browserName: 'firefox',
        metadata: {
            device: 'MacBook Pro',
            platform: {
                name: 'OSX',
                version: '10.14',
            },
        },
    },

    {
        maxInstances: 1,
        browserName: 'safari',
        metadata: {
            device: 'MacBook Pro',
            platform: {
                name: 'OSX',
                version: '10.14',
            },
        },
    },

    {
        maxInstances: 4,
        browserName: 'chrome-headless',
        'chromeOptions': {
            args: ['--headless', '--disable-gpu', '--window-size=1440,1024'],
            binary: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
        },
        metadata: {
            device: 'MacBook Pro',
            platform: {
                name: 'OSX',
                version: '10.14',
            },
        },
    },

];

const capabilitiesOpera = [

    {
        // maxInstances can get overwritten per capability. So if you have an
        // in-house Selenium grid with only 5 firefox instances available you can
        // make sure that not more than 5 instances gets started at a time.
        maxInstances: 1,
        browserName: 'opera',

        // specs: [
        //     'test/ffOnly/*'
        // ]

        // exclude: [
        //     'test/spec/alert.js'
        // ]

        'chromeOptions': {
            args: [],
            extensions: [],
            binary: '/Applications/Opera.app/Contents/MacOS/Opera',
        },
        metadata: {
            device: 'MacBook Pro',
            platform: {
                name: 'OSX',
                version: '10.14',
            },
        },
    },

];

if (argv.caps) {
    // Dynamically set the capabilities
    const browsers = argv.caps.split(',');

    if (browsers.includes('opera')) {
        opera = 'true';
        capabilities = capabilitiesOpera;
    } else {
        capabilities = capabilities.filter(capability => browsers.indexOf(capability.browserName) > -1);
    }
}

const wdioConfig = {

    // =====================
    // Server Configurations
    // =====================
    // Host address of the running Selenium server. This information is usually obsolete as
    // WebdriverIO automatically connects to localhost. Also, if you are using one of the
    // supported cloud services like Sauce Labs, Browserstack, or Testing Bot you don't
    // need to define host and port information because WebdriverIO can figure that out
    // according to your user and key information. However, if you are using a private Selenium
    // backend you should define the host address, port, and path here.

    // host: '0.0.0.0',
    // port: 4444,
    path: opera === 'true' ? '/' : '/wd/hub',

    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack, and Testing Bot (other cloud providers
    // should work too though). These services define specific user and key (or access key)
    // values you need to put in here in order to connect to these services.

    // user: 'webdriverio',
    // key:  'xxxxxxxxxxxxxxxx-xxxxxx-xxxxx-xxxxxxxxx',

    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the
    // directory from which `wdio` was called. Notice that, if you are calling
    // `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script)
    // then the current working directory is where your package.json resides, so
    // `wdio` will be called from there.
    specs: [
        './src/features/**/*.feature',
    ],

    // Patterns to exclude
    exclude: [
        // 'path/to/excluded/files'
    ],

    // Define specific suites
    suites: {

        /* ******* */
        /* Calc */
        /* ******* */
        Calc: [
            './src/features/Calc/**/*.feature',
        ],



        /* ******** */
        /* App****** */
        /* ******** */
        // Calc
        tall: [
            './src/features/newcal/*.feature',

        ],



    },

    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities
    // at the same time. Depending on the number of capabilities, WebdriverIO
    // launches several test sessions. Within your capabilities you can
    // overwrite the spec and exclude options in order to group specific specs
    // to a specific capability.

    // First, you can define how many instances should be started at the same
    // time. Let's say you have 3 different capabilities (Chrome, Firefox, and
    // Safari) and you have set maxInstances to 1; wdio will spawn 3 processes.
    // Therefore, if you have 10 spec files and you set maxInstances to 10, all
    // spec files will get tested at the same time and 30 processes will get
    // spawned. The property handles how many capabilities from the same test
    // should run tests.
    maxInstances: (argv.runners) ? argv.runners : 4,

    // If you have trouble getting all important capabilities together, check
    // out the Sauce Labs platform configurator - a great tool to configure your
    // capabilities: https://docs.saucelabs.com/reference/platforms-configurator
    capabilities,

    // When enabled opens a debug port for node-inspector and pauses execution
    // on `debugger` statements. The node-inspector can be attached with:
    // `node-inspector --debug-port 5859 --no-preload`
    // When debugging it is also recommended to change the timeout interval of
    // test runner (eg. jasmineNodeOpts.defaultTimeoutInterval) to a very high
    // value and setting maxInstances to 1.
    debug: false,

    // Additional list node arguments to use when starting child processes
    execArgv: null,

    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here

    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async
    // way e.g. using promises you can set the sync option to false.
    sync: true,

    // Level of logging verbosity: silent | verbose | command | data | result |
    // error
    logLevel: 'error',

    // Enables colors for log output
    coloredLogs: true,

    // Warns when a deprecated command is used
    deprecationWarnings: false,

    // Saves a screenshot to a given path if a command fails
    screenshotPath: './logs/error-shots/',

    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'https://calories-calc.herokuapp.com',

    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests)
    bail: 0,

    // Default timeout for all waitFor* commands
    waitforTimeout: 10000,

    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,

    // Default request retries count
    connectionRetryCount: 3,



    // Test runner services
    // Services take over a specific job you don't want to take care of. They
    // enhance your test setup with almost no effort. Unlike plugins, they don't
    // add new commands. Instead, they hook themselves up into the test process.
    services: opera === 'true' ? '' : ['selenium-standalone'],
    seleniumLogs: opera === 'true' ? '' : './logs/logs-selenium',



    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html

    // Make sure you have the wdio adapter package for the specific framework
    // installed before running any tests.
    framework: 'cucumber',

    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: ['dot', 'spec', 'allure', 'junit', 'json', 'multiple-cucumber-html'],

    // Some reporters require additional information which should get defined here
    reporterOptions: {

        // If you are using the "xunit" reporter you should define the directory where
        // WebdriverIO should save all unit reports
        allure: {
            outputDir: 'logs/allure-results',
        },

        junit: {
            outputDir: 'logs/junit-reports',
        },

        json: {
            outputDir: 'logs/json-reports',
        },

        htmlReporter: {
            jsonFolder: 'logs/cuke-json',
            reportFolder: 'logs/cuke-reports',
            openReportInBrowser: (!argv.jenkins),
            saveCollectedJSON: true,
            disableLog: false,
            pageTitle: 'HTML Reporter',
            reportName: 'Cucumber Features HTML Report',
            pageFooter: '<div><p align="center">Powered by <a target="_blank" href="http://webdriver.io/">WebDriverIO</a></p></div>',
            displayDuration: true,
            // customStyle: '',
            // overrideStyle: '',
            metadata: {
                device: 'MacBook Pro',
                platform: {
                    name: 'OSX',
                    version: '10.14',
                },
            },
            // customData: {},
        },

    },

    // If you are using Cucumber you need to specify the location of your step definitions.
    Stepdefinitions: [
        './src/steps',

    ]
    // See also: https://github.com/webdriverio/wdio-cucumber-framework#cucumberopts-options
    cucumberOpts: {

        // <boolean> show full backtrace for errors
        backtrace: true,

        // <string[]> filetype:compiler used for processing required features
        compiler: [
            'js:babel-register',
        ],

        // <boolean< Treat ambiguous definitions as errors
        failAmbiguousDefinitions: true,

        // <boolean> invoke formatters without executing steps
        dryRun: false,

        // <boolean> abort the run on first failure
        failFast: false,

        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],

        // <boolean> disable colors in formatter output
        colors: true,

        // <boolean> Enable this config to treat undefined definitions as
        // warnings
        ignoreUndefinedDefinitions: false,

        // <string[]> ("extension:module") require files with the given
        // EXTENSION after requiring MODULE (repeatable)
        name: [],

        // <boolean> hide step definition snippets for pending steps
        snippets: true,

        // <boolean> hide source uris
        source: true,

        // <string[]> (name) specify the profile to use
        profile: [],

        // <string[]> (file/dir) require files before executing features
        require: [
            './src/steps/**/*.js',
            // Or search a (sub)folder for JS files with a wildcard
            // works since version 1.1 of the wdio-cucumber-framework
            // './src/**/*.js',
        ],

        // <string> specify a custom snippet syntax
        snippetSyntax: undefined,

        // <boolean> fail if there are any undefined or pending steps
        strict: false,

        // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        tags: (argv.tags) ? argv.tags : [],

        // <string> (expression) only execute the features or scenarios with
        // tags matching the expression, see
        // https://docs.cucumber.io/tag-expressions/
        tagExpression: (argv.tags) ? argv.tags : 'not @skip',

        // <boolean> add cucumber tags to feature or scenario name
        tagsInTitle: false,

        // <number> timeout for step definitions
        timeout: 30000,

    },



    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {

    },

    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: function (config, capabilities, specs) {

    },

    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
        /**
         * Setup the Chai assertion framework
         */
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();

        /**
         * ES6 Support
         */
        require('babel-register');

        /**
         * Maximize browser window
         */
        const currentBrowser = browser.desiredCapabilities.browserName;
        console.log('Current browser is \'' + currentBrowser + '\' with session \'' + browser.sessionId + '\'');

        if (currentBrowser === 'safari') {
            browser.windowHandleSize({
                width: 1440,
                height: 968,
            });
        }
    },

    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    beforeSuite: function (suite) {

    },

    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    beforeHook: function () {

    },

    /**
     * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
     * afterEach in Mocha)
     */
    afterHook: function () {

    },

    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts
     * @param {Object} test test details
     */
    beforeTest: function (test) {

    },

    /**
     * Runs before a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    beforeCommand: function (commandName, args) {

    },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    afterCommand: function (commandName, args, result, error) {

    },

    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends
     * @param {Object} test test details
     */
    afterTest: function (test) {

    },

    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    afterSuite: function (suite) {

    },

    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after: function (result, capabilities, specs) {

    },

    /**
     * Gets executed right after terminating the webdriver session
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    afterSession: function (config, capabilities, specs) {

    },

    /**
     * Gets executed after all workers got shut down and the process is about to exit
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onComplete: function (exitCode, config, capabilities) {
    },

    /* Cucumber specific hooks */

    beforeFeature: function (feature) {

    },

    beforeScenario: function (scenario) {

    },

    beforeStep: function (step) {

    },

    afterStep: function (stepResult) {

    },

    afterScenario: function (scenario) {

    },

    afterFeature: function (feature) {

    },

};

exports.config = wdioConfig;
