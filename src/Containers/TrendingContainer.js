import React, { Component } from "react";
import { connect } from "react-redux";
import TrendingCollectionCard from "../Components/TrendingCollectionCard";
import { CardPlaceholder } from "../Components/Placeholders";
import Row from "react-bootstrap/Row";

class TrendingContainer extends Component {
	makeCollectionCards = () => {
		if (this.props.topFive.length === 0) {
			return Array.from({ length: 5 }).map((_, index) => {
				return <CardPlaceholder key={index.toString()} />;
			});
		} else {
			return this.props.topFive.map((collection, index) => {
				return (
					<TrendingCollectionCard
						key={index.toString()}
						collection={collection}
					/>
				);
			});
		}
	};

	render() {
		return (
			<Row sm={1} md={2} lg={5} className="g-4 m-4">
				{this.makeCollectionCards()}
			</Row>
		);
	}
}

const mapStateToProps = (state) => {
	const topFive = state.collections.data.slice(0, 5);
	return {
		topFive: topFive,
		// loading: state.loading
	};
};

export default connect(mapStateToProps)(TrendingContainer);
