import { Fragment } from "react/jsx-runtime"
import { useLocation } from "react-router-dom"
import HomeNavbar from "Templates/HomeTemplates/HomeNavbar"
import Footer from "Templates/HomeTemplates/Footer"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
import useContentHeight from "Hooks/useContentHeight"
import HomeCarousel from "Components/HomeCarousel.tsx"
import ScrollToTop from "Components/resetScroll.tsx";

const HomeTemplates = () => {
    useContentHeight()
    const location = useLocation()
    const isBaseRoute = location.pathname === "/"

    return (
        <Fragment>
            <ScrollToTop />
            <HomeNavbar />
            {isBaseRoute && <HomeCarousel />}
            {/* <CustomCarousel /> */}
            <Container className="main-content">
                <Outlet />
            </Container>
            <Footer />
        </Fragment>
    )
}

export default HomeTemplates
