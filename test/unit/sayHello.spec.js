import sayHello from '../../src/js/sayHello';

describe('sayHello', function() {
    it('says hello', function() {
        /** 
         *  chai
         */
        expect(sayHello()).be.equal('Helo');

        /** 
         *  power-assert
         */
        // assert(sayHello() === 'Helo');
    });
});