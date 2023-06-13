import { ethers } from "hardhat";

async function main() {
  const multiSigAddress: string = process.env.ADDRESS!;
  const usdcAddress: string = process.env.USDC_ADDRESS!;
  const amountOfShares: number = 5;
  const baseURI: string = "";
  const propertyAddress: string = process.env.PROPERTY_ADDRESS!;

  const PropertyMarketplace = await ethers.getContractFactory(
    "PropertyMarketplace"
  );
  const propertyMarketplace = await PropertyMarketplace.deploy(usdcAddress);

  await propertyMarketplace.deployed();

  console.log(`marketplace deployed at ${propertyMarketplace.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
