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
                                Welcome to the website of Oocidia (Pte.) Ltd. (the “Website”). 
                                By accessing or using the Website, you agree to be bound by 
                                these Terms of Use (“Terms”). If you do not agree to these Terms, 
                                please refrain from using the Website. These Terms are 
                                governed by Singapore law.
                            </p>
                        </div>
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup as="ol" numbered className="mt-4">
                    {termofuse.map(({ description, header, link, list_item }, i) => (
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
                                    {/* Cek apakah list_item memiliki isi */}
                                    {list_item.length > 0 && (
                                        <ul className="mt-4">
                                            {list_item.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </p>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <ListGroup as="ul">
                    <ListGroup.Item
                        as="li"
                        className="d-flex mb-5 justify-content-between align-items-start bg-smoky-black border-0 border-bottom text-light fs-4 fw-bold animate__animated animate__fadeInLeft"
                    >
                        <div className="ms-2 me-auto">
                            <div>Jurisdictional Disclaimer</div>
                            <p className="fs-6 fw-normal">
                                This Website and its contents are intended solely for 
                                users located in Singapore. Oocidia (Pte.) Ltd. does 
                                not currently actively market, offer, or provide goods 
                                or services to individuals located outside Singapore, 
                                including residents of the United States or the European 
                                Union. Any access to this Website by users outside Singapore 
                                is incidental and not intended as an effort to target or 
                                monitor such users. By accessing this Website, you 
                                acknowledge and agree that:  
                                <ul className="mt-4">
                                    <li>The Website and its services are governed solely by Singapore law.</li>
                                    <li>Oocidia (Pte.) Ltd. does not guarantee compliance with any laws, regulations, or standards applicable outside Singapore.</li>
                                    <li>If you are accessing this Website from a jurisdiction where its use is contrary to local laws or regulations, you do so at your own risk and are solely responsible for compliance with such laws.</li>
                                </ul>
                            </p>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Fragment>
        </>
    )
}

export default TermsOfUse
