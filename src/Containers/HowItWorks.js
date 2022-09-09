import { Component } from "react";
import { SectionHeader } from "../Components/Components";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

class HowItWorks extends Component {
	render() {
		return (
			<Container className="text-start my-4">
				<div className="how-it-works-section">
					<SectionHeader name="🧮 Attribute Rarity Scoring" />
					<p>
						To find the rarity of an NFT, you have to start with the
						collection's traits. Each trait is given a 'rarity score' based on
						how many NFTs in the collection have that same trait (including
						multiple editions) and their proportion of the total collection
						supply.
					</p>
					<p>
						To remain un-biased, we have not taken any liberties to give a
						greater weight to certain traits/categories over others, even if
						they seem like they
						<em> should </em> be rarer. If you're affiliated with a GameStop NFT
						collection and would like to discuss custom rarity scoring, please{" "}
						<Link
							className="fw-bold text-decoration-none text-white"
							to="/contact"
						>
							reach out.
						</Link>
					</p>
				</div>
				<hr className="my-4" />
				<div className="how-it-works-section">
					<SectionHeader name="📈 NFT Rarity Ranking" />
					<p>
						Once a rarity score has been calculated for each trait in a
						collection, a 'total rarity score' is given to each NFT by taking
						the sum of their trait's rarity scores. NFTs are then ranked within
						their collection based on that total rarity score. NFTs with the
						same exact total rarity score (tyically only the case with 1/1's)
						are marked as a tie.
					</p>
				</div>
				<hr className="my-4" />
				<div className="how-it-works-section">
					<SectionHeader name="🔎 Metadata Inconsistencies" />
					<p>
						There are some collections in GameStop's NFT Marketplace that have
						strange attribute data, like{" "}
						<a
							className="fw-bold text-decoration-none text-white"
							target="_blank"
							href="https://nft.gamestop.com/token/0x1d006a27bd82e10f9194d30158d91201e9930420/0x6185b585d72ed81b6ed733dc209ae276526186b77b3ff4c7ed72bb90121c4cc8"
						>
							this Metaboy
						</a>{" "}
						for example. Although this only affects a handful of NFTs, these
						collections may display inaccurate rarity rankings as a result. The
						goal was to create an optimal user experience while still
						maintaining an un-biased rarity ranking system. In other words, no
						assumptions as to the intentions of the creator(s) when it comes to
						rarity ranking, but we did hide some of the 'wonky'
						categories/traits from the filtering options on those collection
						pages to keep things clean. These collections have been marked with
						a yellow 'Metadata Note' on their respective page.
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
				</div>
				<hr className="my-4" />
				<div className="how-it-works-section">
					<SectionHeader name="🚧 Future Updates" />
					<p>
						Just like the GameStop NFT Marketplace, Deep Fungible Value is still
						very much in 'beta.' There's so much we have planned that didn't
						make the cut for the initial launch. Stay tuned for updates like:
					</p>
					<ul>
						<li>Expanded collection support</li>
						<li>NFT price data & filtering </li>
						<li>Web3 wallet connectivity</li>
						<li>Ehanced mobile experience</li>
						<li>And so much more</li>
					</ul>
					<p>
						If you have feedback, questions, ideas, or anything else, please
						don't hesitate to{" "}
						<Link
							className="fw-bold text-decoration-none text-white"
							to="/contact"
						>
							get in touch.
						</Link>
					</p>
					<span className="mt-4">TO THE MOON, </span>
					<br />
					<span>The Deep Fungible Value Team</span>
				</div>
			</Container>
		);
	}
}

export default HowItWorks;
