import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class TestLayout extends Component {
	render() {
		return (
			<Container className="test-container border">
				<Row className="border border-secondary w-100 h-100">
					<Col lg={2} className="border border-primary h-100">
						sidebar menu (col)
					</Col>
					<Col lg={10} className="border border-success h-100">
						<div>banner card (div)</div>
						<Row className="border border-info">
							<Col className="border border-danger">
								filtered items count (col)
							</Col>
							<Col className="border border-warning">dropdown menu (col)</Col>
						</Row>
						<Row>trait badges (row)</Row>
						<div>grid container (div)</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default TestLayout;
