import Icon from "Components/Icon"
import { MouseEventHandler, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const HomeNavbar = () => {
    const [expand, setExpand] = useState(false)

    const handleClick: MouseEventHandler<HTMLElement> = (e) => {
        if (
            e.target instanceof HTMLAnchorElement &&
            e.target.classList.contains("nav-link")
        ) {
            setExpand(false)
        }
    }

    return (
        <Navbar
            className="home-navbar py-4"
            expand="lg"
            bg="smoky-black"
            data-bs-theme="dark"
            expanded={expand}
            onToggle={(e) => setExpand(e)}
        >
            <Container fluid className="px-lg-5 align-items-start">
                <NavLink
                    to="/"
                    className="navbar-brand text-blue-300 fw-bold fs-4"
                >
                    OOCIDIA
                </NavLink>
                <Navbar.Toggle aria-controls="home-navbar" />
                <Navbar.Collapse id="home-navbar">
                    <Nav
                        className="ms-auto flex-column text-end"
                        onClick={handleClick}
                    >
                        <NavLink className="nav-link" to="/">
                            Home <Icon name="arrow-right" className="ms-2" />
                        </NavLink>
                        <NavLink className="nav-link" to="/story-and-vision">
                            Our Story and Vision{" "}
                            <Icon name="arrow-right" className="ms-2" />
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/research-and-inovation"
                        >
                            Research and Inovation{" "}
                            <Icon name="arrow-right" className="ms-2" />
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/drug-development-programs"
                        >
                            Drug Development Programs{" "}
                            <Icon name="arrow-right" className="ms-2" />
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HomeNavbar
