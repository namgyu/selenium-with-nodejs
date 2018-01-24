describe('Hello.js', () => {
    it('says hello', () => {
      const hello = new Hello('Babel');

      expect(hello.say()).be.equal('Hello, Babel!');
    });
});