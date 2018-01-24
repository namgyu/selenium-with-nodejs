const browserName = 'chrome';   // choose 'chrome' or 'firefox'
const { Builder, By, Key, until } = require('selenium-webdriver');
const driver = new Builder().forBrowser(browserName)
                            .usingServer('http://192.168.0.6:4444/wd/hub')
                            .build();

try {
    driver.get('http://www.google.com');

    driver.getTitle().then(title => {
        console.log(`[Prev] Page title is: ${title}`);
    });

    // driver.findElement(By.name('q'));.sendKeys('webdriver', Key.RETURN); 와 동일
    const element = driver.findElement(By.name('q'));
    element.sendKeys('webdriver');

    let sumbitForm;

    if (browserName === 'chrome') {
        sumbitForm = driver.findElement(By.name('f'));
        sumbitForm.submit();
    } else if (browserName === 'firefox') {
        sumbitForm = driver.findElement(By.name('btnK'));
        sumbitForm.click();
    }

    // 10초 대기
    driver.wait(until.titleMatches(/^webdriver/g), 10000);
} finally {
    driver.getTitle().then(title => {
        console.log(`[Next] Page title is: ${title}`);
    });

    driver.quit();
}
