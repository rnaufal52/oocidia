import TitleDivider from "Components/TitleDivider"
import { Col, Image, ListGroup, Row, Table } from "react-bootstrap"
import { Fragment } from "react/jsx-runtime"
import air from "assets/img/air.jpg"
import Icon from "Components/Icon"
import researchAchivement from "assets/data/research-achievment.json"
import progressAndImpact from "assets/data/progress-and-impact.json"

const ResearchAndInovation = () => {
    const { "research-achievements": researchAchivements } = researchAchivement
    const { "progress-and-impact": progressAndImpacts } = progressAndImpact

    return (
        <Fragment>
            <Row xs={1} lg={2} className="mt-4 g-3">
                <Col lg={7}>
                    <TitleDivider className="mb-4">
                        Research and Inovation
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
                        src={air}
                        alt="Air"
                        style={{ maxHeight: "300px" }}
                        className="rounded-5 object-fit-cover w-100"
                    />
                </Col>
            </Row>

            <h2 className="text-blue-200 my-5">
                Research Focus Areas & Achievements
            </h2>

            <ListGroup variant="flush">
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

            <h2 className="text-blue-200 mb-4">Research Progress & Impact</h2>
            <Col>
                <Table responsive variant="dark">
                    <thead>
                        <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Treatment Effectiveness (%)</th>
                            <th scope="col">Number of Innovation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {progressAndImpacts.map(
                            ({ year, treatment, innovation }) => (
                                <tr>
                                    <th scope="row">{year}</th>
                                    <td>{treatment}</td>
                                    <td>{innovation}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </Table>
            </Col>
        </Fragment>
    )
}

export default ResearchAndInovation
