// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Oracle is ERC20{

    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint(msg.sender, 100000000 * (10 ** decimals()));
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }
}