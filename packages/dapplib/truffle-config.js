require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth scrub essay inner prison outer swing'; 
let testAccounts = [
"0x3d4f9a5947fd49e51913cd4b9a15f4a23418254b93e0bc41560648ef1acf362b",
"0x501a98e7a8047cdff1ddf89071ac71c53bfec4278e73507e2702b3530142cf85",
"0x95c19e8fd9bf4749c4efc54852dd2127d3039906dd2a41eb5dc03df69462a8ee",
"0x737fe65ff30ffb3ab4ac5c329a6feb7d581180355e8ef5b2de267755a924fef6",
"0x7fa69ada091b4bc760d837b98c9d61bed6e453d878c4cfb3dfb760427c38fcb6",
"0xa7a4a9b6c4b814b00bbce2a5f0d3e8a77194875edada020864711bd99bf1d5d4",
"0xd163b1d1ba2fbe6121da4d67ae0901188ace3521a428f7629ee4e06f5369dcfa",
"0xc071d5b0bb80661f4c530b80b5ae56f8189916e2f8e2331e150a73fbb6a293ff",
"0x3b74d5b22e4e0ae327b5a64cddafef49ab5d8f6c5caff7102cf2a1f0f2491acf",
"0xe431208109c7dccb14df5af9942a005b5848beac960b82f892895f8d63c8d0af"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

