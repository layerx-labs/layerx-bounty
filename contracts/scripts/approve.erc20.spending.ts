const { ethers } = require("ethers");

async function approveAllowance(
  tokenAddress: string,
  spenderAddress: string,
  amount: number
) {
  // Connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_RPC);
  const wallet = new ethers.Wallet(process.env.HERO_PRIVATE_KEY, provider);

  // Get the contract instance
  const abi = [
    "function approve(address spender, uint256 value) returns (bool)",
  ];
  const tokenContract = new ethers.Contract(tokenAddress, abi, wallet);

  // Approve allowance
  const approveTx = await tokenContract.approve(spenderAddress, amount);

  // Wait for the transaction to be mined
  await approveTx.wait();

  console.log(`Allowance approved: ${amount} tokens`);
}

// Example usage
const tokenAddress = process.env.USDC_ADDRESS!; // Replace with the token contract address
const spenderAddress = process.env.MARKETPLACE_ADDRESS!; // Replace with the spender contract address
const amount = ethers.utils.parseUnits("10", 18); // Replace with the desired token amount

approveAllowance(tokenAddress, spenderAddress, amount)
  .then(() => console.log("Approval complete"))
  .catch((error) => console.error("Error:", error));
