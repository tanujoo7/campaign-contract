const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonicPhrase = "usage rival state trash unusual border common echo resource puppy olympic purpose"; 
const { interface, bytecode } = require("./compile");
let provider = new HDWalletProvider({
    mnemonic: {
      phrase: mnemonicPhrase
    },
    providerOrUrl: "https://rinkeby.infura.io/v3/f588d9aaa5594016b68283656d4a06e4"
  });
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(JSON.stringify(abi));
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
