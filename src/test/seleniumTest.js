require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();

try {
    driver.get('http://www.google.com');

    driver.getTitle().then(title => {
        console.log(`[Prev] Page title is: ${title}`);
    });

    // driver.findElement(By.name('q'));.sendKeys('webdriver', Key.RETURN); 와 동일
    const element = driver.findElement(By.name('q'));
    element.sendKeys('webdriver');
    element.submit();

    // 10초 대기
    driver.wait(until.titleMatches(/^asdf/g), 10000);
} finally {
    driver.getTitle().then(title => {
        console.log(`[Next] Page title is: ${title}`);
    });

    driver.quit();
}
