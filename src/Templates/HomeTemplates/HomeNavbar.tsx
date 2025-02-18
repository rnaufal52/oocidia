import Icon from "Components/Icon"
import { MouseEventHandler, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from "assets/img/logo_full.webp"

const HomeNavbar = () => {
    const [expand, setExpand] = useState(false)

    const handleClick: MouseEventHandler<HTMLElement> = (e) => {
        const links = e.currentTarget.querySelectorAll(".nav-link")
        const target = e.target
        if (!(target instanceof HTMLElement)) return

        links.forEach((link) => {
            if (link.contains(target)) setExpand(false)
        })
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
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="OOCIDIA" height={100} />
                </NavLink>
                <Navbar.Toggle aria-controls="home-navbar" />
                <Navbar.Collapse id="home-navbar">
                    <Nav className="ms-auto flex-column" onClick={handleClick}>
                        <NavLink className="nav-link" to="/">
                            <span>Home</span>{" "}
                            <Icon name="arrow-right" className="ms-2" />
                        </NavLink>
                        <NavLink className="nav-link" to="/story-and-vision">
                            <span>Our Story and Vision</span>
                            <Icon name="arrow-right" className="ms-2" />
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/research-and-inovation"
                        >
                            <span>Research and Inovation</span>
                            <Icon name="arrow-right" className="ms-2" />
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/drug-development-programs"
                        >
                            <span>Drug Development Programs</span>
                            <Icon name="arrow-right" className="ms-2" />
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HomeNavbar
