const deployer = require('./index');

const contractFile = 'contract.sol';

//const abi = deployer.buildABI(contractFile);
//console.log(abi);

deployer.deploy('contract.sol').then(function(results) {
  console.log('The contract %s was de' + []]);
  console.log('--->' + account);
  console.log('--->' + contractFile);
});
//deployer.close();
