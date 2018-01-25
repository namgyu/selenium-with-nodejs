import assert from 'power-assert';
import sum from '../../src/js/sum';

describe("sum", () => {
  it("2 + 2 = 5", () => {
    /** 
     *  chai
     */
    // expect(sum(2, 2)).be.equal(5);

    /** 
     *  power-assert
     */
    assert(sum(2, 2) === 5);
  });
});