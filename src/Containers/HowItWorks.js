import { Component } from "react";
import { SectionHeader } from "../Components/Components";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

class HowItWorks extends Component {
	render() {
		return (
			<Container className="text-start">
				<SectionHeader name="🧮 Attribute Rarity Scoring" />
				{/* Rarity Score for a Trait Value] = 1 / ([Number of Items with that Trait
				Value] / [Total Number of Items in Collection]) The total Rarity Score
				for an NFT is the sum of the Rarity Score of all of it’s trait values. */}
				<p>
					To find out how rare an NFT is, you have to start with the
					collection's traits. Each trait is given a 'rarity score' based on how
					many NFTs in the collection have that trait and the total collection
					supply.
				</p>
				<p>
					To remain un-biased, we have not taken any liberties to give a greater
					weight to certain traits over others, even if they seem like they
					<em> should </em> be rarer. If you're affiliated with a GameStop NFT
					collection and would like to discuss custom trait scoring, please{" "}
					<Link
						className="fw-bold text-decoration-none text-white"
						to="/contact"
					>
						reach out.
					</Link>
				</p>
				<hr className="my-4" />
				<SectionHeader name="📈 NFT Rarity Ranking" />
				<p>
					Once a rarity score has been calculated for each trait in a
					collection, a 'total rarity score' is given to each NFT. NFTs are then
					ranked within their collection based on that total rarity score.
				</p>
				<hr className="my-4" />
				<SectionHeader name="🔎 Metadata Inconsistencies" />
				<p>
					There are some collections in the GameStop NFT Marketplace that have
					seemingly incorrect attribute data, like{" "}
					<a
						className="fw-bold text-decoration-none text-white"
						target="_blank"
						href="https://nft.gamestop.com/token/0x1d006a27bd82e10f9194d30158d91201e9930420/0x6185b585d72ed81b6ed733dc209ae276526186b77b3ff4c7ed72bb90121c4cc8"
					>
						this Metaboy
					</a>{" "}
					for example. Although this only affects a handful of NFTs, these
					collections may display inaccurate rarity rankings as a result. We did
					our best to create an optimal user experience while still maintaining
					an un-biased rarity ranking system. In other words, we didn't make any
					assumptions as to what might have been unintentional. These
					collections have been marked with a yellow 'Metadata Note' on their
					respective page.
				</p>
				<p>
					If you are affiliated with one of these collections, we'd love to{" "}
					<Link
						className="fw-bold text-decoration-none text-white"
						to="/contact"
					>
						talk!
					</Link>
				</p>
				<hr className="my-4" />
				<SectionHeader name="🚧 Future Updates" />
				<p>
					Just like the GameStop NFT Marketplace, Deep Fungible Value is still
					very much in 'beta.' There's so much we have planned that didn't make
					the cut for the initial launch. Stay tuned for updates like:
				</p>
				<ul>
					<li>Expanded collection support</li>
					<li>NFT price data & filtering </li>
					<li>Web3 wallet connectivity</li>
					<li>Ehanced mobile experience</li>
					<li>And so much more</li>
				</ul>
				<p>
					If you have feedback, questions, ideas, or anything else, please don't
					hesitate to{" "}
					<Link
						className="fw-bold text-decoration-none text-white"
						to="/contact"
					>
						get in touch.
					</Link>
				</p>
				<span className="lh-0">TO THE MOON, </span>
				<br />
				<span className="mb-4">The Deep Fungible Value Team</span>
			</Container>
		);
	}
}

export default HowItWorks;
