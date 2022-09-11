require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const { POLYGON_MUMBAI_RPC_PROVIDER, PRIVATE_KEY, POLYGONSCAN_API_KEY } =
  process.env;
module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: POLYGON_MUMBAI_RPC_PROVIDER,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
};
