// Scenario three automated (Check Alza's logo redirect to index)

const {By, Builder} = require("selenium-webdriver");
require("chromedriver");

var hostname = "https://www.alza.cz/";

async function scenario_three() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get(hostname)
        .catch(e => console.log(e));

    let originalUrl = await driver.getCurrentUrl();
    console.info("#1 - " + originalUrl);

    // Navigate to some other content on the site
    await driver.findElement(By.xpath("//a[@href='/pocitace-a-notebooky']"))
        .click()
        .then(response => console.log("SUCCESS - Navigation to other site successful."))
        .catch(error => console.error("ERROR - Element could not be found.\n" + error));

    // Check current URL against the original URL
    let editedUrl = await driver.getCurrentUrl();
    console.info("#2 - " + editedUrl);
    console.assert(originalUrl !== editedUrl, "ERROR - URLs are the same.");

    // Click on Alza logo to get to the index page
    await driver.findElement(By.xpath("//a[@title='Alza']"))
        .click()
        .then(response => console.log("SUCCESS - Navigation to index successful."))
        .catch(error => console.error("ERROR - Element could not be found.\n" + error));

    // Check current URL against the original URL
    let indexUrl = await driver.getCurrentUrl();
    console.info("#3 - " + indexUrl);
    console.assert(originalUrl === indexUrl, "ERROR - URLs are not the same.");
    console.log("SUCCESS - Navigation to index page by clicking on logo.");

    await driver.quit();
}

scenario_three();