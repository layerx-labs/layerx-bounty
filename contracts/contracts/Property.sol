// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";

contract Property is ERC1155URIStorage,Ownable, ReentrancyGuard,IERC1155Receiver{

    event SharePurchased(address buyer, uint256 share);
    event ShareTransferred(address from, address to, uint256 share);
    event ShareSold(address from,address to, uint256 share);
    event Withdrawal(address to, uint256 amount);
    event UpdateURI(address receiver,uint256 share);

    IERC20 public usdcToken;
    address public constant marketplace = 0x19B3ac8146b052d93f4fC666dA4e1c9E2d96605b;

    uint256 public counter = 0;
    mapping(uint256 => uint256) public pricePerShare;

    
    constructor(address _multisigWallet, address usdcAddress, uint256 _askingPrice, uint256 _amountOfShares, string memory baseURI) ERC1155(baseURI)  {
        transferOwnership(_multisigWallet);
        usdcToken = IERC20(usdcAddress);

        for (uint i = 0; i < _amountOfShares; i++) {
            _mint(address(this),counter,1,"");
            pricePerShare[i] = _askingPrice;
            counter++;
        }

        _setApprovalForAll(address(this),marketplace,true);
        usdcToken.approve(marketplace,1000000000);
    }

   
    function getPriceForShare(uint256 _share) external view returns(uint256){
        return pricePerShare[_share];
    }


    function setAskingPrice(uint256 _share, uint256 _askingPrice) external onlyOwner{
        pricePerShare[_share] = _askingPrice;
    }


   function withdraw() external onlyOwner {
        uint256 contractBalance = usdcToken.balanceOf(address(this));
        require(contractBalance > 0, "No balance to withdraw");

        bool success = usdcToken.transfer(owner(), contractBalance);
        require(success, "USDC transfer failed");

        emit Withdrawal(owner(), contractBalance);
    }

    function _setShareURI(uint256 _share, string memory tokenURI) external onlyOwner{
        _setURI(_share, tokenURI);
    }

    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external pure override returns (bytes4){
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external pure override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }
}
