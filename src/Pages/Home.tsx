import useBg from "Hooks/useBg"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const Home = () => {
    useBg()

    return (
        <>
            <Helmet>
                <meta name="robots" content="index, follow" />
            </Helmet>

            <section id="home" className="text-center">
                <h1 className="fw-bold animate__animated animate__fadeInUp">
                    <span className="text-blue-200 ">Animal Health,</span>
                    <br className="d-lg-none" /> Human Futures
                    <br />
                    Connected by
                    <br className="d-lg-none" />{" "}
                    <span className="text-blue-200 ">Science</span>
                    <br />
                    <span className="text-blue-200 ">Driven</span> by Action.
                </h1>

                <Link
                    to="/story-and-vision"
                    className="btn btn-outline-light rounded-pill hover-bg-blue-200 px-5 mt-5 btn-our-groundbreaking-work d-inline-block animate__animated animate__fadeInUp"
                    style={{ animationDelay: "800ms" }}
                >
                    Our Groundbreaking Work
                </Link>
            </section>
        </>
    )
}

export default Home
