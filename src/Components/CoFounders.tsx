import { Button, Card, Col, Row } from "react-bootstrap";
import {ExecutiveI} from 'types'


interface CoFoundersProps {
    executives: ExecutiveI[];
    handleReadMoreClick: (executive: ExecutiveI) => void;
}

const CoFounders = ({ executives, handleReadMoreClick }: CoFoundersProps) => {
    return (
        <>
            <h2 className="mt-5 text-blue-200 animate__animated animate__fadeInUp">
                Oocidia’s Co-Founders
            </h2>
            <p className="text-justify animate__animated animate__fadeInUp">
                At Oocidia, we bring together a vibrant team of seasoned scientists, innovators, and industry leaders with decades of experience in various critical aspects of drug discovery and development. Some of our co-founders have been instrumental in creating groundbreaking therapeutics such as tafenoquine (Krintafel) for malaria relapse prevention and cipargamin, the fastest-acting antimalarial ever developed. With expertise spanning prestigious institutions like Walter Reed Army Institute, Novartis, GSK, Institut Pasteur, and The Scripps Research Institute, our team is uniquely positioned to transform veterinary medicine with first-in-class solutions for parasitic diseases.
            </p>

            {/* Tampilan large */}
            <Col lg={11} className="mx-auto d-none d-lg-block animate__animated animate__fadeInUp">
                <Row xs={1} lg={3} className="justify-content-center g-4 m-0">
                    {executives.map((exec, i) => (
                        <Col key={i}>
                            <Card bg="blue-800 text-light text-center rounded-4 overflow-hidden">
                                <Card.Img variant="top" src={exec.figure} className="executive-photo" />
                                <Card.Body>
                                    <Card.Title>{exec.name}</Card.Title>
                                    <Card.Text>{exec.position}</Card.Text>
                                    <Button
                                        className="my-3 px-5 rounded-pill hover-bg-blue-200"
                                        variant="outline-light"
                                        onClick={() => handleReadMoreClick(exec)}
                                    >
                                        Read More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </>
    );
};

export default CoFounders;
