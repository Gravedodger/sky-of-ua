import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Spinner from "../../components/Spinner";
import Highlight from "../../components/Highlight";

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		isAuthenticated && (
			<Container className="mb-5">
				<Row className="align-items-center profile-header mb-5 text-center text-md-left">
					<Col md={2}>
						<img
							src={user.picture}
							alt="Profile"
							className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
						/>
					</Col>

					<Col md>
						<h2>{user.name}</h2>
						<p className="lead text-muted">{user.email}</p>
					</Col>
				</Row>
				<Row>
					<Highlight>{JSON.stringify(user, null, 2)}</Highlight>
				</Row>
			</Container>
		)
	);
};

export default withAuthenticationRequired(ProfileComponent, {
	onRedirecting: () => <Spinner />,
})
