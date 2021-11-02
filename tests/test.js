const { By, Key, Builder, WebDriver } = require('selenium-webdriver');
require('chromedriver');

async function launch() {
    // Set up our parameters.
    const endpoint = 'https://convo.ink';
    const elementId = 'platform';
    const attempts = 1;
    
    // Run test for specified attempt count.
    for (let index = 1; index <= attempts; index++) {
        const driver = await new Builder().forBrowser('chrome').build();
        // Fetch page.
        await driver.get(endpoint);

        // Ensure we can locate target element, then scroll.
        driver.wait(() => {
            return driver.findElement(By.id(elementId))
        }, 5000);

        driver.executeScript('arguments[0].scrollIntoView(true);', driver.findElement(By.id(elementId)));

        // Wait 5 seconds, then close off browser connection.
        setTimeout(() => {
            driver.quit();
        }, 5000);
    }
}

launch();