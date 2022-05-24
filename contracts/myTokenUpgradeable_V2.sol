//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract myTokenUpgradeable is Initializable, ERC20Upgradeable, OwnableUpgradeable {

    constructor() {
    _disableInitializers();
}
  
    // constructor() ERC20("Priyank_Upgradeable", "PU") {
    // }

     function initialize() external initializer {
        __ERC20_init("Priyank_Upgradeable", "PU");
        __Ownable_init();
    }

    function mint(address to, uint amount) external onlyOwner {
        _mint(to, amount);
    }
}