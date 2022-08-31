import { useState, useEffect, useRef } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TraitFilterContainer from "./TraitFilterContainer";
import NftsGridContainer from "./NftsGridContainer";
import SortDropdown from "../Components/SortDropdown";
import TraitBadges from "../Components/TraitBadges";
import MetadataWarning from "../Components/MetadataWarning";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { transformUrl, roundNumbers } from "../Components/DataFormats";
import { Loading } from "../Components/Components";
import CollectionBanner from "../Components/CollectionBanner";
import CollectionSidebarContainer from "./CollectionSidebarContainer";
import { Container } from "react-bootstrap";

export default function CollectionContainer() {
	const { collectionSlug } = useParams();
	const collection = useSelector((state) =>
		state.collections.data.find(
			(collection) => collection.slug === collectionSlug
		)
	);

	const pageLimit = "25";
	const navigate = useNavigate();

	const [traitsQuery, setTraitsQuery] = useState([]);
	const [filteredItemsLength, setFilteredItemsLength] = useState(
		collection.items
	);

	const [nfts, setNfts] = useState([]);
	const [pageNum, setPageNum] = useState(0);
	const [query, setQuery] = useState("");
	const [hasMore, setHasMore] = useState(false);

	const [loadRef, setLoadRef] = useState(null);
	const observer = useRef(
		new IntersectionObserver(
			(entries) => {
				const first = entries[0];
				if (first.isIntersecting) {
					console.log("intersecting!");
					setPageNum((current) => current + 1);
				}
			},
			{ threshold: 1 }
		)
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		loadMore();
	}, [pageNum, traitsQuery]);

	useEffect(() => {
		if (traitsQuery.length == 0) {
			setFilteredItemsLength(collection.total_items);
		} else {
			let count = 0;
			traitsQuery.forEach((query) => {
				let num = parseInt(collection.traits[query.category][query.trait]);
				count += num;
			});
			setFilteredItemsLength(count);
		}
	}, [traitsQuery]);

	useEffect(() => {
		const loader = loadRef;
		const currentObserver = observer.current;
		if (loader) currentObserver.observe(loader);
		return () => {
			if (loader) {
				currentObserver.unobserve(loader);
			}
		};
	}, [loadRef]);

	const loadMore = async () => {
		// let url = `http://localhost:3001/collections/${collection.id}/nfts?`;
		let url = `https://gmeraritytool.herokuapp.com/`;

		// if (traitsQuery.length > 0) {
		// 	traitsQuery.forEach((combo) => {
		// 		let category = combo["category"];
		// 		let trait = combo["trait"];
		// 		url += `metadataJson.properties.${category}=${trait}&`;
		// 	});
		// }

		// url += `_page=${pageNum}&_limit=${pageLimit}`;
		url += `page=${pageNum * pageLimit}/Limit=${pageLimit}/`;

		url += `Nft/CollectionID=${collection.id}`;

		const res = await fetch(url);
		const data = await res.json();

		data.length < 25 ? setHasMore(false) : setHasMore(true);

		let all;
		if (pageNum == 0) {
			all = new Set([...data]);
		} else {
			all = new Set([...nfts, ...data]);
		}
		setNfts([...all]);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`/collections/${collection.slug}/${query}`);
	};

	const handleQueryInput = (e) => {
		setQuery(e.target.value);
	};

	const handleTraitSelect = (e) => {
		const categoryAndTrait = e.target.value.split("-");
		const category = categoryAndTrait[0];
		const name = categoryAndTrait[1];
		if (isTraitSelected(category, name)) {
			setTraitsQuery(traitsQuery.filter((item) => item.trait !== name));
		} else {
			setTraitsQuery((currentQuery) => {
				return [...currentQuery, { trait: name, category: category }];
			});
		}
		setPageNum(1);
	};

	const handleTraitDeselect = (e) => {
		const name = e.target.closest(".trait-badge").id;
		setTraitsQuery(traitsQuery.filter((item) => item.trait !== name));
	};

	const isTraitSelected = (category, trait) => {
		return traitsQuery.some(
			(combo) => combo.trait == trait && combo.category == category
		);
	};

	const renderLoadMoreSpinner = () => {
		if (!!hasMore) {
			return (
				<div ref={setLoadRef}>
					<Loading />
				</div>
			);
		} else {
			return <></>;
		}
	};

	// 	"total_volume": "95480730000000000000",
	//     "avatar_url": "https://static.gstop-content.com/0fac0dce-1e1a-4c70-a0a6-44bd60485b0d",
	//     "banner_image_url": "https://static.gstop-content.com/b9919c2e-7fb0-411d-9811-1d62cf4488fc",
	//     "name": "Launch Day",
	//     "description": "\"...midnight release vibes\"",
	//     "id": "56fe1690-2287-424a-8bf2-5314f1ba6333",
	//     "contract_address": "0x9d8ddad8f046c7aea4180eb94596f9421c31e622",
	//     "total_items": "10",
	//     "slug": "vzewllaunchday"
	//   }
	const testTraits = {
		Hat: {
			"Beret Hat": "5",
			Halo: "100",
			Crown: "5514",
			Santa: "928",
			Helmet: "8242",
		},
		Body: {
			Schoolboy: "2312",
			Schoolgirl: "2312",
			Armor: "2312",
			Hoodie: "2312",
		},
		Face: {
			"Teeth Smile": "23",
			Goofy: "23",
			Serious: "23",
			Angry: "23",
		},
		Weapon: {
			"Axe and Shield": "832",
			Sword: "832",
			"Medusa Head": "832",
			Bomb: "832",
			Phonebook: "832",
		},
		Background: {
			Apocalypse: "7322",
			Space: "7322",
			Field: "7322",
			"Video Game": "7322",
			"Haunted House": "7322",
		},
		Legendary: {
			Hacker: "1",
			Player: "1",
			Goose: "1",
			Model: "1",
			Trader: "1",
			Burglar: "1",
			Surfer: "1",
			Chess: "1",
			Racer: "1",
			Basketball: "1",
			Football: "1",
			Soccer: "1",
			Golfer: "1",
			Witch: "1",
			Jetpack: "1",
		},
	};

	return (
		<Container fluid className="pe-0 main-collection-content">
			<Row className="w-100 h-100">
				<Col lg={2} className="sidebar d-none d-lg-block h-100">
					<TraitFilterContainer
						name={collection.name}
						// traits={collection.traits}
						traits={testTraits}
						image={transformUrl(collection.avatar_url)}
						isTraitSelected={isTraitSelected}
						handleTraitSelect={handleTraitSelect}
						handleQueryInput={handleQueryInput}
						handleSearch={handleSearch}
					/>
				</Col>
				<div className="d-block d-lg-none">
					<CollectionSidebarContainer
						name={collection.name}
						// traits={collection.traits}
						traits={testTraits}
						image={transformUrl(collection.avatar_url)}
						isTraitSelected={isTraitSelected}
						handleTraitSelect={handleTraitSelect}
						handleQueryInput={handleQueryInput}
						handleSearch={handleSearch}
					/>
				</div>

				<Col xs={12} lg={10} className="collection-main-view h-100 pb-4">
					<CollectionBanner collection={collection} />
					<br />
					{collection.metadataFlag && (
						<MetadataWarning name={collection.name} />
					)}
					<Row className="my-2 justify-content-space-between">
						<Col className="text-muted text-start">
							<div>{roundNumbers(filteredItemsLength)} items</div>
						</Col>
						<Col className="text-end">
							<SortDropdown />
						</Col>
					</Row>
					<Row>
						<div className="d-flex flex-wrap justify-content-center">
							<TraitBadges
								handleTraitDeselect={handleTraitDeselect}
								selectedTraits={traitsQuery}
							/>
						</div>
					</Row>
					<NftsGridContainer nfts={nfts} collection={collection} />
					{renderLoadMoreSpinner()}
				</Col>
				<Outlet />
			</Row>
		</Container>
	);
}
