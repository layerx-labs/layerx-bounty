// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./Property.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";



contract PropertyMarketplace is Ownable, ReentrancyGuard {
    
    event UpdateURI(address receiver,uint256 share);
    
    struct Listing {
        address seller;
        uint256 share;
        uint256 price;
    }

    IERC20 public usdcToken;
    Property public propertyContract;
    mapping(uint256 => Listing) public listings;
    mapping(bytes4 => bool) private supportedInterfaces;

    uint256 public totalShares;

    event ListingCreated(address seller, uint256 share, uint256 price);
    event ListingCancelled(address seller, uint256 share);
    event SharePurchased(address seller, address buyer, uint256 share, uint256 price);

    constructor(address usdcAddress ) {
        usdcToken = IERC20(usdcAddress);
    }

    function setPropertyContract(address propertyAddress)external {
        propertyContract = Property(propertyAddress);
    }

    function createListing(uint256 share, uint256 price) public {
        require(share < totalShares, "Invalid share ID");
        require(
            propertyContract.balanceOf(msg.sender, share) > 0,
            "Sender does not own the share"
        );
        require(price > 0, "Price must be greater than zero");

        listings[share] = Listing(msg.sender, share, price);

        emit ListingCreated(msg.sender, share, price);
    }

    function cancelListing(uint256 share) external {
        require(listings[share].seller == msg.sender, "Sender is not the seller");

        delete listings[share];

        emit ListingCancelled(msg.sender, share);
    }

    function purchaseShareFromListing(uint256 share) external {
        Listing storage listing = listings[share];
        require(listing.seller != address(0), "Share is not listed for sale");

        uint256 price = listing.price;
        require(
            usdcToken.allowance(msg.sender, address(this)) >= price,
            "Insufficient allowance"
        );

        bool usdcTradeSuccess = usdcToken.transferFrom(
            msg.sender,
            listing.seller,
            price
        );
        require(usdcTradeSuccess, "USDC transfer failed");

        propertyContract.safeTransferFrom(
            listing.seller,
            msg.sender,
            share,
            1,
            ""
        );

        delete listings[share];

        emit SharePurchased(listing.seller, msg.sender, share, price);
    }

    function getListing(uint256 share)
        external
        view
        returns (
            address _seller,
            uint256 _share,
            uint256 _price
        )
    {
        Listing storage listing = listings[share];
        require(listing.seller != address(0), "Share is not listed for sale");

        return (listing.seller, listing.share, listing.price);
    }

    function buyShare(uint256 _shareId) external nonReentrant {

        uint256 totalPrice = propertyContract.getPriceForShare(_shareId);
        
    
        require(usdcToken.balanceOf(msg.sender)>= totalPrice, "Insufficient funds");
        require(usdcToken.allowance(msg.sender,address(this)) >= totalPrice,"Insufficient allowance");

        bool usdcTradeSucces = usdcToken.transferFrom(msg.sender,address(propertyContract),totalPrice);
        require(usdcTradeSucces,"USDC transfer failed");

        propertyContract.safeTransferFrom(address(propertyContract),msg.sender,_shareId,1,"");

        emit UpdateURI(msg.sender,_shareId);
    }

    function sellShare(uint256 _share) external nonReentrant {
        uint256 sharePrice = propertyContract.getPriceForShare(_share);
        require(propertyContract.balanceOf(msg.sender,_share)>0);
        require(usdcToken.balanceOf(address(propertyContract))>=sharePrice, "not enough funds to sell to contract, please list share");

        propertyContract.safeTransferFrom(msg.sender,address(propertyContract),_share,1,"");
        usdcToken.transferFrom(address(propertyContract),msg.sender,sharePrice);

        emit UpdateURI(address(propertyContract),_share);
    }


    //implement the escrow functionality
    function transferShare(address to, uint256 _share) external{
        require(to != address(0), "Invalid recipient address");

        propertyContract.safeTransferFrom(msg.sender, to, _share, 1, "");
        
        emit UpdateURI(to,_share);
    }
}
