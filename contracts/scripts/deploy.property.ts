import { ethers } from "hardhat";

async function main() {
  const multiSigAddress: string = process.env.ADDRESS!;
  const usdcAddress: string = process.env.USDC_ADDRESS!;
  const askingPrice: number = 1;
  const amountOfShares: number = 5;
  const baseURI: string = "";

  const Property = await ethers.getContractFactory("Property");
  const property = await Property.deploy(
    multiSigAddress,
    usdcAddress,
    askingPrice,
    amountOfShares,
    baseURI
  );

  await property.deployed();

  console.log(`property nft deployed at ${property.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
