const execSync = require('child_process').execSync;
const inquirer = require('inquirer');
const choiceSep = new inquirer.Separator();
const question = {
    type: 'list',
    name: 'target',
    message: '실행할 작업을 선택하세요.',
    default: 'start:hub',
    choices: [
        { name: '🛫  selenium hub 실행', value: 'start:hub', short: '\nHub 시작' },
        { name: '🛫  selenium node 실행', value: 'start:node', short: '\nNode 시작' },
        choiceSep,
        { name: '🔬  unit 테스트 (Mocha)', value: 'test:unit-mocha', short: '\nUnit 테스트 (Mocha) 시작' },
        { name: '🔬  unit 테스트 (Mocha + Karma)', value: 'test:unit-karma', short: '\nUnit 테스트 (Mocha + Karma) 시작' },
        { name: '🚀  unit 테스트 (Mocha + Karma) (Remote)', value: 'test:unit-karma-remote', short: '\nUnit 테스트 (Mocha + Karma)(Remote) 시작' },
        choiceSep,
        { name: '💻  e2e 테스트', value: 'test:e2e', short: '\nE2E 테스트 시작' },
        { name: '🚀  e2e 테스트 (Remote)', value: 'test:e2e-remote', short: '\nE2E 테스트 (Remote) 시작' },
        { name: '💻  e2e 테스트 (Mocha)', value: 'test:e2e-mocha', short: '\nE2E 테스트 (Mocha) 시작' },
        { name: '🚀  e2e 테스트 (Mocha) (Remote)', value: 'test:e2e-mocha-remote', short: '\nE2E 테스트 (Mocha)(Remote) 시작' },
        choiceSep,
        { name: '😢  종료', value: 'exit', short: '\n' },
        choiceSep,
    ]
};
const stdioOption = { stdio : [0,1,2], maxBuffer : 1024 * 500 };

process.on('exit', () => console.log('\n안녕히 가세요. 다시 만나요. 👋'));

inquirer
.prompt([question])
.then(({ target }) => {
    if (target === 'exit') {
        process.exit();
    }
    execSync(`npm run ${target}`, stdioOption);
});
