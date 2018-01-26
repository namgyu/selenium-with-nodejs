import 'chromedriver';
import webdriver from 'selenium-webdriver';
import REMOTE_INFO from '../constants/remoteInfo';

webdriver.promise.USE_PROMISE_MANAGER = false;

export default class DriverBuilder {
    constructor(props) {
        let builder;

        if (props.remote) {
            builder = new webdriver.Builder().forBrowser(props.browser)
                                             .usingServer(REMOTE_INFO.HUB);
        } else {
            builder = new webdriver.Builder().forBrowser(props.browser)
        }

        this.driver = builder.build();
    }

    async debugger(text) {
        console.log(`::::::${text}`);
    }

    async quit() {
        this.driver.quit();
    }
}
