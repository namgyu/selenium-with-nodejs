const { Builder, By, Key, until } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome')
                            .usingServer('http://10.5.220.163:4444/wd/hub')   // remote 사용 시 hub 도메인으로 작성
                            .build();
 
driver.get('http://www.google.com');

driver.getTitle().then(title => {
    console.log(`::::::[Prev] Page title is: ${title}`);
});

// driver.findElement(By.name('q'));.sendKeys('webdriver', Key.RETURN); 와 동일
const element = driver.findElement(By.name('q'));
element.sendKeys('webdriver');

let sumbitForm;

sumbitForm = driver.findElement(By.name('f'));
sumbitForm.submit();

// 10초 대기
driver.wait(until.titleMatches(/^webdriver/g), 10000);

driver.getTitle().then(title => {
    console.log(`::::::[Next] Page title is: ${title}`);
});

driver.quit();
