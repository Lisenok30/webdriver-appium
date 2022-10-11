require('dotenv').config()
const {config} = require('./wdio.shared.conf');
    // =========================
    // BrowserStack Credentials
    // =========================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
    
    // ============
    // Specs
    // ============

config.specs = [
    
    './test/specs/android/add-note.screen*.js'
];
  
    // ============
    // Capabilities
    // ============

config.capabilities =  [

        {
        platformName: "Android",
        "appium:platformVersion": "13.0",
        "appium:deviceName": "Google Pixel 6 Pro",
        "appium:automationName": "UIAutomator2",
        "appium:app": "bs://2318149291f16e17ac5b0c5596303556a1896a51",
        "appium:autoGrantPermissions": true
    }

]

    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

//npx wdio config/wdio.android.browserstack.conf.js
exports.config = config;