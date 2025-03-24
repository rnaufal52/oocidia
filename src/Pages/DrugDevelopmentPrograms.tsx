import TitleDivider from "Components/TitleDivider"
import { Card, Col, Image, ProgressBar, Row, Table,Accordion } from "react-bootstrap"
import { Fragment } from "react/jsx-runtime"
import cell from "assets/img/AdobeStock_847496013.jpeg"
import inpographic from "assets/img/inphographic.png"
import drugDevProgram from "assets/data/drugs-development-program.json"
import comparation from "assets/data/comparation.json"
import Detailed from "./DrugDevProgram/Detailed"
import { useState } from "react"
import Icon from "Components/Icon"
import useCarouselControlClick from "Hooks/useCarouselControlClick"
import { Helmet } from "react-helmet-async"
import our_research from "assets/img/our-research.png"
import logo_tab from "assets/img/logo_tab.png"
import gen from "assets/img/gen.png"

const DrugDevelopmentPrograms = () => {
    const { "comparation": comparations } = comparation
    const onCarouselControlClick = useCarouselControlClick()
    const onCarouselControlClickC = useCarouselControlClick()
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
                            style={{ height: "500px" }}
                            className="rounded-5 object-fit-cover w-100"
                        />
                    </Col>
                </Row>

                {/* Research Focus */}
                <Col lg={10} xxl={8} className="mx-auto mt-6">
                    <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
                        Our Research Focus
                    </h2>
                    <Image
                            src={our_research}
                            alt="our_research"
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                            />           
                </Col>

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
                                <th>Hosts</th>
                                <th>Disease</th>
                                <th>Joint Healt Suplement</th>
                                <th>#</th>
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
                                                <img width="auto" height="50" src={summary} alt="icon"/>
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
                                                    Lead Generation
                                                </p>
                                                <p className="mb-0 mt-2 fs-sm">
                                                    Veterinary Clinical Trials
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <Icon name="arrow-right" className="ms-2 text-blue-200" />
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
                                ({ program, status, progress,summary }, i) => (
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
                                                <div className="mb-3 d-flex align-items-center justify-content-center">
                                                    <Image
                                                        src={summary}
                                                        alt="hosts"
                                                        style={{ maxHeight:"100px" }}
                                                    />
                                                </div>
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
                                                            Lead Generation
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
                    <Row xs={1} lg={2} className="mt-10 g-4 mb-3">
                        <Col lg={6}>
                            <h2 className="text-blue-200">
                                Why our Work Matters ?
                            </h2>  
                        </Col>
                    </Row>
                    <Row className="mb-3">
                            <Image
                                src={inpographic}
                                alt="inphographic parasitic diseases"
                                className="w-100"
                            />
                    </Row>
                    <Row>
                        <p className="text-justify">
                                Imagine the countless lives, both animal and human, silently burdened 
                                by the insidious creep of parasitic disease. Billions lost, not just 
                                in dollars, but in the vibrant lives of creatures great and small, 
                                their well-being stolen by invisible foes. We cannot stand idly by 
                                as current treatments falter, their promises broken by toxicity, 
                                fading power, and the looming shadow of resistance. Oocidia ignites 
                                a revolution, a passionate drive to forge a new era of veterinary 
                                care. We are pioneers, crafting solutions that not only heal, but 
                                empower, safeguarding animals with safer, more potent antiparasitics. 
                                We embrace the One Health vision, understanding that our mission is a 
                                symphony of interconnected lives. By striking at the heart of 
                                transmission, we shield not just animals, but the very communities 
                                that depend on them, protecting our shared home. This is more than 
                                just drug development; it's a crusade against silent suffering. 
                                Oocidia will not rest until we've expanded our reach, until 
                                we've confronted every neglected disease that dares to steal our harmony. 
                        </p>
                    </Row>
                </Col>

                {/* Key advantages */}
                <Col
                    xl={10}
                    className="mx-auto my-10 animate__animated animate__fadeInUp"
                >
                    <Row lg={12} className="g-5 justify-content-center">
                        <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
                            Key Advantages of Our Approach
                        </h2>
                        <Col lg={7}>
                            <Accordion defaultActiveKey="1" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h5>
                                            <span className="me-3">
                                                <Image
                                                    src={logo_tab}
                                                    alt="logo_tab"
                                                    style={{ maxWidth:"30px"}}
                                                />  
                                            </span>
                                            Innovative Solutions
                                        </h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Innovative Solutions: Novel compounds designed specifically for veterinary applications.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <h5>
                                            <span className="me-3">
                                                <Image
                                                    src={logo_tab}
                                                    alt="logo_tab"
                                                    style={{ maxWidth:"30px"}}
                                                />  
                                            </span>
                                            Broad-Spectrum Efficacy
                                        </h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    Broad-Spectrum Efficacy: Addressing multiple diseases with a single platform approach.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <h5>
                                            <span className="me-3">
                                                <Image
                                                    src={logo_tab}
                                                    alt="logo_tab"
                                                    style={{ maxWidth:"30px"}}
                                                />  
                                            </span>
                                            First-Mover Advantage
                                        </h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    First-Mover Advantage: Pioneering solutions for historically underserved markets.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        <h5>
                                            <span className="me-3">
                                                <Image
                                                    src={logo_tab}
                                                    alt="logo_tab"
                                                    style={{ maxWidth:"30px"}}
                                                />  
                                            </span>
                                            Proven Safety Profile
                                        </h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    Proven Safety Profile: Exceptional preclinical results with minimal toxicity concerns.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                        <h5>
                                            <span className="me-3">
                                                <Image
                                                    src={logo_tab}
                                                    alt="logo_tab"
                                                    style={{ maxWidth:"30px"}}
                                                />  
                                            </span>
                                            Sustainability Focus
                                        </h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    Sustainability Focus: Reducing reliance on antibiotics to support global efforts against antimicrobial resistance (AMR).
                                    </Accordion.Body>
                                </Accordion.Item>
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
                
                    <Col
                        xl={10}
                        className="mx-auto my-10 d-none d-lg-block animate__animated animate__fadeInUp"
                    >   
                        <p className="text-blue-200 mb-4 mt-5 text-center">
                            A comparation table showing Oocidia’s advantages over existing treatments
                        </p>
                        <Col xl={12} className="mx-auto">
                        <Table
                            borderless
                            className="drug-dev-program-table mt-8 table-text-light text-center align-middle"
                            variant="transparent"
                            hover
                        >
                            <thead>
                                <tr className="border-bottom">
                                    <th>Disease</th>
                                    <th>Current Treatment</th>
                                    <th>Challenges</th>
                                    <th>Oocidia's Advantage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparations.map(
                                    ({ disease, current_treatment, challenges, oocidia_advantages }) => (
                                        <tr
                                        >
                                            <td className="px-2">
                                                <div className="border-end py-1">
                                                    {disease}
                                                </div>
                                            </td>
                                            <td className="px-2">
                                                <div className="border-end py-1">
                                                    {current_treatment}
                                                </div>
                                            </td>
                                            <td className="px-2">
                                                <div className="border-end py-1">
                                                    {challenges}
                                                </div>
                                            </td>
                                            <td className="px-2">
                                                <div className="d-flex align-items-center py-1 text-start-1">
                                                    <span className="me-3">
                                                        <img width="auto" height="50" src={logo_tab} alt="oocidia logo"/>
                                                    </span>
                                                    {oocidia_advantages}
                                                </div>
                                            </td>                                       
                                        </tr>
                                    )
                                )}
                            </tbody>
                            </Table>
                        </Col>
                    </Col>

                    {/* tampilan small */}
                    <Col className="d-lg-none mt-5 mb-10">
                        <p className="text-blue-200 mb-4 mt-5 text-center">
                            A comparation table showing Oocidia’s advantages over existing treatments
                        </p>
                        <div
                            id="comparationTable"
                            className="carousel slide drug-dev-program-carousel"
                        >
                            <div className="__carousel-indicators">
                                {comparations.map(({ disease }, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        data-bs-target="#comparationTable"
                                        data-bs-slide-to={i}
                                        className={i === 0 ? "active" : ""}
                                        aria-current={i === 0 ? "true" : "false"}
                                        aria-label={disease}
                                    />
                                ))}
                            </div>
                            <div className="carousel-inner">
                                {comparations.map(
                                    ({ disease, current_treatment, challenges, oocidia_advantages }, i) => (
                                        <div
                                            className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}
                                        >
                                            <Card
                                                className="text-light rounded-4 overflow-hidden"
                                            >
                                                <Card.Body className="text-center">
                                                    <div>
                                                        <h5>
                                                            Dieases
                                                        </h5>
                                                        <p className="text-blue-200 ms-2">{disease}</p>
                                                    </div>
                                                    <div>
                                                        <h5>
                                                        current_treatment
                                                        </h5>
                                                        <p className="text-blue-200 ms-2">{current_treatment}</p>
                                                    </div>
                                                    <div>
                                                        <h5>
                                                        challenges
                                                        </h5>
                                                        <p className="text-blue-200 ms-2">{challenges}</p>
                                                    </div>
                                                    <div>
                                                        <h5>
                                                        oocidia_advantages
                                                        </h5>
                                                        <p className="text-blue-200 ms-2">{oocidia_advantages}</p>
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
                            ]
                            .map(({ controllName, direction, icon }) => (
                                <button
                                    key={controllName}
                                    onClick={() =>
                                        onCarouselControlClickC(controllName as any)
                                    }
                                    className={`__carousel-control carousel-control-${controllName}`}
                                    type="button"
                                    data-bs-target="#comparationTable"
                                    data-bs-slide={controllName}
                                >
                                    <Icon
                                        name={`arrow-${icon}-circle`}
                                        className={`fs-2 m${direction}-2`}
                                    />
                                </button>
                            ))
                            }
                        </div>
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
