describe('sayHello.js', function() {
    it('says hello', function() {
        expect(sayHello()).be.equal('Hello');
        expect(sayHello()).not.equal('HiHi');
    });
});