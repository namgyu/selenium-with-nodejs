const { Builder, By, Key, until } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome')
                            .build();
 
driver.get('http://www.google.com')
    .then(_ => 
        driver.getTitle().then(title => {
            console.log(`::::::[Prev] Page title is: ${title}`);
        })
    )
    .then(_ =>
        // driver.findElement(By.name('q'));.sendKeys('webdriver', Key.RETURN); 와 동일
        driver.findElement(By.name('q')).sendKeys('webdriver')
    )
    .then(_ =>
        driver.findElement(By.name('f')).submit()
    )
    .then(_ =>
        // 10초 대기
        driver.wait(until.titleMatches(/^webdriver/g), 10000)
    )
    .then(_ =>
        driver.getTitle().then(title => {
            console.log(`::::::[Next] Page title is: ${title}`);
        })
    )
    .then(_ =>
        driver.quit()
    );
