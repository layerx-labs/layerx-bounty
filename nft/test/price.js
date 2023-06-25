const price = artifacts.require("price");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("price", function (/* accounts */) {
  it("should assert true", async function () {
    await price.deployed();
    return assert.isTrue(true);
  });
});
