import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {Col, Row, Image, ListGroup } from "react-bootstrap";
import Icon from "Components/Icon"
import farmer from "assets/img/farmer.png";
import vision from "assets/data/vision.json"
import blood from "assets/img/Babesia-inside-red-blood-cells-AdobeStock_300669761.jpeg"
import cell from "assets/img/T-Gondii-Microscopic-AdobeStock-780984904.jpeg"


const Home = () => {
    const { vision: visions } = vision
    return (
        <>
            <Helmet>
                <meta name="robots" content="index, follow" />
            </Helmet>
            <section id="GrounbreakingWork" className="mt-10">
                <Col lg={10} xxl={8} className="mx-auto">
                    <Row xs={1} lg={2} className="g-4">
                        <Col lg={8}>
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
                                <li>Innovative Solutions: A library of novel compounds designed specifically for
                                veterinary applications.</li>
                                <li>Broad-Spectrum Potential: A single platform addressing multiple diseases across
                                livestock and companion animals.</li>
                                <li>Proven Preclinical Success: Exceptional efficacy demonstrated in early studies
                                across multiple target diseases.</li>
                                <li>First-Mover Advantage: Targeting historically underserved markets with
                                groundbreaking therapies.</li>
                            </ul>

                            <p className="text-justify">
                                Our work is not just about innovation—it’s about delivering real-world impact. By reducing
                                mortality rates, improving productivity in livestock farming, and enhancing companion animal
                                health, Oocidia is creating solutions that benefit farmers, veterinarians, pet owners, and
                                society at large
                            </p>
                        </Col>
                        <Col className="text-center text-lg-end" lg={4}>
                            <Image
                                src={farmer}
                                alt="farmer"
                                style={{ maxWidth: "350px" }}
                            />
                        </Col>
                    </Row>
                </Col>
            </section>

            <section id="our-story" className="mt-10">
                <Col lg={10} xxl={8} className="mx-auto">
                    <Row xs={1} lg={2} className="g-4">
                        <Col lg={8}>
                            <h2 className="text-blue-200">
                                Our Story
                            </h2>
                            <p className="text-justify">
                                At Oocidia, we are on a mission to revolutionize veterinary medicine by addressing some of
                                the most neglected parasitic diseases affecting livestock and companion animals. Officially
                                founded in 2023 by a team of world-class scientists and innovators, the work and idea
                                behind Oocidia was actually born nearly a decade ago from a shared vision to tackle critical
                                gaps in animal health...
                            </p>
                            <Link
                                to="/story-and-vision" state={{ resetScroll: true }}
                                className="btn btn-outline-light rounded-pill hover-bg-blue-200 px-5 btn-our-groundbreaking-work d-inline-block animate__animated animate__fadeInUp"
                                style={{ animationDelay: "800ms" }}
                            >
                                See More
                            </Link>
                        </Col>
                        <Col className="text-center text-lg-end" lg={4}>
                            <Image
                                src={cell}
                                alt="cell"
                                style={{ maxWidth: "350px" }}
                            />
                        </Col>
                    </Row>
                </Col>
            </section>

            <section id="our-story" className="mt-10 mb-10">
                <Col lg={10} xxl={8} className="mx-auto">
                    <Row xs={1} lg={2} className="g-4">
                        <Col lg={8}>
                            <h2 className="text-blue-200">
                                Research and Innovation
                            </h2>
                            <p className="text-justify">
                                At Oocidia, innovation is at the core of our mission. We are dedicated 
                                to transforming veterinary medicine by addressing critical gaps in 
                                the treatment of parasitic diseases in livestock and companion animals. 
                                Through cutting-edge research, we have developed a proprietary 
                                platform that delivers first-in-class therapeutics...
                            </p>
                            <Link
                                to="/research-and-inovation" state={{ resetScroll: true }}
                                className="btn btn-outline-light rounded-pill hover-bg-blue-200 px-5 btn-our-groundbreaking-work d-inline-block animate__animated animate__fadeInUp"
                                style={{ animationDelay: "800ms" }}
                            >
                                See More
                            </Link>
                        </Col>
                        <Col className="text-center text-lg-end" lg={4}>
                            <Image
                                src={blood}
                                alt="blood"
                                style={{ maxWidth: "350px" }}
                            />
                        </Col>
                    </Row>
                </Col>
            </section>

            <section id="our-vision">
                <Col lg={10} xxl={8} className="mx-auto my-10">
                    <h2 className="text-blue-200">Our Vision</h2>

                    <ListGroup variant="flush">
                        {visions.map((vision, i) => (
                            <ListGroup.Item
                                className="bg-smoky-black text-light mb-4"
                                key={i}
                            >
                                <Icon name="check-circle-fill me-3 fs-5" />{" "}
                                {vision}
                            </ListGroup.Item>
                        ))}
                        <ListGroup.Item className="bg-smoky-black" />
                    </ListGroup>
                </Col>
            </section>
        </>
    );
};

export default Home;
