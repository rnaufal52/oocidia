import TitleDivider from "Components/TitleDivider"
import { Fragment } from "react"
import privacyData from "assets/data/privacy-data.json"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet-async'


const PrivacyAndData = () => {
    const { "privacy-data": privaciesData } = privacyData

    return (
        <>
        <Helmet>
            <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Fragment>
            <TitleDivider>Privacy and Data</TitleDivider>

            <ListGroup as="ol" numbered className="mt-4">
                {privaciesData.map(({ description, header, link }, i) => (
                    <ListGroup.Item
                        key={i}
                        as="li"
                        className="d-flex mb-5 justify-content-between align-items-start bg-smoky-black border-0 border-bottom text-light fs-4 fw-bold"
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

export default PrivacyAndData
