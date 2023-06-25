const Flower = artifacts.require("Flower");
const priceAddress = "0x97095FED27CEdC1BF441c6899EBe0d64500D5739"

module.exports = function (deployer) {
    deployer.deploy(Flower, 60, priceAddress);
};