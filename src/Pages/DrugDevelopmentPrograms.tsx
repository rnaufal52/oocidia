import TitleDivider from "Components/TitleDivider"
import { Card, Col, Image, ListGroup,ProgressBar, Row, Table,Accordion } from "react-bootstrap"
import { Fragment } from "react/jsx-runtime"
import cell from "assets/img/AdobeStock_847496013.jpeg"
import inpographic from "assets/img/inphographic.webp"
import drugDevProgram from "assets/data/drugs-development-program.json"
import researchAchivement from "assets/data/research-achievment.json"
import comparation from "assets/data/comparation.json"
import Detailed from "./DrugDevProgram/Detailed"
import { useState } from "react"
import Icon from "Components/Icon"
import useCarouselControlClick from "Hooks/useCarouselControlClick"
import { Helmet } from "react-helmet-async"

const DrugDevelopmentPrograms = () => {
    const { "research-achievements": researchAchivements } = researchAchivement
    const { "comparation": comparations } = comparation
    const onCarouselControlClick = useCarouselControlClick()
    const [showDetail, setShowDetail] = useState(false)
    const [detailedData, setDetailedData] = useState<Record<string, any>>({})
    const { "drugs-dev-program": drugDevPrograms } = drugDevProgram

    const handleShowDetail = (data: Record<string, any>) => {
        setShowDetail(true)
        setDetailedData(data)
    }

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <Fragment>
                <Row xs={1} lg={2} className="mt-4 g-6">
                    <Col lg={7}>
                        <TitleDivider className="mb-4">
                            Our Drug Development Programs
                        </TitleDivider>

                        <p className="animate__animated animate__fadeInLeft">
                        At Oocidia, we focus on creating advanced solutions that 
                        address some of the most pressing challenges in veterinary 
                        medicine. Our innovative drug development programs are designed 
                        to combat parasitic diseases that significantly impact livestock 
                        and companion animals worldwide. By targeting neglected diseases 
                        with high economic and health burdens, we aim to deliver 
                        first-in-class therapeutics that improve animal welfare, enhance 
                        productivity, and support sustainable farming practices.
                        </p>
                    </Col>

                    <Col
                        lg={5}
                        className="animate__animated animate__fadeInRight"
                    >
                        <Image
                            src={cell}
                            alt="Cell"
                            style={{ maxHeight: "300px" }}
                            className="rounded-5 object-fit-cover w-100"
                        />
                    </Col>
                </Row>

                {/* Research Focus */}
                <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
                    Our Research Focus
                </h2>
                <ListGroup
                    variant="flush"
                    className="animate__animated animate__fadeInUp"
                >
                    {researchAchivements.map(({ description }, i) => (
                        <ListGroup.Item
                            className="bg-smoky-black text-light mb-4"
                                key={i}
                            >
                            <Icon name="check-circle-fill me-3 fs-5" />{" "}
                                {description}
                        </ListGroup.Item>
                    ))}
                        <ListGroup.Item className="bg-smoky-black text-light mb-4" />
                </ListGroup>

                {/* tampilan large */}
                <Col
                    xl={10}
                    className="mx-auto my-10 d-none d-lg-block animate__animated animate__fadeInUp"
                >
                <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
                    Pipiline Overview
                </h2>
                <p className="animate__animated animate__fadeInLeft">
                    Oocidia’s pipeline features seven first-in-class therapeutics targeting 
                    critical parasitic diseases in livestock and companion animals. Each program 
                    is tailored to address specific unmet needs in animal health while ensuring 
                    safety, efficacy, and practicality for farmers and veterinarians.
                </p>
                <Table
                    borderless
                    className="drug-dev-program-table mt-8 table-text-light text-center align-middle"
                    variant="transparent"
                    hover
                >
                    <thead>
                        <tr className="border-bottom">
                            <th>Icons</th>
                            <th>Disease</th>
                            <th>Joint Healt Suplement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drugDevPrograms.map(
                            ({ program, summary, progress, status }, i) => (
                                <tr
                                    key={i}
                                    onClick={() =>
                                        handleShowDetail(drugDevPrograms[i])
                                    }
                                >
                                    <td className="px-4">
                                        <div className="border-end py-1">
                                            <img width="40" height="40" src={summary} alt="icon"/>
                                        </div>
                                    </td>
                                    <td className="px-4">
                                        <div className="border-end py-1">
                                            {program}
                                        </div>
                                    </td>
                                    <td className="px-4">
                                        <ProgressBar
                                            label={status}
                                            now={progress}
                                            style={{ height: "16px" }}
                                        />
                                        <div className="d-flex justify-content-between text-light gap-3">
                                            <p className="mb-0 mt-2 fs-sm">
                                                Preclinical
                                            </p>
                                            <p className="mb-0 mt-2 fs-sm">
                                                Lead Optimization
                                            </p>
                                            <p className="mb-0 mt-2 fs-sm">
                                                Veterinary Clinical Trials
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </Table>
                </Col>

                {/* tampilan small */}
                <Col className="d-lg-none mt-5 mb-10">
                    <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
                        Pipeline Overview
                    </h2>
                    <p className="animate__animated animate__fadeInLeft">
                        Oocidia’s pipeline features seven first-in-class therapeutics targeting 
                        critical parasitic diseases in livestock and companion animals. Each program 
                        is tailored to address specific unmet needs in animal health while ensuring 
                        safety, efficacy, and practicality for farmers and veterinarians.
                    </p>
                    <div
                        id="drugDevProgramCarousel"
                        className="carousel slide drug-dev-program-carousel"
                    >
                        <div className="__carousel-indicators">
                            {drugDevPrograms.map(({ summary }, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    data-bs-target="#drugDevProgramCarousel"
                                    data-bs-slide-to={i}
                                    className={i === 0 ? "active" : ""}
                                    aria-current={i === 0 ? "true" : "false"}
                                    aria-label={summary}
                                />
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {drugDevPrograms.map(
                                ({ program, status, progress }, i) => (
                                    <div
                                        className={`carousel-item ${
                                            i === 0 && "active"
                                        }`}
                                        key={i}
                                    >
                                        <Card
                                            className="text-light rounded-4 overflow-hidden"
                                            onClick={() =>
                                                handleShowDetail(
                                                    drugDevPrograms[i]
                                                )
                                            }
                                        >
                                            <Card.Body>
                                                <div className="mb-5">
                                                    <p className="fs-sm">
                                                        Dieases
                                                    </p>
                                                    <h4>{program}</h4>
                                                </div>
                                                <div>
                                                    <p>Progress</p>
                                                    <ProgressBar
                                                        label={status}
                                                        now={progress}
                                                        style={{
                                                            height: "26px"
                                                        }}
                                                    />
                                                    <div className="d-flex justify-content-between text-light gap-3">
                                                        <p className="mb-0 mt-2 fs-sm">
                                                            Preclinical 
                                                        </p>
                                                        <p className="mb-0 mt-2 fs-sm">
                                                            Lead Optimization
                                                        </p>
                                                        <p className="mb-0 mt-2 fs-sm">
                                                            Veterinary Clinical Trials
                                                        </p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            )}
                        </div>
                        {[
                            {
                                controllName: "prev",
                                direction: "e",
                                icon: "left"
                            },
                            {
                                controllName: "next",
                                direction: "s",
                                icon: "right"
                            }
                        ].map(({ controllName, direction, icon }) => (
                            <button
                                key={controllName}
                                onClick={() =>
                                    onCarouselControlClick(controllName as any)
                                }
                                className={`__carousel-control carousel-control-${controllName}`}
                                type="button"
                                data-bs-target="#drugDevProgramCarousel"
                                data-bs-slide={controllName}
                            >
                                <Icon
                                    name={`arrow-${icon}-circle`}
                                    className={`fs-2 m${direction}-2`}
                                />
                            </button>
                        ))}
                    </div>
                </Col>

                {/* Why our Work matters */}

                <Col lg={10} xxl={8} className="mx-auto">
                    <Row xs={1} lg={2} className="mt-10 g-4">
                        <Col lg={8}>
                            <h2 className="text-blue-200">
                                Why our Work Matters ?
                            </h2>
                            <p className="text-justify">
                                Parasitic diseases cause billions of dollars in economic 
                                losses annually while impacting animal welfare globally. 
                                Current treatment options are often inadequate due to 
                                high toxicity, limited efficacy, or growing resistance. 
                                Oocidia’s drug development programs are designed to 
                                overcome these challenges by delivering safer, more 
                                effective solutions that meet the unique needs of 
                                veterinary medicine
                            </p>
                        </Col>
                        <Col className="text-center text-lg-end" lg={4}>
                            <Image
                                src={inpographic}
                                alt="inphographic parasitic diseases"
                                style={{ maxWidth: "350px" }}
                            />
                        </Col>
                    </Row>
                </Col>

                {/* Key advantages */}
                <Col
                    xl={10}
                    className="mx-auto my-10 animate__animated animate__fadeInUp"
                >
                
                    <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
                        Key Advantages of Our Approach
                    </h2>
                    <Accordion defaultActiveKey="1" flush>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>1. Innovative Solutions</Accordion.Header>
                            <Accordion.Body>
                                Innovative Solutions: Novel compounds designed specifically for veterinary applications.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>2. Broad-Spectrum Efficacy</Accordion.Header>
                            <Accordion.Body>
                            Broad-Spectrum Efficacy: Addressing multiple diseases with a single platform approach.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>3. First-Mover Advantage</Accordion.Header>
                            <Accordion.Body>
                            First-Mover Advantage: Pioneering solutions for historically underserved markets.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>4. Proven Safety Profile</Accordion.Header>
                            <Accordion.Body>
                            Proven Safety Profile: Exceptional preclinical results with minimal toxicity concerns.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>5. Sustainability Focus</Accordion.Header>
                            <Accordion.Body>
                            Sustainability Focus: Reducing reliance on antibiotics to support global efforts against antimicrobial resistance (AMR).
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <p className="text-blue-200 mb-4 mt-5 text-center">
                        A comparison table showing Oocidia’s advantages over existing treatments
                    </p>
                    <Col xl={10} className="mx-auto">
                        <Table responsive variant="dark" className="text-center">
                            <thead>
                                <tr>
                                    <th className="p-3" scope="col">Disease</th>
                                    <th className="p-3" scope="col">Current Treatment</th>
                                    <th className="p-3" scope="col">Challenges</th>
                                    <th className="p-3" scope="col">Oocidia's Advantage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparations.map(
                                    ({ disease, current_treatment, challenges, oocidia_advantages }, i) => (
                                        <tr key={i}>
                                            <th className="p-3" scope="row">{disease}</th>
                                            <td className="p-3">{current_treatment}</td>
                                            <td className="p-3">{challenges}</td>
                                            <td className="p-3">{oocidia_advantages}</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </Table>
                    </Col>

                </Col>  

                <Detailed
                    show={showDetail}
                    handleClose={() => setShowDetail(false)}
                    data={detailedData}
                />
            </Fragment>
        </>
    )
}

export default DrugDevelopmentPrograms
