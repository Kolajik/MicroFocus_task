// Scenario one automated (GDPR consent scenario)

const {By, Builder} = require("selenium-webdriver");
require("chromedriver");

var hostname = "https://www.alza.cz/";

async function scenario_one() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get(hostname)
        .catch(e => console.error(e));

    // Find GDPR consent element and click on rejection button
    await driver.findElement(By.className("js-cookies-info-reject"))
        .click()
        .then(response => console.log("SUCCESS - The element exists on a page and is clickable."))
        .catch(error => console.error("ERROR - Element not found.\n" + error));

    // Try to find the element again. The element should not exist anymore.
    await driver.findElement(By.className("cookies-info__container"))
        .then(response => console.error("ERROR - The element exists on a page."))
        .catch(error => console.log("SUCCESS - GDPR consent is not available anymore on the site."));

    await driver.quit();
}

scenario_one();