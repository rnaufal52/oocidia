import { Fragment } from "react/jsx-runtime"
import HomeNavbar from "Templates/HomeTemplates/HomeNavbar"
import Footer from "Templates/HomeTemplates/Footer"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
import useContentHeight from "Hooks/useContentHeight"

const HomeTemplates = () => {
    useContentHeight()

    return (
        <Fragment>
            <HomeNavbar />

            <Container className="main-content">
                <Outlet />
            </Container>

            <Footer />
        </Fragment>
    )
}

export default HomeTemplates
