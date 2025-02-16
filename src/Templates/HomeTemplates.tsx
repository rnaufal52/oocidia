import { Fragment } from "react/jsx-runtime"
import { useLocation } from "react-router-dom"
import HomeNavbar from "Templates/HomeTemplates/HomeNavbar"
import Footer from "Templates/HomeTemplates/Footer"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
import useContentHeight from "Hooks/useContentHeight"
import Carousele from "Pages/Home/Carousele"
import ScrollToTop from "../Hooks/resetScroll.tsx";

const HomeTemplates = () => {
    useContentHeight()
    const location = useLocation()
    const isBaseRoute = location.pathname === "/"

    return (
        <Fragment>
            <ScrollToTop />
            <HomeNavbar />
            {isBaseRoute && <Carousele />}
            <Container className="main-content">
                <Outlet />
            </Container>
            <Footer />
        </Fragment>
    )
}

export default HomeTemplates
