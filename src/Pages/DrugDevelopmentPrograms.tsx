import TitleDivider from "Components/TitleDivider"
import { Card, Col, Image, ProgressBar, Row, Table } from "react-bootstrap"
import { Fragment } from "react/jsx-runtime"
import cell from "assets/img/AdobeStock_847496013.jpeg"
import drugDevProgram from "assets/data/drugs-development-program.json"
import Detailed from "./DrugDevProgram/Detailed"
import { useState } from "react"
import Icon from "Components/Icon"
import useCarouselControlClick from "Hooks/useCarouselControlClick"
import { Helmet } from 'react-helmet-async'


const DrugDevelopmentPrograms = () => {
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
            <Row xs={1} lg={2} className="mt-4 g-3">
                <Col lg={7}>
                    <TitleDivider className="mb-4">
                        Drug Development Programs
                    </TitleDivider>

                    <p>
                        At Oocidia, innovation is at the core of our mission. We
                        focus on creating advanced solutions that improve the
                        health and well-being of animals. Our team of experts
                        constantly strives to push the boundaries of veterinary
                        medicine by integrating cutting-edge technology,
                        sustainable practices, and rigorous research into every
                        product we develop
                    </p>
                </Col>

                <Col lg={5}>
                    <Image
                        src={cell}
                        alt="Cell"
                        style={{ maxHeight: "300px" }}
                        className="rounded-5 object-fit-cover w-100"
                    />
                </Col>
            </Row>

            {/* tampilan large */}
            <Col xl={10} className="mx-auto my-10 d-none d-lg-block">
                <Table
                    borderless
                    className="drug-dev-program-table mt-8 table-text-light text-center align-middle"
                    variant="transparent"
                    hover
                    >
                    <thead>
                        <tr className="border-bottom">
                            <th>Program</th>
                            <th>Description</th>
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
                                            {program}
                                        </div>
                                    </td>
                                    <td className="px-4">
                                        <div className="border-end py-1">
                                            {summary}
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
                                                Discovery
                                            </p>
                                            <p className="mb-0 mt-2 fs-sm">
                                                Preclinical
                                            </p>
                                            <p className="mb-0 mt-2 fs-sm">
                                                Clinical
                                            </p>
                                            <p className="mb-0 mt-2 fs-sm">
                                                Approved
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
                            ({ program, summary, status, progress }, i) => (
                                <div
                                    className={`carousel-item ${
                                        i === 0 && "active"
                                    }`}
                                    key={i}
                                >
                                    <Card
                                        className="text-light rounded-4 overflow-hidden"
                                        onClick={() =>
                                            handleShowDetail(drugDevPrograms[i])
                                        }
                                    >
                                        <Card.Body>
                                            <div className="mb-5">
                                                <p className="fs-sm">Program</p>
                                                <h4>{program}</h4>
                                            </div>
                                            <div className="mb-5">
                                                <p className="fs-sm">Program</p>
                                                <h4>{summary}</h4>
                                            </div>
                                            <div>
                                                <p>Program</p>
                                                <ProgressBar
                                                    label={status}
                                                    now={progress}
                                                    style={{ height: "26px" }}
                                                />
                                                <div className="d-flex justify-content-between text-light gap-3">
                                                    <p className="mb-0 mt-2 fs-sm">
                                                        Discovery
                                                    </p>
                                                    <p className="mb-0 mt-2 fs-sm">
                                                        Preclinical
                                                    </p>
                                                    <p className="mb-0 mt-2 fs-sm">
                                                        Clinical
                                                    </p>
                                                    <p className="mb-0 mt-2 fs-sm">
                                                        Approved
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
                        { controllName: "prev", direction: "e", icon: "left" },
                        { controllName: "next", direction: "s", icon: "right" }
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
