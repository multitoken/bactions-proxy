const RightsManager = artifacts.require('RightsManager');
const SmartPoolManager = artifacts.require('SmartPoolManager');
const CRPFactory = artifacts.require('CRPFactory');
const BalancerSafeMath = artifacts.require('BalancerSafeMath');
const BActions = artifacts.require('BActions');
const BFactory = artifacts.require('BFactory');

module.exports = async function(deployer, network, accounts) {
    if (network == 'kovan-fork' || network == 'kovan') {
        await deployer.deploy(DSProxy);
    }
}
