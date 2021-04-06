exports.config = {
    framework: 'custom',
    seleniumAddress: 'http://localhost:4444/wd/hub',
        
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // require feature files
    specs: [
        'features/**/*.feature' // accepts a glob
    ],

    cucumberOpts: {
        // require step definitions
        require: [
        'step_definitions/**/steps.ts' // accepts a glob
        ]
    },

    capabilities: {
        "browserName": "chrome",
        "chromeOptions": {
            args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        }
    }

}