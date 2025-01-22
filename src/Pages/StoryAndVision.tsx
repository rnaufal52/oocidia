import { useState, Fragment } from "react"
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap"
import TitleDivider from "Components/TitleDivider"
import Icon from "Components/Icon"
import useCarouselControlClick from "Hooks/useCarouselControlClick"
import cell from "assets/img/T-Gondii-Microscopic-AdobeStock-780984904.jpeg"
import ReadMoreExecutives from "./StoryAndVision/ReadMoreExecutives"
import employe from "assets/data/employe.json"
import vision from "assets/data/vision.json"
import { Helmet } from 'react-helmet-async'


const StoryAndVision = () => {
    const { vision: visions } = vision
    const [show, setShow] = useState(false)
    const [modalValue, setModalValue] = useState<StoryAndVision.ModalValueI>({
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
            <TitleDivider>Our Story and Vision</TitleDivider>

            <h2 className="mt-5 text-blue-200">Co-Founders</h2>

            <p className="text-justify">
                At Oocidia, we bring together a vibrant team of entrepreneurs,
                scientists, veterinarians, and innovators. With the guidance of
                our seasoned board and leadership team, we are committed to
                reshaping animal healthcare through bold innovation and
                cutting-edge research.
            </p>

            {/* tampilan large */}
            <Col lg={11} className="mx-auto d-none d-lg-block">
                <Row xs={1} lg={3} className="justify-content-center g-4 m-0">
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
                                            handleReadMoreClick(executives[i])
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
            <Col className="d-lg-none">
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
                        { controllName: "prev", direction: "e", icon: "left" },
                        { controllName: "next", direction: "s", icon: "right" }
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

            <h2 className="text-center text-blue-200 mt-10">Our Full Team</h2>
            <Col lg={10} xxl={8} className="mx-auto mt-6">
                <Row xs={1} lg={3} className="g-3 justify-content-center">
                    {employees.map(({ name, position }, i) => (
                        <Col key={i}>
                            <Card
                                className="text-center text-light rounded-3"
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

            <Col lg={10} xxl={8} className="mx-auto">
                <Row xs={1} lg={2} className="mt-10 g-4">
                    <Col lg={8}>
                        <h2 className="text-blue-200">Our Groundbreaking Work</h2>
                        <p className="text-justify">
                            Our innovative veterinary therapeutics will transform animal health 
                            while safeguarding human wellbeing. By developing non-antibiotic 
                            solutions to treat major parasitic diseases in livestock, we're 
                            directly addressing the global crisis of antimicrobial resistance 
                            that claims 700,000 human lives annually. Our safe, non-toxic 
                            treatments not only protect animals but also help reduce the 80% 
                            of medically important antibiotics currently used in the animal 
                            sector. 
                        </p>

                        <p className="text-justify">
                            For farmers, our solutions deliver substantial economic value - 
                            which can help prevent the estimated US$7 billion to US$13 billion 
                            in annual losses from just coccidiosis alone. Through our One Health 
                            approach, we're enhancing food safety while simultaneously decreasing 
                            disease transmission between animals and humans. By enabling farmers 
                            to move away from antibiotics while maintaining healthy and productive 
                            livestock, we're pioneering a sustainable future where both animal 
                            welfare and public health thrive together. 
                        </p>
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

            <Col lg={10} xxl={8} className="mx-auto my-10">
                <h2 className="text-blue-200">Vision</h2>

                <ListGroup variant="flush">
                    {visions.map((vision, i) => (
                        <ListGroup.Item
                            className="bg-smoky-black text-light mb-4"
                            key={i}
                        >
                            <Icon name="check-circle-fill me-3 fs-5" /> {vision}
                        </ListGroup.Item>
                    ))}
                    <ListGroup.Item className="bg-smoky-black" />
                </ListGroup>
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
