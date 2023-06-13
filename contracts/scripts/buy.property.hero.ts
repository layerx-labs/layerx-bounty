import { ethers } from "hardhat";
async function main(share: number) {
  /*
    wallet setup
  */
  const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_RPC);
  const deployer = new ethers.Wallet(process.env.MM_PRIVATE_KEY!, provider);
  const wallet = new ethers.Wallet(process.env.HERO_PRIVATE_KEY!, provider);
  /*
    usdc contract setup
  */
  const usdcContractAddress: string | undefined = process.env.USDC_ADDRESS!;
  const usdcAbi = [
    "function approve(address spender, uint256 value) returns (bool)",
    "function allowance(address owner, address spender) view returns (uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function decimals() view returns (uint8)",
  ];
  const usdcContract = new ethers.Contract(
    usdcContractAddress,
    usdcAbi,
    wallet
  );
  const usdcDecimals = await usdcContract.decimals();
  /*
    property contract setup
  */
  const propertyAddress: string = process.env.PROPERTY_ADDRESS!;
  const propertyContract = await ethers.getContractAt(
    "Property",
    propertyAddress,
    deployer
  );
  console.log(`property contract info:\n\taddress: ${propertyAddress}`);
  /*
    marketplace contract setup
  */
  const marketplaceAddress: string = process.env.MARKETPLACE_ADDRESS!;
  const marketplaceContract = await ethers.getContractAt(
    "PropertyMarketplace",
    marketplaceAddress,
    wallet
  );
  /*
    wallet info
  */
  const walletAdress = await wallet.getAddress();
  const walletUSDCBalance = await usdcContract.balanceOf(walletAdress);
  const walletBalanceAdjustedForDecimals =
    walletUSDCBalance / 10 ** usdcDecimals;
  console.log(
    `wallet info:\n\taddress:${walletAdress}\n\twallet USDC balance:${walletBalanceAdjustedForDecimals}`
  );

  const _share: number = share;

  const sharePrice = await propertyContract.getPriceForShare(share);

  console.log(
    `\n\nyou are about to buy share: ${share}\nFor a price of ${sharePrice}`
  );

  console.log(
    `the marketplace contract can currently spend ${await usdcContract.allowance(
      walletAdress,
      marketplaceAddress
    )} usdc from wallet`
  );

  await approvePropertyContract();
  await buyShare(share, marketplaceContract, propertyContract);

  const amountOfShare1OwnedByWallet = await propertyContract.balanceOf(
    walletAdress,
    share
  );
  console.log(amountOfShare1OwnedByWallet);
}

async function approvePropertyContract() {}

async function buyShare(share: number, marketplace: any, property: any) {
  await marketplace.setPropertyContract(property.address);

  const b = await property.isApprovedForAll(
    property.address,
    marketplace.address
  );
  console.log(b);

  console.log("buying share...");
  const tx = await marketplace.buyShare(share);
  await tx.wait(1);
  console.log("share bought");
}

async function sendNewEncryption() {}

main(1).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
