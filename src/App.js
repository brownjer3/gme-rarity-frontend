import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollections } from "./Store/Slices/collectionsSlice";
// import TopNav from "./Components/TopNav";
import TopNav2 from "./Components/TopNav2";
import Footer from "./Components/Footer";
import HomeContainer from "./Containers/HomeContainer";
import ContactContainer from "./Containers/ContactContainer";
import AllCollectionsContainer from "./Containers/AllCollectionsContainer";
// import CollectionContainer from "./Containers/CollectionContainer";
import CollectionContainer2 from "./Containers/CollectionContainer2";
import NftModalContainer from "./Containers/NftModalContainer";
import HowItWorks from "./Containers/HowItWorks";
import { NotFound, LoadingScreen, Stars } from "./Components/Components";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-241303790-1";
ReactGA.initialize(TRACKING_ID);

const App = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.collections);

	let location = useLocation();
	const background = location.state && location.state.background;

	useEffect(() => {
		dispatch(fetchCollections());
	}, []);

	const loadingContent = () => {
		return <LoadingScreen />;
	};

	const appContent = () => {
		return (
			<>
				<TopNav2 />
				<Stars />
				<Routes location={background || location}>
					<Route path="/" element={<HomeContainer />} />
					<Route path="collections" element={<AllCollectionsContainer />} />
					<Route
						path="collections/:collectionSlug"
						element={<CollectionContainer2 />}
					>
						<Route path=":nftId" element={<NftModalContainer />} />
					</Route>
					<Route path="how-it-works" element={<HowItWorks />} />
					<Route path="contact" element={<ContactContainer />} />
					<Route path="*" element={<NotFound />} />
				</Routes>

				{background && (
					<Routes>
						<Route
							path="/collections/:collectionSlug/:nftId"
							element={<NftModalContainer />}
						/>
					</Routes>
				)}
				<Footer />
			</>
		);
	};

	return (
		<div className="App bg-dark text-white d-flex flex-column min-vh-100">
			{loading ? loadingContent() : appContent()}
			{/* {loading ? loadingContent() : "whats happening"} */}
		</div>
	);
};

export default App;
