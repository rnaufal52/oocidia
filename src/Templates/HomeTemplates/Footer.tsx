import Icon from "Components/Icon"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="home-footer pt-5 pb-3">
            <Container fluid className="px-lg-5">
                <Row
                    className="align-items-center justify-content-lg-between"
                    xs={1}
                    lg={2}
                >
                    <Col className="flex-lg-grow-1 text-center text-lg-start">
                        <p>&copy; OOCIDIA, Copyright 2025</p>
                    </Col>
                    <Col className="col-lg-auto text-center">
                        <div className="footer-list d-flex flex-column flex-lg-row">
                            <div>
                                <p className="mb-0 py-1 pe-lg-4 border-end border-3 border-blue-500">
                                    Get In Touch
                                </p>
                            </div>
                            <div>
                                <p className="mb-0 py-1 px-lg-4 border-end border-3 border-blue-500">
                                    Privacy and Data
                                </p>
                            </div>
                            <div>
                                <p className="mb-0 py-1 px-lg-4 border-end border-3 border-blue-500">
                                    Terms Of Use
                                </p>
                            </div>
                            <div>
                                <div className="mt-3 mt-lg-0 ps-lg-4 d-flex fs-5 gap-3 justify-content-center">
                                    <Link
                                        to="#"
                                        className="text-light hover-text-blue-500"
                                        target="_blank"
                                    >
                                        <Icon name="linkedin" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="text-light hover-text-blue-500"
                                        target="_blank"
                                    >
                                        <Icon name="twitter-x" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="text-light hover-text-blue-500"
                                        target="_blank"
                                    >
                                        <Icon name="tiktok" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
