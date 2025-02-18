import TitleDivider from "Components/TitleDivider"
import { Fragment } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const GetInTouch = () => {
    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <Fragment>
                <TitleDivider>Get in touch</TitleDivider>

                <Row xs={1} lg={2} className="mt-3 justify-content-center g-3">
                    <Col lg={5} xl={4}>
                        <Card className="bg-dark text-light animate__animated animate__fadeInLeft">
                            <Card.Body>
                                <Card.Title>Chat to support</Card.Title>
                                <p className="my-4">
                                    Speak to our friendly team.
                                </p>
                                <Link
                                    target="_blank"
                                    to="mailto:hello@oocidia.com"
                                    className="text-blue-200"
                                >
                                    hello@oocidia.com
                                </Link>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3 bg-dark text-light animate__animated animate__fadeInLeft">
                            <Card.Body>
                                <Card.Title>Call us</Card.Title>
                                <p className="my-4">
                                    Mon-fry from 8 am to 5 pm
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        lg={6}
                        xl={5}
                        className="animate__animated animate__fadeInRight"
                    >
                        <Card className="bg-dark text-light animate__animated animate__fadeInLeft">
                            <Card.Body>
                                <Card.Title>Address is:</Card.Title>
                                <p className="my-4">
                                    Oocidia (Pte.) Ltd.
                                    7 Temasek Boulevard
                                    #12-07
                                    Suntec Tower One
                                    Singapore 038987
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        </>
    )
}

export default GetInTouch
