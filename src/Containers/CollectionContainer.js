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
import { transformImageUrl, roundNumbers } from "../Components/DataFormats";
import { Loading } from "../Components/Components";
import CollectionBanner from "../Components/CollectionBanner";
import CollectionSidebarContainer from "./CollectionSidebarContainer";
import { Container } from "react-bootstrap";
import { metadataFlagList } from "../Components/metadataFlagList";

export default function CollectionContainer() {
	const { collectionSlug } = useParams();
	const collection = useSelector((state) =>
		state.collections.data.find(
			(collection) => collection.slug === collectionSlug
		)
	);

	const pageLimit = "25";
	const navigate = useNavigate();

	const [traitList, setTraitList] = useState({});
	const [traitsQuery, setTraitsQuery] = useState([]);
	const [filteredItemsLength, setFilteredItemsLength] = useState(
		collection.items
	);

	const [nfts, setNfts] = useState([]);
	const [pageNum, setPageNum] = useState(0);
	const [query, setQuery] = useState("");
	const [hasMore, setHasMore] = useState(false);
	const [metadataFlag, setMetaDataFlag] = useState(
		!!metadataFlagList[collection.id]
	);

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
		getTraitList();
	}, []);

	const getTraitList = async () => {
		const url = `https://gmeraritytool.herokuapp.com/Collection=${collection.id}`;
		const res = await fetch(url);
		const data = await res.json();

		const traitObj = handleTraitData(data);
		setTraitList(traitObj);
	};

	const filterOutBadMetadata = (traitObj) => {
		const goodCategories = metadataFlagList[collection.id];
		let filteredTraitObj = {};
		for (let i = 0; i < goodCategories.length; i++) {
			const categoryName = goodCategories[i];
			filteredTraitObj[categoryName] = traitObj[categoryName];
		}
		return filteredTraitObj;
	};

	const handleTraitData = (dataArr) => {
		let traitObj = {};
		let categoryName;
		let traitName;
		let traitCount;

		for (let i = 1; i < dataArr.length; i++) {
			let dataStr = dataArr[i]["attribute_list"];
			let splitStr = dataStr.split("{");
			categoryName = splitStr[0].split(" has")[0];
			traitObj[categoryName] = {};

			let traits = splitStr[1].split(", ");
			for (let j = 0; j < traits.length; j++) {
				traitName = traits[j].split(": ")[0];
				traitCount = traits[j].split(": ")[1];
				if (j === traits.length - 1) {
					traitCount = traitCount.replace("}", "");
				}
				traitObj[categoryName][traitName] = traitCount;
			}
		}

		if (!!metadataFlag) {
			return filterOutBadMetadata(traitObj);
		} else {
			return traitObj;
		}
	};

	useEffect(() => {
		loadMore();
	}, [pageNum, traitsQuery]);

	useEffect(() => {
		if (traitsQuery.length === 0) {
			setFilteredItemsLength(collection.total_items);
		}
		// else {
		// 	let count = 0;
		// 	traitsQuery.forEach((query) => {
		// 		let num = parseInt(collection.traits[query.category][query.trait]);
		// 		count += num;
		// 	});
		// 	setFilteredItemsLength(count);
		// }
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
		// https://gmeraritytool.herokuapp.com/nfts/Collection=36fab6f7-1e51-49d9-a0be-39343abafd0f/Attributes=Fedora

		let url = `https://gmeraritytool.herokuapp.com/`;

		if (traitsQuery.length > 0) {
			url += `nfts/Collection=${collection.id}/Attributes=`;
			traitsQuery.forEach((query) => {
				let category = query["category"];
				let trait = query["trait"];
				url += `${trait}--`;
			});
			url = url.slice(0, -2);
		} else {
			url += `page=${pageNum * pageLimit}/Limit=${pageLimit}/`;
			url += `Nft/CollectionID=${collection.id}`;
		}

		const res = await fetch(url);
		const data = await res.json();

		if (traitsQuery.length > 0) {
			setFilteredItemsLength(data[0]["count"]);
			nfts.length + parseInt(data[0]["count"]) >= parseInt(filteredItemsLength)
				? setHasMore(false)
				: setHasMore(true);
			data.shift();
		} else {
			data.length < 25 ? setHasMore(false) : setHasMore(true);
		}

		let all;
		if (pageNum === 0) {
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
		setPageNum(0);
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

	return (
		<Container fluid className="pe-0 main-collection-content">
			<Row className="w-100 h-100">
				<Col lg={2} className="sidebar d-none d-lg-block h-100">
					<TraitFilterContainer
						name={collection.name}
						traits={traitList}
						image={transformImageUrl(collection.avatar_url, "avatar")}
						isTraitSelected={isTraitSelected}
						handleTraitSelect={handleTraitSelect}
						handleQueryInput={handleQueryInput}
						handleSearch={handleSearch}
					/>
				</Col>
				<div className="d-block d-lg-none">
					<CollectionSidebarContainer
						name={collection.name}
						traits={traitList}
						image={transformImageUrl(collection.avatar_url, "avatar")}
						isTraitSelected={isTraitSelected}
						handleTraitSelect={handleTraitSelect}
						handleQueryInput={handleQueryInput}
						handleSearch={handleSearch}
					/>
				</div>

				<Col xs={12} lg={10} className="collection-main-view h-100 pb-4">
					<CollectionBanner collection={collection} />
					<br />
					{metadataFlag && <MetadataWarning name={collection.name} />}
					<Row>
						<div className="d-flex flex-wrap justify-content-center">
							<TraitBadges
								handleTraitDeselect={handleTraitDeselect}
								selectedTraits={traitsQuery}
							/>
						</div>
					</Row>
					<Row className="my-2 justify-content-space-between">
						<Col className="text-muted text-start">
							<div>{roundNumbers(filteredItemsLength)} items</div>
						</Col>
						<Col className="text-end">
							<SortDropdown />
						</Col>
					</Row>
					<NftsGridContainer nfts={nfts} collection={collection} />
					{renderLoadMoreSpinner()}
				</Col>
				<Outlet />
			</Row>
		</Container>
	);
}
