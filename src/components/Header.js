import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './../image/logo-search-grid-1x.png';

function Header() {
    return (
        <div>
            <Navbar className="back-col" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={'/'}>
                        <div className="photo">
                        <img src={logo} width={120} alt="logo" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="text-primary" as={Link} to={'/'}>Home</Nav.Link>
                            <Nav.Link className="text-primary" as={Link} to={'/Experience'}>Experience</Nav.Link>
                            <Nav.Link className="text-primary" as={Link} to={'/Education'}>Education</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}


export default Header;