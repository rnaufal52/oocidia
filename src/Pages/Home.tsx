import useBg from "Hooks/useBg"
import { Link } from "react-router-dom"

const Home = () => {
    useBg()

    return (
        <section id="home" className="text-center">
            <h1 className="fw-bold">
                <span className="text-blue-200">Animal Health</span>,{" "}
                <br className="d-lg-none" /> Human Futures
                <br />
                Connected by <br className="d-lg-none" />{" "}
                <span className="text-blue-200">Science</span>
                <br />
                <span className="text-blue-200">Driven</span> by action.
            </h1>

            <Link
                to="/story-and-vision"
                className="btn btn-outline-light rounded-pill hover-button-blue-200 px-5 mt-5"
            >
                Our Groundbreaking Work
            </Link>
        </section>
    )
}

export default Home
