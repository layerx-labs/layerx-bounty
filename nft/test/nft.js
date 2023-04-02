const nft = artifacts.require("nft");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("nft", function (/* accounts */) {
  it("should assert true", async function () {
    await nft.deployed();
    return assert.isTrue(true);
  });
});
