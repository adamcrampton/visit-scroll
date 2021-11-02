const { By, Builder } = require('selenium-webdriver');
require('chromedriver');

// Set up our parameters.
const endpoint = 'https://convo.ink';
const elementId = 'platform';

// Test logic.
async function launch() {
    let driver = await new Builder().forBrowser('chrome').build();
    // Fetch page.
    await driver.get(endpoint);

    // Ensure we can locate target element, then scroll.
    driver.wait(() => {
        return driver.findElement(By.id(elementId))
    }, 5000);

    driver.executeScript(
        'arguments[0].scrollIntoView({block:"end", behaviour:"smooth"});', 
        driver.findElement(By.id(elementId))
    )
    .then(() => {
        // Wait 5 seconds, then close off browser connection.
        setTimeout(() => {
            driver.quit();
        }, 5000);
    });
}

launch();