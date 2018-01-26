import sayHello from '../../src/js/sayHello';

describe('sayHello', () => {
    it('says hello', () => {
        expect(sayHello()).be.equal('Helo');
    });
});
