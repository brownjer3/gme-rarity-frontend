import { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import CollectionTableRow from "../Components/CollectionTableRow";
import { TableRowPlaceholder } from "../Components/Placeholders";
import { SectionHeader } from "../Components/Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSort,
	faCaretDown,
	faSortUp,
} from "@fortawesome/free-solid-svg-icons";

class AllCollectionsContainer extends Component {
	state = {
		collections: [...this.props.collections],
		sortOptions: [
			"Collection",
			"Total Supply",
			"Floor Price",
			"Lifetime Volume",
			"30-day Volume",
			"24-hr Volume",
		],
		sortTriggers: {
			Collection: "name",
			"Total Supply": "total_items",
			"Floor Price": "floor_price",
			"Lifetime Volume": "total_volume",
			"30-day Volume": "month_volume",
			"24-hr Volume": "day_volume",
		},
		sortSelection: "Lifetime Volume",
		sortOrder: "Descending",
	};

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	sortTable = (sortBy) => {
		let sorted = [...this.props.collections];

		const sortValue = this.state.sortTriggers[sortBy];

		if (sortValue === "name") {
			return sorted.sort((a, b) => {
				const nameA = a[sortValue].toUpperCase();
				const nameB = b[sortValue].toUpperCase();
				return nameA < nameB ? -1 : 1;
			});
		} else {
			return sorted.sort((a, b) => {
				return parseInt(b[sortValue]) - parseInt(a[sortValue]);
			});
		}
		// } else {
		// 	return sorted.sort((a, b) => {
		// 		return b[sortValue] - a[sortValue];
		// 	});
		// }
	};

	handleSortChange = (e) => {
		const name =
			e.target.previousSibling || e.target.parentElement.previousSibling;
		if (this.state.sortSelection == name.id) {
			if (this.state.sortOrder == "Descending") {
				this.setState((prevState) => ({
					sortOrder: "Ascending",
					collections: [...prevState.collections].reverse(),
				}));
			} else {
				this.setState((prevState) => ({
					sortOrder: "Descending",
					collections: [...prevState.collections].reverse(),
				}));
			}
		} else {
			const sortedCollections = this.sortTable(name.id);
			this.setState({
				collections: sortedCollections,
				sortSelection: name.id,
				sortOrder: "Descending",
			});
		}
	};

	handleSortIcon = (name) => {
		if (this.state.sortSelection == name) {
			if (this.state.sortOrder == "Descending") {
				return (
					<FontAwesomeIcon
						icon={faCaretDown}
						className="mx-2 text-warning"
						onClick={this.handleSortChange}
					/>
				);
			} else {
				return (
					<FontAwesomeIcon
						icon={faSortUp}
						className="mx-2 text-warning"
						onClick={this.handleSortChange}
					/>
				);
			}
		} else {
			return (
				<FontAwesomeIcon
					icon={faSort}
					className="mx-2"
					onClick={this.handleSortChange}
				/>
			);
		}
	};

	makeTableHeaders = () => {
		return this.state.sortOptions.map((option, index) => {
			if (this.state.sortSelection === option) {
				return (
					<th
						key={index.toString()}
						className={option === "Collection" ? "collection-column" : null}
					>
						<span className="name text-warning" id={option}>
							{option}
						</span>
						{this.handleSortIcon(option)}
					</th>
				);
			} else if (option === "Collection") {
				return (
					<th key={index.toString()} style={{ width: "35%" }}>
						<span className="name" id={option}>
							{option}
						</span>
						{this.handleSortIcon(option)}
					</th>
				);
			} else {
				return (
					<th key={index.toString()}>
						<span className="name" id={option}>
							{option}
						</span>
						{this.handleSortIcon(option)}
					</th>
				);
			}
		});
	};

	makeTableRows = () => {
		if (this.state.collections.length === 0) {
			return Array.from({ length: 50 }).map((_, index) => {
				return <TableRowPlaceholder index={index} key={index.toString()} />;
			});
		} else {
			return this.state.collections.map((collection, index) => {
				return (
					<CollectionTableRow
						key={collection.id}
						index={index}
						slug={collection.slug}
						name={collection.name}
						totalVolume={collection.total_volume}
						monthVolume={collection.month_volume}
						dayVolume="TBD"
						collectionSize={collection.total_items}
						image={collection.avatar_url}
						floorPrice={collection.floor_price}
					/>
				);
			});
		}
	};

	render() {
		return (
			<Container className="">
				<SectionHeader name="All Collections" />
				<small className="text-muted ">
					*Currently displaying the top 50 collections based on lifetime volume,
					more to come
				</small>
				<Table
					striped
					bordered
					responsive
					hover
					className="align-middle mt-3"
					variant="dark"
				>
					<thead className="align-middle">
						<tr>
							<th>#</th>
							{this.makeTableHeaders()}
						</tr>
					</thead>
					<tbody>{this.makeTableRows()}</tbody>
				</Table>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		collections: state.collections.data,
		loading: state.collections.loading,
	};
};

export default connect(mapStateToProps)(AllCollectionsContainer);
