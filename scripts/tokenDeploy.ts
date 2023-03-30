import { ethers } from "hardhat";

async function main() {
  const [owner, addr1 ] = await ethers.getSigners();
  // const admin = [addr1.address, owner.address, "0x7fB674ABDe76C777B56cD362b8Fd16389254a342"];
  console.log(addr1.address, owner.address);


  const tokenA = await ethers.getContractFactory("Oracle");
  const tokenA_ = await tokenA.deploy("Oracle", "ORC");
  await tokenA_.deployed();

  console.log(`tokenA contract is deployed to ${tokenA_.address}`);
  //console.log(addr1.address, owner.address);

  const tokenB = await ethers.getContractFactory("Oracle");
  const tokenB_ = await tokenB.deploy("OracleX", "ORCx");
  await tokenB_.deployed();

  console.log(`tokenB contract is deployed to ${tokenB_.address}`);
//0x706e818cf59e1271D796c1d6f156C2af5ac2919D
//0x685eE453D8168d0364583cc7ce0741B876DC4536
//
// Successfully verified contract metaSwap on Etherscan.
// https://mumbai.polygonscan.com/address/0xE3308Fc460180F468FbA4530578d3E6F97Ee36cF#code
 }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});