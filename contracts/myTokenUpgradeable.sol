//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract myTokenUpgradeable is Initializable, ERC20Upgradeable, OwnableUpgradeable {

  //  constructor() initializer{}

  
    // constructor() ERC20("Priyank_Upgradeable", "PU") {
    // }

     function initialize() external initializer {
        __ERC20_init("Priyank_Upgradeable", "PU");
        __Ownable_init();
    }

}