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
                        <p>
                            Copyright &copy; 2025 Oocidia (Pte.) Ltd.,
                            Singapore, and its affiliates. All rights reserved.
                        </p>
                    </Col>
                    <Col className="col-lg-auto text-center">
                        <div className="footer-list d-flex flex-column flex-lg-row">
                            <div>
                                <Link
                                    to="get-in-touch" state={{ resetScroll: true }}
                                    className="d-block py-1 pe-lg-4 border-none border-end border-3 border-blue-200"
                                >
                                    Get In Touch
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to="privacy-and-data" state={{ resetScroll: true }}
                                    className="d-block py-1 px-lg-4 border-none border-end border-3 border-blue-200"
                                >
                                    Privacy Notice
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to="terms-of-use" state={{ resetScroll: true }}
                                    className="d-block py-1 px-lg-4 border-none border-end border-3 border-blue-200"
                                >
                                    Terms Of Use
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
