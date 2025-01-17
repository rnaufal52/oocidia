import { Fragment } from "react/jsx-runtime"
import { Button, Card, Col } from "react-bootstrap"
import { executives } from "assets/data/employe.json"
import employeImg from "assets/img/employe.png"

const Executives = () => {
    return (
        <Fragment>
            {executives.map(({ name, position }, i) => (
                <Col key={i}>
                    <Card bg="blue-800 text-light text-center">
                        <Card.Img variant="top" src={employeImg} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{position}</Card.Text>
                            <Button
                                className="my-3 px-5 rounded-pill"
                                variant="outline-light"
                            >
                                Go somewhere
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Fragment>
    )
}

export default Executives
