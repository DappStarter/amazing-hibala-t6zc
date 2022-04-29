require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note payment clump gesture glide equal genius'; 
let testAccounts = [
"0x3a903d29c68fdc6024d8ac509db516b8442c3603c673dc8e25c1e4b15d8ce63b",
"0x46d8fe355c0960bf3d9d7d335d457660d25fb9bc5c0f12dbff0844e3ca783c23",
"0x7c8a2cea6a8c45550768eef7465d2e7f6b70552daec859d27607546e49948bcc",
"0xa88b65bfe4e13b5c8466b7fd31351ced05b9c9a3a0673510d2f941733a3abe84",
"0xd55f4c08036601269133cb927ea3c5c99fa8bf5162b41abfe8b42246950dde40",
"0xbf4709450f5072dcd4d48368f0e8d55f22ef2316584855e3e096b3019dd81a71",
"0x8c94641f6c62a57fec79155b44b6c6c9305f91911e405b78166211417b525de9",
"0x81397f167adbb83590edd3c8364dc1bbcf9ec99a2e474b4f83069b6d3a26d0c7",
"0x1903676d6802aa9f2e2d6de0e3af58a7e4f17ae0f805ab21188804a662626fe8",
"0x2fdb408435a50b666185bcc19c7096776d43164f57d677f60fbb12c0bd6e1bde"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


