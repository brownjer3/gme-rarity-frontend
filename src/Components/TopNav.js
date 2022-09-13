import { Component } from "react";
import { connect } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

class TopNav extends Component {
	state = {
		query: "",
		showOffCanvas: false,
	};

	onChange = (e) => {
		this.setState({ query: e.target.value });
	};

	handleSelect = (e) => {
		// e.target.reset();
		this.setState({ query: "", showOffCanvas: false });
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	// handleOffCanvasShow = () => {
	// 	this.setState({ showOffCanvas: true });
	// };

	handleOffCanvasClose = () => {
		this.setState({ showOffCanvas: false });
	};

	toggleOffCanvasShow = () => {
		this.setState((state) => ({
			showOffCanvas: !state.showOffCanvas,
		}));
	};

	filterNames = () => {
		if (this.state.query == "") {
			return;
		} else {
			return this.props.collections
				.filter((collection) => {
					return collection.name.toLowerCase().includes(this.state.query);
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
							onClick={this.handleSelect}
							className="collection-dropdown-item"
						>
							{collection.name}
						</ListGroup.Item>
					</Link>
				));
		}
	};

	render() {
		return (
			<Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
				<Container fluid>
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
					<Navbar.Toggle
						onClick={this.toggleOffCanvasShow}
						aria-controls="offcanvasNavbar-expand-lg"
					/>
					<Navbar.Offcanvas
						show={this.state.showOffCanvas}
						onHide={this.handleOffCanvasClose}
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
								onClick={this.handleOffCanvasClose}
							>
								<Offcanvas.Title
									// className="text-decoration-none text-white"
									id="offcanvasNavbarLabel-expand-lg"
								>
									Deep Fungible Value
								</Offcanvas.Title>
							</NavLink>
						</Offcanvas.Header>
						<Offcanvas.Body className="bg-dark">
							<Nav className="flex-grow-1 pe-3 navbar-links-section">
								<NavLink
									onClick={this.handleOffCanvasClose}
									to="/collections"
									className="nav-link"
								>
									All Collections
								</NavLink>
								<NavLink
									onClick={this.handleOffCanvasClose}
									to="/how-it-works"
									className="nav-link"
								>
									How It Works
								</NavLink>
								<NavLink
									onClick={this.handleOffCanvasClose}
									to="/contact"
									className="nav-link"
								>
									Get In Touch
								</NavLink>
							</Nav>
							<Form
								className="d-flex nav-search-bar d-none d-lg-block"
								onSubmit={this.handleSubmit}
							>
								<InputGroup>
									<InputGroup.Text
										id="basic-addon1"
										className="bg-dark text-white"
									>
										<FontAwesomeIcon icon={faMagnifyingGlass} />
									</InputGroup.Text>
									<Form.Control
										onChange={this.onChange}
										// onKeyUp={this.onChange}
										type="search"
										value={this.state.query}
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
										{this.filterNames()}
									</ListGroup>
								</InputGroup>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		);
	}
}

const mapStateToProps = (state) => {
	const collections = state.collections.data.map((collection) => ({
		name: collection.name,
		slug: collection.slug,
	}));

	return {
		collections: collections,
	};
};

export default connect(mapStateToProps)(TopNav);
