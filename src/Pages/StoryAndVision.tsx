import { useState, Fragment } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import TitleDivider from "Components/TitleDivider"
import Icon from "Components/Icon"
import useCarouselControlClick from "Hooks/useCarouselControlClick"
import ReadMoreExecutives from "./StoryAndVision/ReadMoreExecutives"
import employe from "assets/data/employe.json"
import our_vision from "assets/img/our-vision.png"
import farm from "assets/img/farm.png";
import { Helmet } from "react-helmet-async"

const StoryAndVision = () => {
    const [show, setShow] = useState(false)
    const [modalValue, setModalValue] = useState<StoryAndVision.ModalValueI>({
        call_name: "",
        name: "",
        position: "",
        figure: "",
        description: ""
    })
    const { executives, employees } = employe
    const onCarouselControlClick = useCarouselControlClick()

    const handleClose = () => setShow(false)

    const handleReadMoreClick = (value: StoryAndVision.ModalValueI) => {
        setModalValue(value)
        setShow(true)
    }

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <Fragment>
            <Row xs={1} lg={2} className="mt-4 g-6">
                    <Col lg={7}>
                        <TitleDivider className="mb-4">
                            Our Story and Vision
                        </TitleDivider>

                        <p className="animate__animated animate__fadeInLeft me-4">
                    At Oocidia, we are on a mission to revolutionize veterinary medicine by addressing some of
                    the most neglected parasitic diseases affecting livestock and companion animals. Officially
                    founded in 2023 by a team of world-class scientists and innovators, the work and idea
                    behind Oocidia was actually born nearly a decade ago from a shared vision to tackle critical
                    gaps in animal health—gaps that have long hindered progress in disease management while
                    contributing to two of humanity's most pressing challenges: antimicrobial resistance (AMR)
                    and the spread of zoonotic diseases.
                </p>

                <p className="animate__animated animate__fadeInLeft me-4">
                    Our journey began as a personal project, driven by passion and expertise in veterinary drug
                    development. Today, we are proud to lead the charge with innovative non-antibiotic
                    therapeutics targeting seven major animal diseases that collectively affect billions of animals
                    annually. By developing alternatives to conventional antibiotics, we're not just improving
                    productivity in farming and reducing economic losses—we're helping combat Antimicrobial
                    Resistance, which threatens to cause 39 million deaths globally between 2025 and 2050.
                    Additionally, our work targets critical zoonotic diseases like cryptosporidiosis and
                    toxoplasmosis, creating a protective barrier for both animal and human health.
                </p>

                <p className="animate__animated animate__fadeInLeft me-4">
                    Our vision is simple yet bold, and yet practically grounded from our collective experience in
                    drug development: to redefine veterinary medicine through innovation, delivering safe,
                    effective, and accessible solutions that address the most pressing challenges in animal and
                    human health. By reducing reliance on antibiotics in animal farming and preventing the
                    spread of zoonotic diseases at their source, we're creating a healthier future for our planet
                    and its inhabitants.
                </p>
                    </Col>

                    <Col lg={5}>
                        <Image
                            src={farm}
                            alt="farm"
                            style={{ maxHeight: "500px" }}
                            className="rounded-5 object-fit-cover w-100 animate__animated animate__fadeInRight"
                        />
                    </Col>
                </Row>
                <h2 className="mt-5 text-blue-200 animate__animated animate__fadeInUp">
                    Oocidia’s Co-Founders
                </h2>

                <p className="text-justify animate__animated animate__fadeInUp">
                    At Oocidia, we bring together a vibrant team of seasoned scientists, innovators, and industry
                    leaders with decades of experience in various critical aspects of drug discovery and
                    development. Some of our co-founders have been instrumental in creating groundbreaking
                    therapeutics such as tafenoquine (Krintafel) for malaria relapse prevention and cipargamin,
                    the fastest-acting antimalarial ever developed. With expertise spanning prestigious
                    institutions like Walter Reed Army Institute, Novartis, GSK, Institut Pasteur, and The Scripps
                    Research Institute, our team is uniquely positioned to transform veterinary medicine with
                    first-in-class solutions for parasitic diseases.
                </p>

                {/* tampilan large */}
                <Col
                    lg={11}
                    className="mx-auto d-none d-lg-block animate__animated animate__fadeInUp"
                >
                    <Row
                        xs={1}
                        lg={3}
                        className="justify-content-center g-4 m-0"
                    >
                        {executives.map(({ name, position, figure }, i) => (
                            <Col key={i}>
                                <Card bg="blue-800 text-light text-center rounded-4 overflow-hidden">
                                    <Card.Img
                                        variant="top"
                                        src={figure}
                                        className="executive-photo"
                                    />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>{position}</Card.Text>
                                        <Button
                                            className="my-3 px-5 rounded-pill hover-bg-blue-200"
                                            variant="outline-light"
                                            onClick={() =>
                                                handleReadMoreClick(
                                                    executives[i]
                                                )
                                            }
                                        >
                                            Read More
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

                {/* tampilan small */}
                <Col className="d-lg-none animate__animated animate__fadeInUp">
                    <div id="executiveCarousel" className="carousel slide">
                        <div className="__carousel-indicators">
                            {executives.map(({ name }, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    data-bs-target="#executiveCarousel"
                                    data-bs-slide-to={i}
                                    className={i === 0 ? "active" : ""}
                                    aria-current={i === 0 ? "true" : "false"}
                                    aria-label={name}
                                />
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {executives.map(({ name, position, figure }, i) => (
                                <div
                                    className={`carousel-item ${
                                        i === 0 && "active"
                                    }`}
                                    key={i}
                                >
                                    <Card
                                        bg="blue-800"
                                        className="text-light text-center mx-auto rounded-4 overflow-hidden"
                                    >
                                        <Card.Img
                                            variant="top"
                                            src={figure}
                                            className="executive-photo"
                                        />
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text>{position}</Card.Text>
                                            <Button
                                                className="my-2 px-5 rounded-pill hover-bg-blue-200"
                                                variant="outline-light"
                                                onClick={() =>
                                                    handleReadMoreClick(
                                                        executives[i]
                                                    )
                                                }
                                            >
                                                Read More
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        {[
                            {
                                controllName: "prev",
                                direction: "e",
                                icon: "left"
                            },
                            {
                                controllName: "next",
                                direction: "s",
                                icon: "right"
                            }
                        ].map(({ controllName, direction, icon }) => (
                            <button
                                key={controllName}
                                onClick={() =>
                                    onCarouselControlClick(controllName as any)
                                }
                                className={`__carousel-control carousel-control-${controllName}`}
                                type="button"
                                data-bs-target="#executiveCarousel"
                                data-bs-slide={controllName}
                            >
                                <Icon
                                    name={`arrow-${icon}-circle`}
                                    className={`fs-2 m${direction}-4`}
                                />
                            </button>
                        ))}
                    </div>
                </Col>

                <h2 className="text-center text-blue-200 mt-10">
                    Our Full Team
                </h2>
                <Col lg={10} xxl={8} className="mx-auto mt-6">
                    <Row xs={1} lg={3} className="g-3 justify-content-center">
                        {employees.map(({ name, position }, i) => (
                            <Col key={i}>
                                <Card
                                    className="text-center text-light rounded-3 h-100 d-flex flex-column"
                                    bg="blue-800"
                                >
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text className="fs-sm text-light-gray">
                                            {position}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

                <Col lg={10} xxl={8} className="mx-auto my-10">
                    <h2 className="text-blue-200 mb-10">Our Vision</h2>

                    <Image
                            src={our_vision}
                            alt="our_vision"
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                        />
                </Col>

                <ReadMoreExecutives
                    show={show}
                    handleClose={handleClose}
                    data={modalValue}
                />
            </Fragment>
        </>
    )
}

export default StoryAndVision
