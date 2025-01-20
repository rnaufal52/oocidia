import TitleDivider from "Components/TitleDivider"
import { Fragment } from "react"
import { ListGroup } from "react-bootstrap"
import termOfUse from "assets/data/termofuse.json"
import { Link } from "react-router-dom"

const TermsOfUse = () => {
    const { duedate, termofuse } = termOfUse

    return (
        <Fragment>
            <TitleDivider>Term of use</TitleDivider>

            <ListGroup as="ul" className="mt-4">
                <ListGroup.Item
                    as="li"
                    className="d-flex mb-5 justify-content-between align-items-start bg-smoky-black border-0 border-bottom text-light fs-4"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Effective Date: {duedate}</div>
                        <p className="fs-6">
                            Welcome to Oocidia. By accessing and using our
                            website, products, and services, you agree to comply
                            with the terms and conditions outlined below. If you
                            do not agree with these terms, please refrain from
                            using our services.
                        </p>
                    </div>
                </ListGroup.Item>
            </ListGroup>

            <ListGroup as="ol" numbered className="mt-4">
                {termofuse.map(({ description, header, link }, i) => (
                    <ListGroup.Item
                        key={i}
                        as="li"
                        className="d-flex mb-5 justify-content-between align-items-start bg-smoky-black border-0 border-bottom text-light fs-4"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{header}</div>
                            <p className="fs-6">
                                {description}{" "}
                                {link && (
                                    <Link to="#" className="text-blue-300">
                                        {link}
                                    </Link>
                                )}
                            </p>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Fragment>
    )
}

export default TermsOfUse
