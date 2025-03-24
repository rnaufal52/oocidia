import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {Col, Row, Image} from "react-bootstrap";
import farmer from "assets/img/farmer.png";
import scientist_calf from "assets/img/scientist_calf.png"
import bulb from "assets/img/bulb.png"


const Home = () => {
    return (
        <>
            <Helmet>
                <meta name="robots" content="index, follow" />
            </Helmet>
            <section id="GrounbreakingWork" className="mt-10">
                <Row lg={10} className="g-5 justify-content-center">
                    <Col lg={5}>
                        <h2 className="text-blue-200">
                            Our Groundbreaking Work
                        </h2>
                        <p className="text-justify">
                            Oocidia is redefining veterinary medicine with a proprietary platform that addresses critical
                            unmet needs across seven major parasitic diseases: cryptosporidiosis, coccidiosis,
                            babesiosis, theileriosis, toxoplasmosis, piroplasmosis, and cystoisosporiasis. These
                            diseases cause billions of dollars in economic losses annually while impacting animal
                            welfare globally.
                        </p>

                        <ul>
                            <li>Innovative Solutions: A library of novel compounds designed specifically for veterinary applications.</li>
                            <li>Broad-Spectrum Potential: A single platform addressing multiple diseases across livestock and companion animals.</li>
                            <li>Proven Preclinical Success: Exceptional efficacy demonstrated in early studies across multiple target diseases.</li>
                            <li>First-Mover Advantage: Targeting historically underserved markets with groundbreaking therapies.</li>
                        </ul>

                        <p className="text-justify">
                            Our work is not just about innovation—it’s about delivering real-world impact. By reducing
                            mortality rates, improving productivity in livestock farming, and enhancing companion animal
                            health, Oocidia is creating solutions that benefit farmers, veterinarians, pet owners, and
                            society at large
                        </p>
                    </Col>
                    <Col lg={5} className="d-flex align-items-center justify-content-center">
                        <Image
                            src={farmer}
                            alt="farmer"
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                        />
                    </Col>
                </Row>
            </section>


            <section id="our-story" className="mt-10">
                    <Row lg={8} className="g-4 justify-content-center align-items-center">
                        <Col lg={5}>
                            <h2 className="text-blue-200">
                                Our Story
                            </h2>
                            <p className="text-justify">
                                At Oocidia, we are on a mission to revolutionize veterinary medicine by addressing some of
                                the most neglected parasitic diseases affecting livestock and companion animals. Officially
                                founded in 2023...
                            </p>
                            <Link
                                to="/story-and-vision" state={{ resetScroll: true }}
                                className="btn btn-outline-light rounded-pill hover-bg-blue-200 px-5 btn-our-groundbreaking-work d-inline-block animate__animated animate__fadeInUp"
                                style={{ animationDelay: "800ms" }}
                            >
                                See More
                            </Link>
                        </Col>
                        <Col lg={3}>
                            <Image
                                src={bulb}
                                alt="bulb"
                                className="w-100"
                                style={{ transform: "scaleX(-1)", objectFit: "cover" }}
                            />
                        </Col>
                    </Row>
            </section>

            <section id="our-story" className="mt-10 mb-10">
                    <Row lg={8} className="g-4 justify-content-center align-items-center">
                        <Col lg={5}>
                            <h2 className="text-blue-200">
                                Research and Innovation
                            </h2>
                            <p className="text-justify">
                                At Oocidia, innovation is at the core of our mission. We are dedicated 
                                to transforming veterinary medicine by addressing critical gaps in 
                                the treatment of parasitic...
                            </p>
                            <Link
                                to="/research-and-inovation" state={{ resetScroll: true }}
                                className="btn btn-outline-light rounded-pill hover-bg-blue-200 px-5 btn-our-groundbreaking-work d-inline-block animate__animated animate__fadeInUp"
                                style={{ animationDelay: "800ms" }}
                            >
                                See More
                            </Link>
                        </Col>
                        <Col className="text-center text-lg-end h-100" lg={3}>
                            <Image
                                src={scientist_calf}
                                alt="scientist_calf"
                                className="w-100 h-100"
                                style={{ objectFit: "cover" }}
                            />
                        </Col>
                    </Row>
            </section>
        </>
    );
};

export default Home;
