import { useState, useEffect } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import logo from "assets/img/logo_full.webp"
import Icon from "Components/Icon"

const HomeNavbar = () => {
    const [scrolling, setScrolling] = useState(false)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)
    const location = useLocation()
    const isHomePage = location.pathname === "/"

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768)

        const handleScroll = () => {
            if (isDesktop && window.scrollY > 210) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize)
        }
    }, [isDesktop])

    return (
        <Navbar
            className={`home-navbar py-4 ${scrolling ? "scrolled" : ""}`}
            expand="lg"
            data-bs-theme="dark"
        >
            <Container fluid className="px-lg-5 align-items-start d-flex justify-content-between">
                {/* Flexbox 1: Dihapus di Mobile atau Selain Home */}
                {isDesktop && isHomePage && <div className="flex-grow-1"></div>}

                {/* Logo - Absolute di Desktop & Home, Normal di Mobile */}
                <NavLink
                    to="/"
                    className={`navbar-brand ${isDesktop && isHomePage ? "position-absolute start-50 translate-middle-x" : ""}`}
                >
                    <img src={logo} alt="OOCIDIA" className="navbar-logo" />
                </NavLink>

                <Navbar.Toggle aria-controls="home-navbar" />
                <Navbar.Collapse id="home-navbar">
                    <Nav className="ms-auto flex-column">
                        <NavLink className="nav-link" to="/">
                            <span>Home</span>{" "}
                            <Icon name="arrow-right" className="ms-2" />
                        </NavLink>
                        <NavLink className="nav-link" to="/story-and-vision">
                            <span>Our Story and Vision</span>
                            <Icon name="arrow-right" className="ms-2" />
                        </NavLink>
                        <NavLink className="nav-link" to="/research-and-inovation">
                            <span>Research and Inovation</span>
                            <Icon name="arrow-right" className="ms-2" />
                        </NavLink>
                        <NavLink className="nav-link" to="/drug-development-programs">
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
