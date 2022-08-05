import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

export const transformUri = (uri) => {
    let link = '';
    if (uri.includes("public/")) {
        link = uri.replace("public/", "https://static.gstop-content.com/");
        link += "?img-format=WebP"
    } else if (uri.includes("ipfs://")) {
        link = uri.replace("ipfs://", "https://www.gstop-content.com/ipfs/");
        link += "?img-width=550&image-format=WebP"
    }
    return link
}

export const weiToEth = (wei) => {
    const num = parseInt(wei)
    return Math.round(num / (10**18))
}

export const roundNumbers = (num) => {
    let newNum = String(num);
    if (newNum.length <= 3) return newNum;

    if (newNum.length === 4) {
        // 1600, 9999, 2579
        if (newNum[1] !== "0") {
            return newNum[0] + "." + newNum[1] + "k"
        } else {
            return newNum[0] + "k"
        }
    } else if (newNum.length === 5) {
        // 10010, 25200, 99999
        if (newNum[2] !== "0") {
            return newNum.slice(0,2) + "." + newNum[2] + "k" 
        } else {
            return newNum.slice(0,2) + "k"
        }

    } else if (newNum.length === 6) {
        if (newNum[3] !== "0") {
            return newNum.slice(0,3) + "." + newNum[3] + "k" 
        } else {
            return newNum.slice(0,3) + "k"
        }
    }
}

export const makeCollectionGmeLink = (slug) => {
    return `https://nft.gamestop.com/collection/${slug}`
}

export const makeNftGmeLink = (contractAddress, tokenId) => {
    return `https://nft.gamestop.com/token/${contractAddress}/${tokenId}`
}

export const EthData = ({ weiVal, round = false }) => {
    let ethVal = weiToEth(weiVal);

    if (!!round) ethVal = roundNumbers(ethVal);

    return (
        <span>
            <FontAwesomeIcon icon={faEthereum} className='mx-1' /> 
            {ethVal}
        </span>
    ) 
}