import { ethers } from "hardhat";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.SEPOLIA_RPC
  );
  const owner = new ethers.Wallet(process.env.MM_PRIVATE_KEY!, provider);
  const contractAddress: string | undefined =
    "0x8314877687621f99883E4065E35CF65D39A89303";

  const property = await ethers.getContractAt(
    "Property",
    contractAddress,
    owner
  );

  const updateURIEvent = property.filters.UpdateURI();

  //property.on(updateURIEvent, (receiver: string, share: number) => {});
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
