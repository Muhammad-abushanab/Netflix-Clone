import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStar } from '@fortawesome/free-solid-svg-icons';
import theme from "../../theme/theme";
import './navbar.css'
function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: theme.palette.darkBlue, height: "100px" }}>
                <Container >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                        <Nav>
                            <Nav.Link className="text-light" style={{ fontSize: theme.fontSize.midSize }} href="/">
                                <FontAwesomeIcon style={{ marginRight: "7px" }} icon={faHouse} />Home</Nav.Link>
                            <Nav.Link className="text-light" style={{ fontSize: theme.fontSize.midSize }} href="/">
                                <FontAwesomeIcon icon={faStar} /> FavList
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar;