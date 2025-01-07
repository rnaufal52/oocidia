import Icon from "Components/Icon"
import { Col, Container, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="home-footer">
            <Container className="h-100">
                <Row
                    lg={3}
                    xs={1}
                    className="h-100 align-items-center g-4 g-lg-0"
                >
                    <Col className="medsos" lg={6}>
                        <div className="d-flex gap-3 mb-2">
                            <div>
                                <NavLink
                                    to="#"
                                    className="text-light"
                                    target="_blank"
                                >
                                    <Icon name="linkedin" />
                                </NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="#"
                                    className="text-light"
                                    target="_blank"
                                >
                                    <Icon name="twitter-x" />
                                </NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="#"
                                    className="text-light"
                                    target="_blank"
                                >
                                    <Icon name="tiktok" />
                                </NavLink>
                            </div>
                        </div>

                        <p>&copy; OOCIDIA, Copyrigt 2025</p>
                    </Col>
                    <Col lg={3}>
                        <div className="border-start border-info border-3 px-3">
                            <h5 className="fw-medium">Address</h5>
                            <p>
                                07127 Temasek Boulevard Suntec
                                <br />
                                Tower One
                            </p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="border-start border-info border-3 px-3">
                            <h5 className="fw-medium">General</h5>
                            <p>
                                oocodia@oocodia.com
                                <br />
                                <span className="invisible">_</span>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
