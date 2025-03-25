import { Col, Row, Accordion, Image } from "react-bootstrap";

interface Advantage {
    title: string;
    description: string;
}

const advantages: Advantage[] = [
    { title: "Innovative Solutions", description: "Novel compounds designed specifically for veterinary applications." },
    { title: "Broad-Spectrum Efficacy", description: "Addressing multiple diseases with a single platform approach." },
    { title: "First-Mover Advantage", description: "Pioneering solutions for historically underserved markets." },
    { title: "Proven Safety Profile", description: "Exceptional preclinical results with minimal toxicity concerns." },
    { title: "Sustainability Focus", description: "Reducing reliance on antibiotics to support global efforts against antimicrobial resistance (AMR)." }
];

const KeyAdvantages: React.FC<{ logoTab: string, gen: string }> = ({ logoTab, gen }) => {
    return (
        <Col xl={10} className="mx-auto my-10 animate__animated animate__fadeInUp">
            <Row lg={12} className="g-5 justify-content-center">
                <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
                    Key Advantages of Our Approach
                </h2>
                <Col lg={7}>
                    <Accordion defaultActiveKey="1" flush>
                        {advantages.map((adv, index) => (
                            <Accordion.Item eventKey={String(index + 1)} key={index}>
                                <Accordion.Header>
                                    <h5>
                                        <span className="me-3">
                                            <Image src={logoTab} alt="logo_tab" style={{ maxWidth: "30px" }} />
                                        </span>
                                        {adv.title}
                                    </h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {adv.description}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
                <Col lg={5} className="d-flex align-items-center justify-content-center">
                    <Image
                        src={gen}
                        alt="gen"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </Col>
            </Row>
        </Col>
    );
};

export default KeyAdvantages;
