const { expect } = require("chai");
const { ethers } = require("hardhat");


describe('ERC20 Upgradeable', () => {
    it('Full Cycle', async () => {
      const [signer] = await ethers.getSigners()
  
      const myTokenUpgradeable = await ethers.getContractFactory(
        'myTokenUpgradeable'
      )
  
      const contract_V1 = (await upgrades.deployProxy(myTokenUpgradeable)) 
  
      expect(await contract_V1.totalSupply()).to.eql(constants.Zero)
  
      const myTokenUpgradeable_V2 = await ethers.getContractFactory(
        'myTokenUpgradeable_V2'
      )
  
      const contract_V2 = (await upgrades.upgradeProxy(
        contract_V1.address,
        myTokenUpgradeable_V2
      )) 
  
      expect(contract_V2.address).to.eq(contract_V1.address)
  
      expect(await contract_V2.totalSupply()).to.eql(constants.Zero)
  
      await contract_V2.mint(signer.address, parseEther('1'))
  
      expect(await contract_V2.totalSupply())
        .to.eql(await contract_V2.balanceOf(signer.address))
        .to.eql(parseEther('1'))
    })
  })