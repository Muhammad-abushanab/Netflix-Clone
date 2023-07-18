import { Navbar, Container, Nav } from "react-bootstrap";
import theme from "../../theme/theme";
import './navbar.css'
function NavBar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                            width="300"
                            height="120"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{ fontSize: theme.fontSize.midSize }} href="/">Home</Nav.Link>
                            <Nav.Link style={{ fontSize: theme.fontSize.midSize }} href="/favlist">Favirote</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar;