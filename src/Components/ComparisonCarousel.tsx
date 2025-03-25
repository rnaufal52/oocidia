import { Col, Card } from "react-bootstrap";

interface Comparison {
    disease: string;
    currentTreatment: string;
    challenges: string;
    oocidiaAdvantages: string;
}

const ComparisonCarousel: React.FC<{ comparisons: Comparison[] }> = ({ comparisons }) => {
    return (
        <Col className="d-lg-none mt-5 mb-10">
            <p className="text-blue-200 mb-4 mt-5 text-center">
                A comparison table showing Oocidia’s advantages over existing treatments
            </p>
            <div id="comparisonTable" className="carousel slide drug-dev-program-carousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {comparisons.map(({ disease, currentTreatment, challenges, oocidiaAdvantages }, i) => (
                        <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                            <Card className="text-light rounded-4 overflow-hidden">
                                <Card.Body className="text-center">
                                    <div>
                                        <h5>Disease</h5>
                                        <p className="text-blue-200 ms-2">{disease}</p>
                                    </div>
                                    <div>
                                        <h5>Current Treatment</h5>
                                        <p className="text-blue-200 ms-2">{currentTreatment}</p>
                                    </div>
                                    <div>
                                        <h5>Challenges</h5>
                                        <p className="text-blue-200 ms-2">{challenges}</p>
                                    </div>
                                    <div>
                                        <h5>Oocidia Advantages</h5>
                                        <p className="text-blue-200 ms-2">{oocidiaAdvantages}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Tombol Previous */}
                <button 
                    className="carousel-control-prev" 
                    type="button" 
                    data-bs-target="#comparisonTable" 
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                {/* Tombol Next */}
                <button 
                    className="carousel-control-next" 
                    type="button" 
                    data-bs-target="#comparisonTable" 
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Col>
    );
};

export default ComparisonCarousel;
