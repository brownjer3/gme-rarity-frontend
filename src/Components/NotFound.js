import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';

class NotFound extends Component {
    render() {
        return(
            <Container>
                <h1>PAGE NOT FOUND!</h1>
                <Image width="30%" src='https://m.media-amazon.com/images/I/81nho65ESrL._AC_SY879_.jpg' />
            </Container>
        )
    }
}
export default NotFound;