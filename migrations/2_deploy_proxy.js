const RightsManager = artifacts.require('RightsManager');
const SmartPoolManager = artifacts.require('SmartPoolManager');
const CRPFactory = artifacts.require('CRPFactory');
const BalancerSafeMath = artifacts.require('BalancerSafeMath');
const BActions = artifacts.require('BActions');
const BFactory = artifacts.require('BFactory');

module.exports = async function(deployer, network, accounts) {
    if (network == 'development' || network == 'soliditycoverage') {
        await deployer.deploy(RightsManager);
        await deployer.deploy(SmartPoolManager);
        await deployer.deploy(BFactory);
        await deployer.deploy(BalancerSafeMath);

        await deployer.link(BalancerSafeMath, CRPFactory);
        await deployer.link(RightsManager, CRPFactory);
        await deployer.link(SmartPoolManager, CRPFactory);

        await deployer.deploy(CRPFactory);

        await deployer.deploy(BActions, BFactory.address);
    } else if (network == 'kovan-fork' || network == 'kovan') {
        deployer.deploy(BActions, '0x418a1cEe2715594b8730a5adFeA75ecAF02b7b31');
    }
}
