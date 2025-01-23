import TitleDivider from "Components/TitleDivider"
import { Fragment } from "react"
import { ListGroup } from "react-bootstrap"
import termOfUse from "assets/data/termofuse.json"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const TermsOfUse = () => {
    const { duedate, termofuse } = termOfUse

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <Fragment>
                <TitleDivider>Term of use</TitleDivider>

                <ListGroup as="ul" className="mt-4">
                    <ListGroup.Item
                        as="li"
                        className="d-flex mb-5 justify-content-between align-items-start bg-smoky-black border-0 border-bottom text-light fs-4 fw-bold animate__animated animate__fadeInLeft"
                    >
                        <div className="ms-2 me-auto">
                            <div>Effective Date: {duedate}</div>
                            <p className="fs-6">
                                Welcome to Oocidia. By accessing and using our
                                website, products, and services, you agree to
                                comply with the terms and conditions outlined
                                below. If you do not agree with these terms,
                                please refrain from using our services.
                            </p>
                        </div>
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup as="ol" numbered className="mt-4">
                    {termofuse.map(({ description, header, link }, i) => (
                        <ListGroup.Item
                            key={i}
                            as="li"
                            className="d-flex mb-5 justify-content-between align-items-start bg-smoky-black border-0 border-bottom text-light fs-4 fw-bold animate__animated animate__fadeInLeft"
                            style={{ animationDelay: `${(i + 1) / 5}s` }}
                        >
                            <div className="ms-2 me-auto">
                                <div>{header}</div>
                                <p className="fs-6 fw-normal">
                                    {description}{" "}
                                    {link && (
                                        <Link to="#" className="text-blue-200">
                                            {link}
                                        </Link>
                                    )}
                                </p>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Fragment>
        </>
    )
}

export default TermsOfUse
