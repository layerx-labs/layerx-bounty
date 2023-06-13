async function approveMarketplace(
  marketplaceAddress: string,
  propertyAddress: string
) {
  // Connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_RPC);
  const wallet = new ethers.Wallet(process.env.HERO_PRIVATE_KEY, provider);

  // Get the contract instance
  const abi = ["function setApprovalForAll(address operator, bool approved)"];
  const tokenContract = new ethers.Contract(propertyAddress, abi, wallet);

  // Approve allowance
  const approveTx = await tokenContract.setApprovalForAll(
    marketplaceAddress,
    true
  );

  // Wait for the transaction to be mined
  await approveTx.wait();

  console.log(`marketplace can now transfer erc1155 tokens`);
}

// Example usage
const marketplaceAddress = process.env.MARKETPLACE_ADDRESS!; // Replace with the spender contract address
const propertyAddress = process.env.PROPERTY_ADDRESS!;

approveMarketplace(marketplaceAddress, propertyAddress)
  .then(() => console.log("Approval complete"))
  .catch((error) => console.error("Error:", error));
