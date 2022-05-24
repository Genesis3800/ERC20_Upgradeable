const { expect } = require("chai");
const { ethers , upgrades } = require("hardhat");
const {constants} = require("ethers");
// const { parseEther } = require("ethers/lib/utils");
var utilis = require('ethers').utils;


describe('ERC20 Upgradeable', () => {
    it('Full Cycle', async () => {
      const [signer] = await ethers.getSigners()
  
      const myTokenUpgradeable = await ethers.getContractFactory("myTokenUpgradeable");
  
      const contract_V1 = (await upgrades.deployProxy(myTokenUpgradeable)) ;
  
      expect(await contract_V1.totalSupply()).to.eql(constants.Zero);
  
      const myTokenUpgradeable_V2 = await ethers.getContractFactory("myTokenUpgradeable_V2")
  
      const contract_V2 = (await upgrades.upgradeProxy(
        contract_V1.address,
        myTokenUpgradeable_V2
      )) 
  
      expect(contract_V2.address).to.eq(contract_V1.address)
  
      expect(await contract_V2.totalSupply()).to.eql(constants.Zero)
  
      await contract_V2.mint(signer.address, utilis.parseEther("1"))
  
      expect(await contract_V2.totalSupply())
        .to.eq(await contract_V2.balanceOf(signer.address))
        .to.eq(utilis.parseEther("1"))
    })
  })