import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import routes from "routes/routes"
import "assets/css/index.css"

const root = document.getElementById("root")!
createRoot(root).render(<RouterProvider router={routes} />)
