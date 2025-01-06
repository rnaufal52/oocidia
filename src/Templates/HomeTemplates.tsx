import { Fragment } from "react/jsx-runtime"
import HomeNavbar from "Templates/HomeTemplates/HomeNavbar"
import Footer from "Templates/HomeTemplates/Footer"
import { Outlet } from "react-router-dom"

const HomeTemplates = () => {
    return (
        <Fragment>
            <HomeNavbar />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default HomeTemplates
