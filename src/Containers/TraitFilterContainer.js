import { Component, PureComponent } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";

class TraitFilterContainer extends Component {
	handleNoTraits = () => {
		if (Object.keys(this.props.traits).length > 0) {
			return (
				<>
					<br />
					<h3>Traits</h3>
					<ListGroup variant="flush" className="text-start">
						{this.createTraitMenu(this.props.traits)}
					</ListGroup>
				</>
			);
		}
	};

	createTraits = (category, categoryName) => {
		if (this.props.isCategorySelected(categoryName)) {
			const selectedTrait = Object.keys(category).find((trait) =>
				this.props.isTraitSelected(categoryName, trait)
			);
			const count = category[selectedTrait];
			return (
				<ListGroup.Item
					// key={index.toString()}
					className="bg-transparent text-white d-flex justify-content-between"
				>
					<label htmlFor={selectedTrait}>
						{selectedTrait} ({count})
					</label>
					<input
						className="ms-1"
						id={selectedTrait}
						type="checkbox"
						value={`${categoryName}-${selectedTrait}`}
						checked={this.props.isTraitSelected(categoryName, selectedTrait)}
						onChange={this.props.handleTraitSelect}
					/>
				</ListGroup.Item>
			);
		} else {
			return Object.keys(category).map((trait, index) => {
				return (
					<ListGroup.Item
						key={index.toString()}
						className="bg-transparent text-white d-flex justify-content-between"
					>
						<label htmlFor={trait}>
							{trait} ({category[trait]})
						</label>
						<input
							className="ms-1"
							id={trait}
							type="checkbox"
							value={`${categoryName}-${trait}`}
							checked={this.props.isTraitSelected(categoryName, trait)}
							onChange={this.props.handleTraitSelect}
						/>
					</ListGroup.Item>
				);
			});
		}
	};

	createTraitMenu = (traits) => {
		return Object.keys(traits).map((category, index) => {
			return (
				<ListGroup.Item
					key={index.toString()}
					className="dropdown-btn bg-transparent text-white"
				>
					<span onClick={this.handleClick} className="trait-category">
						{category}
						<FontAwesomeIcon icon={faCaretDown} className="arrow mx-2" />
					</span>
					<ListGroup
						variant="flush"
						className="dropdown-container d-none text-start"
					>
						{this.createTraits(traits[category], category)}
					</ListGroup>
				</ListGroup.Item>
			);
		});
	};

	handleClick(e) {
		const dropdownContent = e.target
			.closest(".dropdown-btn")
			.querySelector(".dropdown-container");
		const dropdownArrow = e.target
			.closest(".dropdown-btn")
			.querySelector(".arrow");
		if (dropdownContent.classList.contains("d-none")) {
			dropdownArrow.classList.add("flip-icon");
			dropdownContent.classList.remove("d-none");
		} else {
			dropdownContent.classList.add("d-none");
			dropdownArrow.classList.remove("flip-icon");
		}
	}

	render() {
		return (
			<div>
				<Image
					fluid
					thumbnail
					className="ms-2 mb-2"
					src={this.props.image}
					alt={`GameStop NFT Collection Avatar - ${this.props.name}`}
				/>
				<h3>Find your NFT</h3>
				<Form className="d-flex px-2" onSubmit={this.props.handleSearch}>
					<Form.Control
						type="text"
						placeholder="Name/ID.."
						className="me-2 bg-transparent text-white"
						aria-label="Search"
						onChange={this.props.handleQueryInput}
						value={this.props.currentSearch}
					/>
					<Button type="submit" variant="outline-danger">
						Search
					</Button>
				</Form>
				{this.handleNoTraits()}
			</div>
		);
	}
}

export default TraitFilterContainer;
