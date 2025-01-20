import { Image } from "react-bootstrap"
import bg from "assets/img/hero-image.png"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <section className="text-center">
            <div
                className="d-none d-lg-block position-relative"
                style={{ height: "150px" }}
            >
                <Image
                    src={bg}
                    fluid
                    className="position-absolute top-0 start-50 translate-middle"
                />
            </div>

            <h1 className="fw-bold">
                <span className="text-blue-300 fade-in-bottom">Advancing</span>{" "}
                Animal <br className="d-lg-none" /> Health,
                <span className="text-blue-300">
                    {" "}
                    One <br className="d-lg-none" /> Innovation
                </span>{" "}
                <br className="d-none d-lg-block" /> at a{" "}
                <br className="d-lg-none" /> Time.
            </h1>
            <p>
                Oocidia is dedicated to transforming animal health through
                cutting-edge science and sustainable solutions. Based in
                <br className="d-none d-lg-block" />
                Singapore, we are innovating the future of veterinary medicine.
            </p>

            <Link
                to="/story-and-vision"
                className="btn btn-outline-light rounded-pill px-5 mt-5"
            >
                Learn More About Us
            </Link>
        </section>
    )
}

export default Home
