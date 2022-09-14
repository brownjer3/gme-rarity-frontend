import { useState, useEffect, useRef } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

	const baseUrl = "https://gmeraritytool.herokuapp.com/";
	const [apiSearchEndpoint, setApiSearchEndpoint] = useState("");

	const [traitList, setTraitList] = useState({});
	const [traitsQuery, setTraitsQuery] = useState([]);
	const [filteredItemsLength, setFilteredItemsLength] = useState(
		collection.total_items
	);

	const [nftsToDisplay, setNftsToDisplay] = useState([]);
	const [pageNum, setPageNum] = useState(0);
	const [searchNameQuery, setSearchNameQuery] = useState("");
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
					setPageNum((current) => current + 1);
				}
			},
			{ threshold: 1 }
		)
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		getTraitList();
		handleEntireCollection();
	}, []);

	useEffect(() => {
		const mainView = document.getElementById("main-collection-view");
		mainView.scroll({
			top: 0,
			behavior: "smooth",
		});

		if (traitsQuery.length === 0 && searchNameQuery.length === 0) {
			setFilteredItemsLength(collection.total_items);
		}
	}, [traitsQuery, searchNameQuery]);

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

	useEffect(() => {
		fetchNfts(apiSearchEndpoint);
	}, [apiSearchEndpoint]);

	useEffect(() => {
		if (pageNum !== 0) {
			fetchNextBatch();
		}
	}, [pageNum]);

	useEffect(() => {
		setPageNum(0);
		if (traitsQuery.length === 0) {
			handleEntireCollection();
		} else {
			handleFilterByTraits();
		}
	}, [traitsQuery]);

	useEffect(() => {
		setPageNum(0);
		if (searchNameQuery.length === 0) {
			handleEntireCollection();
		} else {
			handleFilterBySearch();
		}
	}, [searchNameQuery]);

	const fetchNfts = async (url) => {
		const res = await fetch(url);
		const data = await res.json();

		data.length < 25 ? setHasMore(false) : setHasMore(true);

		if (data[0]["count"] !== undefined) {
			setFilteredItemsLength(data[0]["count"]);
			data.shift();
		} else {
			setFilteredItemsLength(collection.total_items);
		}

		let all;
		if (pageNum === 0) {
			all = new Set([...data]);
		} else {
			all = new Set([...nftsToDisplay, ...data]);
		}
		setNftsToDisplay([...all]);
	};

	const handleEntireCollection = () => {
		// https://gmeraritytool.herokuapp.com/page=0/Limit=25/Nft/CollectionID=36fab6f7-1e51-49d9-a0be-39343abafd0f

		let url = baseUrl + `page=0/Limit=25/Nft/CollectionID=${collection.id}`;
		setApiSearchEndpoint(url);
	};

	const handleFilterBySearch = () => {
		//gmeraritytool.herokuapp.com/page=0/Limit=25/Collection=36fab6f7-1e51-49d9-a0be-39343abafd0f/NamedNfts=555
		// e.preventDefault();

		if (searchNameQuery.length > 0) {
			let url =
				baseUrl +
				`page=0/Limit=25/Collection=${collection.id}/NamedNfts=${searchNameQuery}`;

			setApiSearchEndpoint(url);
		}
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
	};

	const handleFilterByTraits = () => {
		//https://gmeraritytool.herokuapp.com/page=0/Limit=25/nfts/Collection=36fab6f7-1e51-49d9-a0be-39343abafd0f/Attributes=Halo-Castle

		if (traitsQuery.length > 0) {
			let url =
				baseUrl +
				`page=0/Limit=25/nfts/Collection=${collection.id}/Attributes=`;

			traitsQuery.forEach((query) => {
				let category = query["category"];
				let trait = query["trait"];
				url += `${category};${trait}-`;
			});
			url = url.slice(0, -1);
			setApiSearchEndpoint(url);
		}
	};

	const fetchNextBatch = () => {
		let url = apiSearchEndpoint;
		let params = url.split("page=")[1];
		let oldNum = params.split("/Limit")[0];
		let updatedParams = params.replace(oldNum, pageNum * pageLimit);
		let updatedUrl = baseUrl + "page=" + updatedParams;

		console.log(updatedUrl);

		setApiSearchEndpoint(updatedUrl);
	};

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

			let traits = splitStr[1].split("| ");
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

	const handleTraitSelect = (e) => {
		const categoryAndTrait = e.target.value.split("-");
		const category = categoryAndTrait[0];
		const name = categoryAndTrait[1];
		if (isTraitSelected(category, name)) {
			setTraitsQuery(traitsQuery.filter((item) => item.trait !== name));
		} else {
			// if we already have a query for that category >> remove it and replace
			if (isCategorySelected(category)) {
				setTraitsQuery((currentQuery) => {
					let filteredQuery = currentQuery.filter(
						(item) => item.category !== category
					);
					return [...filteredQuery, { trait: name, category: category }];
				});
				// otherwise add it to query and collapse that section
			} else {
				setTraitsQuery((currentQuery) => {
					return [...currentQuery, { trait: name, category: category }];
				});
			}
		}
		if (searchNameQuery.length > 0) setSearchNameQuery("");
		setPageNum(0);
		window.scrollTo(0, 0);
	};

	const handleQueryInput = (e) => {
		setSearchNameQuery(e.target.value);
		if (traitsQuery.length > 0) setTraitsQuery([]);
	};

	const handleTraitDeselect = (e) => {
		const name = e.target.closest(".trait-badge").id;
		setTraitsQuery(traitsQuery.filter((item) => item.trait !== name));
	};

	const isCategorySelected = (category) => {
		return traitsQuery.some((combo) => combo.category === category);
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
						isCategorySelected={isCategorySelected}
						handleTraitSelect={handleTraitSelect}
						handleQueryInput={handleQueryInput}
						handleSearch={handleSearchSubmit}
						currentSearch={searchNameQuery}
					/>
				</Col>
				<div className="d-block d-lg-none">
					<CollectionSidebarContainer
						name={collection.name}
						traits={traitList}
						image={transformImageUrl(collection.avatar_url, "avatar")}
						isTraitSelected={isTraitSelected}
						isCategorySelected={isCategorySelected}
						handleTraitSelect={handleTraitSelect}
						handleQueryInput={handleQueryInput}
						handleSearch={handleSearchSubmit}
						currentSearch={searchNameQuery}
					/>
				</div>
				<Col
					xs={12}
					lg={10}
					className="collection-main-view h-100 pb-4"
					id="main-collection-view"
				>
					<CollectionBanner collection={collection} />
					<br />
					{metadataFlag && <MetadataWarning name={collection.name} />}
					<Row className="text-start row-cols-auto">
						<TraitBadges
							handleTraitDeselect={handleTraitDeselect}
							selectedTraits={traitsQuery}
						/>
					</Row>
					<Row className="my-2 justify-content-space-between">
						<Col className="text-muted text-start">
							<div>
								{roundNumbers(filteredItemsLength)}{" "}
								{parseInt(filteredItemsLength) === 1 ? "item" : "items"}
							</div>
						</Col>
						<Col className="text-end">
							<SortDropdown />
						</Col>
					</Row>
					<NftsGridContainer nfts={nftsToDisplay} collection={collection} />
					{renderLoadMoreSpinner()}
				</Col>
				<Outlet />
			</Row>
		</Container>
	);
}
