import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export const CardPlaceholder = () => {
	return (
		<Col className="text-white">
			<Card bg="dark" border="light" className="details-card h-100">
				<Card.Img
					className="trending-card-img-top"
					variant="top"
					src={process.env.PUBLIC_URL + "/images/card-img-placeholder.png"}
					alt="trending collection image placeholder"
				/>
				<Card.Body>
					<Placeholder as={Card.Title} animation="glow">
						<Placeholder xs={10} />
					</Placeholder>
					<Placeholder as={Card.Text} animation="glow">
						<Placeholder xs={9} />
						<Placeholder xs={8} />
					</Placeholder>
				</Card.Body>
			</Card>
		</Col>
	);
};

export const TableRowPlaceholder = (props) => {
	return (
		<tr>
			<td>{props.index + 1}</td>
			<td>
				<Placeholder animation="glow">
					<Placeholder xs={12} />
				</Placeholder>
			</td>
			<td>
				<Placeholder animation="glow">
					<Placeholder xs={4} />
				</Placeholder>
			</td>
			<td>
				<Placeholder animation="glow">
					<Placeholder xs={4} />
				</Placeholder>
			</td>
			<td>
				<Placeholder animation="glow">
					<Placeholder xs={4} />
				</Placeholder>
			</td>
			<td>
				<Placeholder animation="glow">
					<Placeholder xs={4} />
				</Placeholder>
			</td>
			<td>
				<Placeholder animation="glow">
					<Placeholder xs={4} />
				</Placeholder>
			</td>
		</tr>
	);
};
