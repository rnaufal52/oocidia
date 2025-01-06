import { createBrowserRouter } from "react-router-dom"
import HomeTemplates from "Templates/HomeTemplates"
import AboutUs from "Pages/AboutUs"
import Careers from "Pages/Careers"
import Home from "Pages/Home"
import News from "Pages/News"
import OurScience from "Pages/OurScience"
import Pipeline from "Pages/Pipeline"
import Error from "Errors/Error"

const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <HomeTemplates />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about-us",
                element: <AboutUs />
            },
            {
                path: "our-science",
                element: <OurScience />
            },
            {
                path: "pipeline",
                element: <Pipeline />
            },
            {
                path: "news",
                element: <News />
            },
            {
                path: "careers",
                element: <Careers />
            }
        ]
    }
])

export default routes
