import { Component } from "react";
import { SectionHeader } from "../Components/Components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

class ContactContainer extends Component {
	formSparkUrl = "https://submit-form.com/ijPyx2Vr";

	state = {
		name: "",
		email: "",
		message: "",
		formSubmitted: false,
	};

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	handleOnSubmit = async (event) => {
		event.preventDefault();

		try {
			const res = await fetch(this.formSparkUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(this.state),
			});
			console.log(res);
			this.setState({ formSubmitted: true });
		} catch (error) {
			alert(error);
		}
	};

	resetForm = () => {
		this.setState({
			name: "",
			email: "",
			message: "",
			formSubmitted: false,
		});
	};

	render() {
		return (
			<Container fluid>
				<SectionHeader name="Get In Touch" />
				<Alert
					variant="success"
					show={this.state.formSubmitted}
					onClose={this.resetForm}
					dismissible
				>
					Message Sent!
				</Alert>
				<Form className="contact-form" onSubmit={this.handleOnSubmit}>
					<Row xs={1} lg={2}>
						<Col className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control
								name="name"
								value={this.state.name}
								type="text"
								placeholder="Michael Scott"
								className="text-white bg-transparent"
								onChange={(e) => {
									this.setState({ name: e.target.value });
								}}
							/>
						</Col>
						<Col className="mb-3">
							<Form.Label>Email</Form.Label>
							<Form.Control
								name="email"
								value={this.state.email}
								type="email"
								placeholder="michael@dundermifflin.com"
								className="text-white bg-transparent"
								onChange={(e) => {
									this.setState({ email: e.target.value });
								}}
							/>
						</Col>
					</Row>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Message</Form.Label>
						<Form.Control
							value={this.state.message}
							name="message"
							as="textarea"
							rows={3}
							placeholder="I’m not superstitious but I am a little stitious."
							className="text-white bg-transparent"
							onChange={(e) => {
								this.setState({ message: e.target.value });
							}}
						/>
					</Form.Group>
					<Button
						variant="outline-danger"
						type="submit"
						className="float-end mb-4"
					>
						Send
					</Button>
				</Form>
			</Container>
		);
	}
}

export default ContactContainer;
