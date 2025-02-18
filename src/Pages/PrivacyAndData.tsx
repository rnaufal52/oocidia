import TitleDivider from "Components/TitleDivider"
import { Fragment } from "react"
import privacyData from "assets/data/privacy-data.json"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const PrivacyAndData = () => {
    const { "privacy-data": privaciesData,duedate } = privacyData

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <Fragment>
                <TitleDivider>Privacy Notice</TitleDivider>
                
                <ListGroup as="ul" className="mt-4">
                    <ListGroup.Item
                        as="li"
                        className="d-flex mb-5 justify-content-between align-items-start bg-smoky-black border-0 border-bottom text-light fs-4 fw-bold animate__animated animate__fadeInLeft"
                    >
                        <div className="ms-2 me-auto">
                            <div>Effective Date: {duedate}</div>
                            <p className="fs-6">
                            Oocidia (Pte.) Ltd. (“Oocidia”, “we”, “our”, or “us”) respects your 
                            privacy and is committed to protecting your personal data. This 
                            Privacy Notice explains how we collect, use, disclose, and protect 
                            your personal data in accordance with the Singapore Personal Data 
                            Protection Act 2012 (PDPA). By accessing or using our website 
                            (the “Website”), you agree to the terms of this Privacy Notice.
                            </p>
                        </div>
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup as="ol" numbered className="mt-4">
                    {privaciesData.map(({ description, header, link, list_item,end_text}, i) => (
                        <ListGroup.Item
                            key={i}
                            as="li"
                            className="d-flex mb-5 justify-content-between align-items-start bg-smoky-black border-0 border-bottom text-light fs-4 fw-bold animate__animated animate__fadeInLeft"
                            style={{ animationDelay: `${i / 5}s` }}
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
                                    {list_item.length > 0 && (
                                        <ul className="mt-4 mb-3">
                                            {list_item.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {end_text}
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
