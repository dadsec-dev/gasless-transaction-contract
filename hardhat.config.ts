import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import  dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks: {
    hardhat: {},
    polygon: {
      url: process.env.POLYGON_RPC,
      //@ts-ignore
      accounts: [process.env.PRIVATE_KEY1, process.env.PRIVATE_KEY2],
    }
},

etherscan: {
  apiKey: {
    polygonMumbai: 'I98KH7BBABNWVJZT1BRVCEYXRES7Y8RI28',
  }
}

  // polygonscan: {
  //   apiKey: process.env.POLYGON,
  // }

}

export default config;