import sum from '../../src/js/sum';

describe("sum", () => {
    it("2 + 2 = 5", () => {
        expect(sum(2, 2)).be.equal(5);
    });
});
