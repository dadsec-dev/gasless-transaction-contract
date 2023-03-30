import { ethers } from "hardhat";



async function main() {
  const [owner, addr1 ] = await ethers.getSigners();
  // const admin = [addr1.address, owner.address, "0x7fB674ABDe76C777B56cD362b8Fd16389254a342"];
  console.log(addr1.address, owner.address);


  const metaSwap = await ethers.getContractFactory("metaSwap");
  const metaSwap_ = await metaSwap.deploy("0x69015912AA33720b842dCD6aC059Ed623F28d9f7","0x706e818cf59e1271D796c1d6f156C2af5ac2919D", "0x685eE453D8168d0364583cc7ce0741B876DC4536", "2");
  await metaSwap_.deployed();

  console.log(`Meta-swap contract is deployed to ${metaSwap_.address}`);
  //console.log(addr1.address, owner.address);



 }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});