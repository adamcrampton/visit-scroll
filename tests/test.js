const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');

async function launch() {
    // Load webdriver and specify browser endpoint.
    let driver = await new Builder().forBrowser("chrome").build();
    const endpoint = 'https://convo.ink';

    // Fetch page.
    await driver.get(endpoint);

    // Close off browser connection.
    await driver.quit();
}

launch();