import { Component } from "react";
// import { SectionHeader } from "../Components/Components";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

class HowItWorks extends Component {
	componentDidMount() {
		ReactGA.pageview(window.location.pathname);
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Container className="text-start my-4">
				<div className="how-it-works-section mt-0">
					<h1 className="how-it-works-header">
						📍 What is Deep Fungible Value?
					</h1>
					<div className="how-it-works-content">
						<p>
							Deep Fungible Value is a free tool for collectors to browse and
							analyze the rarity of NFTs and traits within a collection on{" "}
							<a
								className="fw-bold text-decoration-none text-white"
								href="https://nft.gamestop.com/"
								target="_blank"
							>
								GameStop's NFT Marketplace.
							</a>{" "}
							With our tool, collectors can view high-level collection data,
							automate the NFT search/filtering process, and use our rarity
							calculations as needed.
						</p>
						<p>
							This site was created by a few enthusiastic GameStop NFT
							collectors who want to help enhance the budding GameStop NFT
							ecosystem. We are not affiliated with GameStop. All rarity metrics
							displayed on the site are for informational and educational
							purposes only.
						</p>
					</div>
				</div>
				<hr className="my-4" />
				<div className="how-it-works-section mt-0">
					<h1 className="how-it-works-header">
						💎 Why Does NFT Rarity Matter?
					</h1>
					<div className="how-it-works-content">
						<p>
							NFT rarity refers to how common or uncommon an NFT is within a
							collection. Generally speaking, NFTs with traits that are commonly
							seen throughout a collection are considered less rare, whereas
							NFTs with more unique/uncommon traits are rarer. For collectors,
							the rarity of an NFT can increase the value of certain NFTs and
							help guide their collection strategy.
						</p>
						<p>
							Rarity is the reason that one NFT can sell for millions while
							another NFT in the very same collection sells for a fraction of
							the price. Similar to traditional collectibles like trading cards
							or sports memorabilia, NFTs with uncommon/low supply traits are
							typically in higher demand, which often increases the market
							value. If you own a signed, mint condition Michael Jordan rookie
							basketball card, it'll be worth more than a beat up Dennis Rodman
							card signed by Danny DeVito.
						</p>
						<p>
							Without easy access to these stats, it can be very hard to
							accurately value an NFT, especially when collection supply gets
							into the thousands. Deep Fungible Value provides a free and easy
							way to gauge NFT rarity within a collection.
						</p>
					</div>
				</div>
				<hr className="my-4" />
				<div className="how-it-works-section mt-0">
					<h1 className="how-it-works-header">🧮 Attribute Rarity Scoring</h1>
					<div className="how-it-works-content">
						<p>
							To find the rarity of an NFT, you start by evaluating all of the
							traits in that collection. Each trait is given a 'rarity score'
							based on how many NFTs in the collection have that trait and
							dividing it by the total number of NFTs in that collection. For
							collections with NFTs that have multiple editions, this total
							supply includes those edition counts.
						</p>
						<p>
							To remain unbiased, we have not taken any liberties to give a
							greater weight to certain traits/categories over others, even if
							they seem like they
							<em> should </em> be rarer. If you're affiliated with a GameStop
							NFT collection and would like to discuss custom rarity scoring,
							please{" "}
							<Link
								className="fw-bold text-decoration-none text-white"
								to="/contact"
							>
								reach out.
							</Link>
						</p>
					</div>
				</div>
				<hr className="my-4" />
				<div className="how-it-works-section">
					<h1 className="how-it-works-header">📈 NFT Rarity Ranking</h1>
					<div className="how-it-works-content">
						<p>
							Once a rarity score has been calculated for each trait in a
							collection, a 'total rarity score' is given to each NFT by taking
							the sum of their trait's rarity scores. NFTs are then ranked
							within their collection based on that total rarity score. NFTs
							with the same total rarity score (typically only the case with
							1/1's) are marked as a tie.
						</p>
					</div>
				</div>
				<hr className="my-4" />
				<div className="how-it-works-section">
					<h1 className="how-it-works-header">🔎 Metadata Inconsistencies</h1>
					<div className="how-it-works-content">
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
							collections may display inaccurate rarity rankings as a result.
							The goal was to create an optimal user experience while still
							maintaining an unbiased rarity ranking system. In other words, no
							assumptions as to the intentions of the creator(s) when it comes
							to rarity ranking, but we did hide some of the 'wonky'
							categories/traits from the filtering options to keep things clean.
							These collections have been marked with a yellow 'Metadata Note'
							on their respective page.
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
				</div>
				<hr className="my-4" />
				<div className="how-it-works-section">
					<h1 className="how-it-works-header">🛠 Future Updates</h1>
					<div className="how-it-works-content">
						<p>
							Just like the GameStop NFT Marketplace, Deep Fungible Value is
							still very much in 'beta.' There's so much we have planned that
							didn't make the cut for the initial launch. Stay tuned for updates
							like:
						</p>
						<ul>
							<li>Expanded collection support</li>
							<li>NFT price data & filtering </li>
							<li>Web3 wallet connectivity</li>
							<li>Enhanced mobile experience</li>
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
				</div>
				<hr className="my-4" />
				<div>
					<small>
						*Deep Fungible Value is intended for informational and educational
						purposes only. We do not provide financial or investment advice or
						recommend that you purchase any NFTs. Users may not rely on rarity
						scores, rankings, or other information provided on this site for
						financial, investment or any other purpose. Deep Fungible Value is
						not affiliated with GameStop in any way.
					</small>
				</div>
			</Container>
		);
	}
}

export default HowItWorks;
