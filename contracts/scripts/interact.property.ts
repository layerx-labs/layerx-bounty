import { ethers } from "hardhat";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_RPC);
  const owner = new ethers.Wallet(process.env.MM_PRIVATE_KEY!, provider);
  const ownerAddress = await owner.getAddress();
  const contractAddress: string | undefined = process.env.PROPERTY_ADDRESS!;

  const property = await ethers.getContractAt(
    "Property",
    contractAddress,
    owner
  );

  const contractOwner = await property.owner();
  console.log(contractOwner);

  const share0Price = await property.getPriceForShare(0);
  console.log(share0Price);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
