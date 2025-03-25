import { Card, Col,Button } from "react-bootstrap";
import Icon from "Components/Icon";
import {ExecutiveI} from 'types'

interface ExecutiveCarouselProps {
    executives: ExecutiveI[];
    handleReadMoreClick: (executive: ExecutiveI) => void;
    onCarouselControlClick: (direction: "prev" | "next") => void;
}

const ExecutiveCarousel = ({ executives, handleReadMoreClick, onCarouselControlClick }: ExecutiveCarouselProps) => {
    return (
        <Col className="d-lg-none animate__animated animate__fadeInUp">
            <div id="executiveCarousel" className="carousel slide">
                <div className="__carousel-indicators">
                    {executives.map((exec, i) => (
                        <button
                            key={i}
                            type="button"
                            data-bs-target="#executiveCarousel"
                            data-bs-slide-to={i}
                            className={i === 0 ? "active" : ""}
                            aria-label={exec.name}
                        />
                    ))}
                </div>
                <div className="carousel-inner">
                    {executives.map((exec, i) => (
                        <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                            <Card bg="blue-800" className="text-light text-center mx-auto rounded-4 overflow-hidden">
                                <Card.Img variant="top" src={exec.figure} className="executive-photo" />
                                <Card.Body>
                                    <Card.Title>{exec.name}</Card.Title>
                                    <Card.Text>{exec.position}</Card.Text>
                                    <Button
                                        className="my-2 px-5 rounded-pill hover-bg-blue-200"
                                        variant="outline-light"
                                        onClick={() => handleReadMoreClick(exec)}
                                    >
                                        Read More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
                {["prev", "next"].map((dir) => (
                    <button
                        key={dir}
                        onClick={() => onCarouselControlClick(dir as "prev" | "next")}
                        className={`__carousel-control carousel-control-${dir}`}
                        type="button"
                        data-bs-target="#executiveCarousel"
                        data-bs-slide={dir}
                    >
                        <Icon name={`arrow-${dir}-circle`} className="fs-2" />
                    </button>
                ))}
            </div>
        </Col>
    );
};

export default ExecutiveCarousel;
