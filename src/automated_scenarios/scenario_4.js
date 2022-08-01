// Scenario four automated (Check cart item addition)

const {By, Builder} = require("selenium-webdriver");
require("chromedriver");

var hostname = "https://www.alza.cz/";

async function scenario_four() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get(hostname)
        .catch(e => console.log(e));

    // Deny GDPR consent (it takes up most of the screen)
    await driver.findElement(By.className("js-cookies-info-reject")).click()
        .catch(error => console.error("ERROR - GDPR consent error.\n" + error));

    // Search for a product and open its page
    await driver.findElement(By.xpath("//input[@id='edtSearch']")).sendKeys("RTX 3070 Ti");
    await driver.findElement(By.xpath("//div[@id='btnSearch']"))
        .click()
        .then(response => console.log("SUCCESS - Search for product successful."))
        .catch(error => console.error("ERROR - Search for product not successful.\n" + error));
    await driver.findElement(By.xpath("//a[@data-impression-position='1']"))
        .click()
        .then(response => console.log("SUCCESS - Product page opened."))
        .catch(error => console.error("ERROR - An error with opening the product page.\n" + error));

    // Save price and add the product to the cart
    let price = "";
    await driver.findElement(By.xpath("//span[@class='price-box__price']")).getText()
        .then(priceElement => {
            price = priceElement.replace(/[^0-9]/g, '');
            console.log("Price of the product: " + price);
        });
    await driver.findElement(By.xpath("//a[@class='btnx new green buy']")).click()
        .then(response => console.log("SUCCESS - Product added to the cart."))
        .catch(error => console.error("ERROR - Product not added to the cart.\n" + error));
    await driver.sleep(2000);

    // Open the cart
    await driver.findElement(By.xpath("//a[@id='basketLink']")).click()
        .then(response => console.log("SUCCESS - Cart opened."))
        .catch(error => console.error("ERROR - Cart not opened.\n" + error));

    // Verify the price of the cart with the price of the added product
    let cartPrice = "";
    await driver.findElement(By.xpath("//span[@class='last price']")).getText()
        .then(cartPriceElement => {
            cartPrice = cartPriceElement.replace(/[^0-9]/g, '');
            console.log("Price of the whole cart: " + cartPrice);
        });
    console.assert(price === cartPrice, "ERROR - The cart price is not equal to the product price.");
    console.log("SUCCESS - Price of the cart is correct.");

    await driver.quit();
}

scenario_four();