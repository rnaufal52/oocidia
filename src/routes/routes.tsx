import { createBrowserRouter } from "react-router-dom"
import HomeTemplates from "Templates/HomeTemplates"
import Home from "Pages/Home"
import Error from "Errors/Error"
import StoryAndVision from "Pages/StoryAndVision"
import ResearchAndInovation from "Pages/ResearchAndInovation"
import DrugDevelopmentPrograms from "Pages/DrugDevelopmentPrograms"
import GetInTouch from "Pages/GetInTouch"
import PrivacyAndData from "Pages/PrivacyAndData"
import TermsOfUse from "Pages/TermsOfUse"

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
                path: "story-and-vision",
                element: <StoryAndVision />
            },
            {
                path: "research-and-inovation",
                element: <ResearchAndInovation />
            },
            {
                path: "drug-development-programs",
                element: <DrugDevelopmentPrograms />
            },
            {
                path: "get-in-touch",
                element: <GetInTouch />
            },
            {
                path: "privacy-and-data",
                element: <PrivacyAndData />
            },
            {
                path: "term-of-use",
                element: <TermsOfUse />
            }
        ]
    }
])

export default routes
