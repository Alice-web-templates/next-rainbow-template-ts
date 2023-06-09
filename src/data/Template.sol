// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract Template {
    uint8 num;
    address public immutable owner;

    constructor() {
        owner = msg.sender;
    }

    function updateNum(uint8 _num) external {
        num = _num;
    }

    function getNum() external view returns (uint8) {
        return num;
    }
}
