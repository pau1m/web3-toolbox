const deployer = require('./deployer');

/**
 * @param contractFile a solidity contract
 * @param params an array of parameters to pass to contract
 * @param config web3 default configuration
 */
exports.deploy = function(contractFile, params = [], config = {}) {
  if (!contractFile) {
    throw 'The contract file must be provided';
  }

  return deployer.deploy(contractFile, params, config);
}

exports.buildABI = function(contractFile) {
  if (!contractFile) {
    throw 'The contract file must be provided';
  }
  return deployer.buildABI(contractFile);
}

exports.close = function () {
  deployer.closeWeb3();
}
