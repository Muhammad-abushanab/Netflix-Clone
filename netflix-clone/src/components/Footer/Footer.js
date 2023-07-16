import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import theme from '../../theme/theme';

const Footer = () => {
    return (
        <footer className="text-white" style={{ marginTop: "70px", backgroundColor: theme.palette.darkBlue }}>
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <h5 style={{ padding: "7px 5px" }}>Contact</h5>
                        <p>Amman , Jordan</p>
                        <p>Email: Muhammad.7jehad@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
