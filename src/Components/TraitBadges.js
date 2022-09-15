import { PureComponent } from "react";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

class TraitBadges extends PureComponent {
	createNameFilterBadge = (nameQuery) => {
		return (
			<Col className="my-2">
				<Badge bg="light" text="dark">
					<span
						className="d-flex align-items-center trait-badge"
						id={nameQuery}
					>
						Name/ID: {nameQuery}
						<button
							type="button"
							className="btn-close btn-xs ms-1"
							aria-label="Close"
							onClick={this.props.handleResetQuery}
						></button>
					</span>
				</Badge>
			</Col>
		);
	};

	createBadges = (traits) => {
		return traits.map((combo) => {
			return (
				<Col className="my-2">
					<Badge bg="light" text="dark">
						<span
							className="d-flex align-items-center trait-badge"
							id={combo.trait}
						>
							{combo.category}: {combo.trait}
							<button
								type="button"
								className="btn-close btn-xs ms-1"
								aria-label="Close"
								onClick={this.props.handleTraitDeselect}
							></button>
						</span>
					</Badge>
				</Col>
			);
		});
	};

	render() {
		if (this.props.selectedTraits.length > 0) {
			return (
				<>
					<Col className="my-2 fw-bold">Active Filters: </Col>
					{this.createBadges(this.props.selectedTraits)}
				</>
			);
		} else if (this.props.searchNameQuery.length > 0) {
			return (
				<>
					<Col className="my-2 fw-bold">Active Filters: </Col>
					{this.createNameFilterBadge(this.props.searchNameQuery)}
				</>
			);
		} else {
			return <></>;
		}
	}
}

export default TraitBadges;
