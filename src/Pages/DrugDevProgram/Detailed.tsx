import { FC } from "react"
import { Col, Image, Modal, Row } from "react-bootstrap"

const Detailed: FC<DrugDevProgram.DetailedI> = ({
    show,
    handleClose,
    data
}) => {
    const { program, status, description, figure } = data

    return (
        <Modal show={show} onHide={handleClose} className="text-dark" size="lg">
            <Modal.Header closeButton />
            <Modal.Body>
                <Row xs={1} lg={2} className="g-3">
                    <Col>
                        <Image
                            src={figure}
                            alt={program}
                            className="w-100 object-fit-cover rounded-3"
                            style={{ height: "280px" }}
                        />
                    </Col>
                    <Col>
                        <h4>{program}</h4>
                        <p className="fs-sm">Status: {status}</p>
                        <p className="text-justify">{description}</p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className="py-4" />
        </Modal>
    )
}

export default Detailed
