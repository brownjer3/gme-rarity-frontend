import { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { useSelector } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";

const TopNav2 = () => {
	let location = useLocation();

	const [query, setQuery] = useState("");
	const [showOffCanvas, setShowOffCanvas] = useState(false);
	const [curPage, setCurPage] = useState(location.pathname);

	const collections = useSelector((state) =>
		state.collections.data.map((collection) => ({
			name: collection.name,
			slug: collection.slug,
			id: collection.id,
		}))
	);

	useEffect(() => {
		setCurPage(location.pathname);
	}, [location]);

	const handleMiniLogoShow = () => {
		if (curPage === "/") {
			return <></>;
		} else {
			return (
				<NavLink to="/" className="nav-link moon-logo-initials">
					<Navbar.Brand>
						<video
							width="60"
							height="45"
							autoPlay
							loop
							muted
							playsInline
							src={
								process.env.PUBLIC_URL +
								"/images/final.moon.initials only.24fps0001-0356.webm"
							}
							alt="Deep Fungible Value Small Logo - GameStop NFT Rarity Tool"
						>
							<source src="/videos/testing.webm" type="video/webm" />
							<source src="movie.ogg" type="video/ogg" />
							Your browser does not support the video tag.
						</video>
					</Navbar.Brand>
				</NavLink>
			);
		}
	};

	const onChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSelect = (e) => {
		setQuery("");
		setShowOffCanvas(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleOffCanvasClose = () => {
		setShowOffCanvas(false);
	};

	const toggleOffCanvasShow = () => {
		setShowOffCanvas((curr) => !curr);
	};

	const filterNames = () => {
		if (query == "") {
			return;
		} else {
			return collections
				.filter((collection) => {
					return collection.name.toLowerCase().includes(query);
				})
				.slice(0, 5)
				.map((collection) => (
					<Link
						reloadDocument
						className="text-white text-decoration-none"
						to={`/collections/${collection.slug}`}
					>
						<ListGroup.Item
							action
							key={collection.id}
							// value={collection.slug}
							onClick={handleSelect}
							className="collection-dropdown-item"
						>
							{collection.name}
						</ListGroup.Item>
					</Link>
				));
		}
	};

	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
			<Container>
				{handleMiniLogoShow()}
				<Navbar.Toggle
					onClick={toggleOffCanvasShow}
					aria-controls="offcanvasNavbar-expand-lg"
				/>
				<Navbar.Offcanvas
					show={showOffCanvas}
					onHide={handleOffCanvasClose}
					id="offcanvasNavbar-expand-lg"
					aria-labelledby="offcanvasNavbarLabel-expand-lg"
					placement="end"
				>
					<Offcanvas.Header
						closeButton
						closeVariant="white"
						className="bg-dark"
					>
						<NavLink
							to="/"
							className="text-decoration-none text-white"
							onClick={handleOffCanvasClose}
						>
							<Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
								<FontAwesomeIcon icon={faHouse} />
								<span className="ms-1"> Deep Fungible Value</span>
							</Offcanvas.Title>
						</NavLink>
					</Offcanvas.Header>
					<Offcanvas.Body className="bg-dark">
						<Nav className="flex-grow-1 pe-3 navbar-links-section">
							<NavLink
								onClick={handleOffCanvasClose}
								to="/collections"
								className="nav-link"
							>
								All Collections
							</NavLink>
							<NavLink
								onClick={handleOffCanvasClose}
								to="/how-it-works"
								className="nav-link"
							>
								How It Works
							</NavLink>
							<NavLink
								onClick={handleOffCanvasClose}
								to="/contact"
								className="nav-link"
							>
								Get In Touch
							</NavLink>
						</Nav>
						<Form
							className="d-flex nav-search-bar d-none d-lg-block"
							onSubmit={handleSubmit}
						>
							<InputGroup>
								<InputGroup.Text
									id="basic-addon1"
									className="bg-dark text-white"
								>
									<FontAwesomeIcon icon={faMagnifyingGlass} />
								</InputGroup.Text>
								<Form.Control
									onChange={onChange}
									// onKeyUp={this.onChange}
									type="search"
									value={query}
									placeholder="Find a Collection"
									aria-label="Search"
									aria-describedby="basic-addon1"
									className="bg-dark text-white rounded-end"
									data-bs-target="#navbarToggleExternalContent"
									aria-controls="navbarToggleExternalContent"
								/>
								<ListGroup
									id="navbarToggleExternalContent"
									className="collections-dropdown"
								>
									{filterNames()}
								</ListGroup>
							</InputGroup>
						</Form>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

// const mapStateToProps = (state) => {
// 	const collections = state.collections.data.map((collection) => ({
// 		name: collection.name,
// 		slug: collection.slug,
// 	}));

// 	return {
// 		collections: collections,
// 	};
// };

export default TopNav2;
