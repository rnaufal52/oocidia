import TitleDivider from "Components/TitleDivider"
import { Fragment } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const GetInTouch = () => {
    return (
        <Fragment>
            <TitleDivider>Get in touch</TitleDivider>

            <Row xs={1} lg={2} className="mt-3 justify-content-center g-3">
                <Col lg={5} xl={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Chat to support</Card.Title>
                            <p className="my-4">Speak to our friendly team.</p>
                            <Link
                                target="_blank"
                                to="#"
                                className="text-majorelle-blue"
                            >
                                contact@oocidia.sg
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3">
                        <Card.Body>
                            <Card.Title>Call us</Card.Title>
                            <p className="my-4">Mon-fry from 8 am to 5 pm</p>
                            <Link
                                target="_blank"
                                to="#"
                                className="text-majorelle-blue"
                            >
                                +65 1234 5678
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} xl={5}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7986021853553!2d103.85847779999999!3d1.2954193999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19af1089729b%3A0xfc2e3a950bc983e7!2s7%20Temasek%20Blvd%2C%20Singapura%20038987!5e0!3m2!1sid!2sid!4v1737372821827!5m2!1sid!2sid"
                        height="340"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-100"
                    />
                </Col>
            </Row>
        </Fragment>
    )
}

export default GetInTouch
