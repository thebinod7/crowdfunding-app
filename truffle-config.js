const HDWalletProvider = require('@truffle/hdwallet-provider');

const MNEMONIC = 'YOUR_MNEMONIC';
const RINKEBY_NODE = 'RINKEBY_NODE_URL';
const POLYGON_URL = 'POLYGON_NODE_URL';

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*', // Match any network id
        },
        rinkeby: {
            provider: function () {
                return new HDWalletProvider(MNEMONIC, RINKEBY_NODE);
            },
            network_id: 4,
        },
        polygonTestnet: {
            provider: function () {
                return new HDWalletProvider(MNEMONIC, POLYGON_URL);
            },
            network_id: 80001,
        },
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/abis/',
    compilers: {
        solc: {
            version: '^0.8.1',
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};
