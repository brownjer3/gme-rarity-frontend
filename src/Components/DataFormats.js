import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

export const transformImageUrl = (url, type) => {
	if (url && url.startsWith("public/")) {
		url = url.replace("public/", "https://static.gstop-content.com/");
	}

	let link = "";
	if (type === "banner") {
		link = url + "?img-width=expanded&img-format=WebP";
	} else if (type === "avatar") {
		link = url + "?img-width=large2&img-format=WebP";
	} else if (type === "nft") {
		link = url + "?img-width=550&image-format=WebP";
	}
	return link;
};

export const weiToEth = (wei) => {
	const num = parseInt(wei);
	const ethVal = num / 10 ** 18;
	if (ethVal < 0.1) {
		return Math.round(ethVal * 1000) / 1000;
	} else {
		return Math.round(ethVal * 100) / 100;
	}
};

export const roundDecimals = (numString) => {
	let newNum = String(numString);
	return Math.round(newNum * 100) / 100;
};

export const roundNumbers = (num) => {
	let newNum = String(num).split(".")[0];
	if (newNum.length <= 3) return newNum;

	if (newNum.length === 4) {
		// 1600, 9999, 2579
		if (newNum[1] !== "0") {
			return newNum[0] + "." + newNum[1] + "k";
		} else {
			return newNum[0] + "k";
		}
	} else if (newNum.length === 5) {
		// 10010, 25200, 99999
		if (newNum[2] !== "0") {
			return newNum.slice(0, 2) + "." + newNum[2] + "k";
		} else {
			return newNum.slice(0, 2) + "k";
		}
	} else if (newNum.length === 6) {
		if (newNum[3] !== "0") {
			return newNum.slice(0, 3) + "." + newNum[3] + "k";
		} else {
			return newNum.slice(0, 3) + "k";
		}
	}
};

export const makeCollectionGmeLink = (slug) => {
	return `https://nft.gamestop.com/collection/${slug}`;
};

export const makeNftGmeLink = (contractAddress, tokenId) => {
	return `https://nft.gamestop.com/token/${contractAddress}/${tokenId}`;
};

export const EthData = ({ weiVal, round = false }) => {
	let ethVal = weiToEth(weiVal);

	if (!!round) ethVal = roundNumbers(ethVal);

	return (
		<span>
			<FontAwesomeIcon icon={faEthereum} className="mx-1" />
			{ethVal}
		</span>
	);
};
