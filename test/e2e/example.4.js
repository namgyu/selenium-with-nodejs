import DriverBuilder from '../common/DriverBuilder'
import {
    By,
    Key,
    until
} from 'selenium-webdriver';

describe('Selenium Test', () => {
    let driverBuilder
    let driver

    beforeEach(async () => {
        driverBuilder = await new DriverBuilder({
            browser: 'chrome',
            remote: true        // remote 사용 여부
        });
        
        driver = driverBuilder.driver;
    });

    afterEach(async () => {
        await driverBuilder.quit();
    });

    it('Google 검색', async () => {
        await driver.get('http://www.google.com');

        await driverBuilder.debugger(`[Prev] Page title is: ${await driver.getTitle()}`);

        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);

        await driver.wait(until.titleIs('webdriver - Google 검색'), 10000);
        
        await driverBuilder.debugger(`[Next] Page title is: ${await driver.getTitle()}`);
    });
});
