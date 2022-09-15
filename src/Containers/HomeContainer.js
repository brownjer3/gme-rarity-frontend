import { Component } from "react";
import TrendingContainer from "../Containers/TrendingContainer";
import HomeBanner from "../Components/HomeBanner";
import { SectionHeader } from "../Components/Components";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

class HomeContainer extends Component {
	componentDidMount() {
		ReactGA.pageview(window.location.pathname);
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Container fluid>
				<HomeBanner />
				<SectionHeader name="Trending Collections" />
				<TrendingContainer />
				<Link to="/collections">
					<Button className="my-4" variant="outline-light" size="lg">
						Explore All Collections
					</Button>
				</Link>
			</Container>
		);
	}
}

export default HomeContainer;
