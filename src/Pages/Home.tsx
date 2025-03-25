import { Helmet } from "react-helmet-async";
import {Col, Row, Image} from "react-bootstrap";
import farmer from "assets/img/farmer.png";
import scientist_calf from "assets/img/scientist_calf.png"
import bulb from "assets/img/bulb.png"
import ListMore from "Components/ListMore";


const Home = () => {
    return (
        <>
            <Helmet>
                <meta name="robots" content="index, follow" />
            </Helmet>

            {/* our ground breaking work */}
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

            {/* List Pages Component */}
            <ListMore
                id="our-story"
                title="Our Story"
                text="At Oocidia, we are on a mission to revolutionize veterinary medicine by addressing some of the most neglected parasitic diseases affecting livestock and companion animals. Officially founded in 2023..."
                link="/story-and-vision"
                linkText="See More"
                image={bulb}
                imageAlt="Bulb"
                imageStyle={{ transform: "scaleX(-1)" }}
            />

            <ListMore
                id="research-and-innovation"
                title="Research and Innovation"
                text="At Oocidia, innovation is at the core of our mission. We are dedicated to transforming veterinary medicine by addressing critical gaps in the treatment of parasitic..."
                link="/research-and-innovation"
                linkText="See More"
                image={scientist_calf}
                imageAlt="Scientist with Calf"
            />
        </>
    );
};

export default Home;
