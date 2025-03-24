import { Col, Image, Modal, Row } from "react-bootstrap"

const ReadMoreExecutives = ({
    show,
    handleClose,
    data
}: ReadMoreExecutivesI) => {
    const { call_name, name, position, description, figure } = data

    return (
        <Modal className="text-dark" show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton />
            <Modal.Body>
                <Row xs={1} lg={2} className="g-3 text-center text-lg-start">
                    <Col className="col-lg-5">
                        <Image
                            src={figure}
                            alt="Employe"
                            rounded
                            className="w-100"
                        />
                    </Col>
                    <Col>
                        <h3>{call_name?.trim() ? call_name : name}</h3>
                        <p className="fs-sm">{position}</p>
                        <p className="text-justify">{description}</p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className="py-4" />
        </Modal>
    )
}

export default ReadMoreExecutives
