import { createBrowserRouter } from "react-router-dom"
import HomeTemplates from "Templates/HomeTemplates"
import Home from "Pages/Home"
import Error from "Errors/Error"
import StoryAndVision from "Pages/StoryAndVision"
import ResearchAndInovation from "Pages/ResearchAndInovation"
import DrugDevelopmentPrograms from "Pages/DrugDevelopmentPrograms"

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
            }
        ]
    }
])

export default routes
