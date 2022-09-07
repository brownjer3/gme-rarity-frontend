import { Component } from "react";
import { SectionHeader } from "../Components/Components";
import Container from "react-bootstrap/Container";

class HowItWorks extends Component {
	render() {
		return (
			<Container className="text-start">
				<SectionHeader name="Rarity Scoring" />
				<p>SECTION 1</p>
				<SectionHeader name="Rarity Ranking" />
				<p>SECTION 2</p>
				<SectionHeader name="Metadata Inconsistencies" />
				<p>SECTION 3</p>
			</Container>
		);
	}
}

export default HowItWorks;
