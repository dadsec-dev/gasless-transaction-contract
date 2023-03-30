// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract metaSwap is ERC2771Context{

    IERC20 public tokenA;
    IERC20 public tokenB;
    uint public exchangeRate;


    constructor(address trustedForwarder, IERC20 _tokenA, IERC20 _tokenB, uint _rate) ERC2771Context(trustedForwarder){

        tokenA = _tokenA;
        tokenB = _tokenB;
        exchangeRate = _rate;
        
    }

    function swap(uint _amount) public {
        uint tokenBamount = _amount * exchangeRate;

        require(tokenA.balanceOf(_msgSender()) >= _amount, "Not enough tokenA balance");
        require(tokenB.balanceOf(address(this)) >= tokenBamount, "Not enough tokens in the contract for transaction");

        //transfer tokenA from user to the contract
        require(tokenA.transferFrom(_msgSender(), address(this), _amount), "tokenA transfer failed");

        //transfer tokenB from contract to the user based on exchange rate
        require(tokenB.transfer(address(this), tokenBamount), "tokenB transfer failed");
    }
}