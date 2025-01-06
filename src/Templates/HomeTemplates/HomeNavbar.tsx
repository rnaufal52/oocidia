import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router"

const HomeNavbar = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#">OOCID</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/about-us">
                            About Us
                        </NavLink>
                        <NavLink className="nav-link" to="/our-science">
                            Our Science
                        </NavLink>
                        <NavLink className="nav-link" to="/pipeline">
                            Pipeline
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/news">
                            News
                        </NavLink>
                        <NavLink className="nav-link" to="/careers">
                            Careers
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HomeNavbar
