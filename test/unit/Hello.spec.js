import Hello from '../../src/js/Hello';

describe('Hello', () => {
    it('says hello world', () => {
      const hello = new Hello('World');

      expect(hello.say()).be.equal('Hello, World!');
    });
});
