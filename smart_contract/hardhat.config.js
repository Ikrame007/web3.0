require('@nomicfoundation/hardhat-chai-matchers');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/9GriDAZ5aixpL0MIVG_3Ef6ckgo7umBm',
      accounts: ['dc36943272623a76bf8b6f583cd3e52082a48fd5d271f70aa0da9ffc701323d5']
    }
  }
}