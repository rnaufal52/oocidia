import { Card, Image, ProgressBar } from "react-bootstrap";
import Icon from "Components/Icon"

interface DrugDevProgram {
    program: string;
    summary: string;
    progress: number;
    status: string;
}

interface DrugDevCarouselProps {
    drugDevPrograms: DrugDevProgram[];
    handleShowDetail: (data: DrugDevProgram) => void;
    onCarouselControlClick: (direction: "prev" | "next") => void;
}

const DrugDevCarousel: React.FC<DrugDevCarouselProps> = ({ drugDevPrograms, handleShowDetail, onCarouselControlClick }) => {
    return (
        <div id="drugDevProgramCarousel" className="carousel slide drug-dev-program-carousel">
            <div className="__carousel-indicators">
                {drugDevPrograms.map((programData, i) => (
                    <button key={i} type="button" data-bs-target="#drugDevProgramCarousel" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : "false"} aria-label={programData.summary} />
                ))}
            </div>
            <div className="carousel-inner">
                {drugDevPrograms.map((programData, i) => (
                    <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                        <Card className="text-light rounded-4 overflow-hidden" onClick={() => handleShowDetail(programData)}>
                            <Card.Body>
                                <div className="mb-3 d-flex align-items-center justify-content-center">
                                    <Image src={programData.summary} alt="hosts" style={{ maxHeight: "100px" }} />
                                </div>
                                <div className="mb-5">
                                    <p className="fs-sm">Disease</p>
                                    <h4>{programData.program}</h4>
                                </div>
                                <div>
                                    <p>Progress</p>
                                    <ProgressBar label={programData.status} now={programData.progress} style={{ height: "26px" }} />
                                    <div className="d-flex justify-content-between text-light gap-3">
                                        <p className="mb-0 mt-2 fs-sm">Preclinical</p>
                                        <p className="mb-0 mt-2 fs-sm">Lead Generation</p>
                                        <p className="mb-0 mt-2 fs-sm">Veterinary Clinical Trials</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            {[
                { controllName: "prev", direction: "e", icon: "left" },
                { controllName: "next", direction: "s", icon: "right" },
            ].map(({ controllName, direction, icon }) => (
                <button
                    key={controllName}
                    onClick={() => onCarouselControlClick(controllName as "prev" | "next")}
                    className={`__carousel-control carousel-control-${controllName}`}
                    type="button"
                    data-bs-target="#drugDevProgramCarousel"
                    data-bs-slide={controllName}
                >
                    <Icon name={`arrow-${icon}-circle`} className={`fs-2 m${direction}-2`} />
                </button>
            ))}
        </div>
    );
};

export default DrugDevCarousel;