import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const HomeNavbar = () => {
    return (
        <Navbar
            className="py-4"
            expand="lg"
            bg="oxford-blue-2"
            data-bs-theme="dark"
            fixed="top"
        >
            <Container>
                <Navbar.Brand href="#" className="text-blue-300 fw-bold fs-4">
                    OOCIDIA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse>
                    <Nav className="me-auto gap-lg-4">
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
                    <Nav className="gap-lg-4">
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
