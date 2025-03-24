import TitleDivider from "Components/TitleDivider"
import { Col, Image, Row, Accordion  } from "react-bootstrap"
import { Fragment } from "react/jsx-runtime"
import scientis_animals from "assets/img/scientis_animals.png"
import our_research from "assets/img/our-research.png"
import our_core_value from "assets/img/our-core-vallue.png"
import logo_tab from "assets/img/logo_tab.png"
import { Helmet } from "react-helmet-async"

const ResearchAndInovation = () => {
    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <Fragment>
                <Row xs={1} lg={2} className="mt-4 g-6">
                    <Col lg={7}>
                        <TitleDivider className="mb-4">
                            Research and Innovation at Oocidia
                        </TitleDivider>

                        <p className="animate__animated animate__fadeInLeft me-4">
                            At Oocidia, innovation is at the core of our mission. 
                            We are dedicated to transforming veterinary medicine 
                            by addressing critical gaps in the treatment of
                            parasitic diseases in livestock and companion 
                            animals. Through cutting-edge research, we have developed 
                            a proprietary platform that delivers first-in-class
                            therapeutics designed to meet the unique challenges 
                            of veterinary medicine. Our work is driven by a 
                            commitment to improving animal health, enhancing 
                            productivity in farming, and creating sustainable 
                            solutions for a better future.
                        </p>
                    </Col>

                    <Col lg={5}>
                        <Image
                            src={scientis_animals}
                            alt="scientis_animals"
                            style={{ maxHeight: "500px" }}
                            className="rounded-5 object-fit-cover w-100 animate__animated animate__fadeInRight"
                        />
                    </Col>
                </Row>
                <Col lg={10} xxl={8} className="mx-auto mt-6">
                    <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
                        Our Research Focus
                    </h2>
                    <Image
                            src={our_research}
                            alt="our_research"
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                            />           
                </Col>

                <Col lg={10} xxl={8} className="mx-auto mt-6">
                    <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
                        Innovating Animal Health: Science, Collaboration, and Sustainability
                    </h2>
                    <Accordion defaultActiveKey="1" flush>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h4>
                                    <span className="me-3">
                                        <Image
                                            src={logo_tab}
                                            alt="logo_tab"
                                            style={{ maxWidth:"40px"}}
                                        />  
                                    </span>
                                    Our Approach to Innovation
                                </h4>
                            </Accordion.Header>
                            <Accordion.Body>
                                At Oocidia, our approach to innovation is built on three pillars: scientific rigor,
                                practical application, and collaboration. By leveraging decades of expertise in
                                veterinary drug development, we have created a robust pipeline of therapeutics that
                                address unmet needs in animal health. Our proprietary methods enable us to
                                accelerate discovery while maintaining the highest standards of safety and efficacy.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <h4>
                                    <span className="me-3">
                                        <Image
                                            src={logo_tab}
                                            alt="logo_tab"
                                            style={{ maxWidth:"40px"}}
                                        />  
                                    </span>
                                    Collaborative Partnerships
                                </h4>
                            </Accordion.Header>
                            <Accordion.Body>
                                We believe that collaboration is key to driving meaningful progress in veterinary
                                medicine. Oocidia works closely with leading academic institutions, regulatory
                                advisors, and industry partners worldwide to ensure that our research translates into
                                impactful solutions for farmers, veterinarians, and pet owners.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <h4>
                                    <span className="me-3">
                                        <Image
                                            src={logo_tab}
                                            alt="logo_tab"
                                            style={{ maxWidth:"40px"}}
                                        />  
                                    </span>
                                    Our Commitment to Sustainability
                                </h4>
                            </Accordion.Header>
                            <Accordion.Body>
                                Oocidia is committed to advancing sustainable practices in animal health. By
                                reducing reliance on antibiotics and developing targeted therapies with minimal
                                environmental impact, we aim to contribute to a healthier planet while supporting the
                                global food supply chain.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>            


                <Col lg={10} xxl={8} className="mx-auto mt-6">
                    <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
                        Our Core Value
                    </h2>
                    <Image
                            src={our_core_value}
                            alt="our_core_value"
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                            />           
                </Col>
            </Fragment>
        </>
    )
}

export default ResearchAndInovation
