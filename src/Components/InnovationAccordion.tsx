import { Col, Image, Accordion } from "react-bootstrap";
import logo_tab from "assets/img/logo_tab.png";

const InnovationAccordion = () => {
    const accordionItems = [
        {
            key: "1",
            title: "Our Approach to Innovation",
            content:
                "At Oocidia, our approach to innovation is built on three pillars: scientific rigor, practical application, and collaboration. By leveraging decades of expertise in veterinary drug development, we have created a robust pipeline of therapeutics that address unmet needs in animal health. Our proprietary methods enable us to accelerate discovery while maintaining the highest standards of safety and efficacy."
        },
        {
            key: "2",
            title: "Collaborative Partnerships",
            content:
                "We believe that collaboration is key to driving meaningful progress in veterinary medicine. Oocidia works closely with leading academic institutions, regulatory advisors, and industry partners worldwide to ensure that our research translates into impactful solutions for farmers, veterinarians, and pet owners."
        },
        {
            key: "3",
            title: "Our Commitment to Sustainability",
            content:
                "Oocidia is committed to advancing sustainable practices in animal health. By reducing reliance on antibiotics and developing targeted therapies with minimal environmental impact, we aim to contribute to a healthier planet while supporting the global food supply chain."
        }
    ];

    return (
        <Col lg={10} xxl={8} className="mx-auto mt-6">
            <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
                Innovating Animal Health: Science, Collaboration, and Sustainability
            </h2>
            <Accordion defaultActiveKey="1" flush>
                {accordionItems.map(({ key, title, content }) => (
                    <Accordion.Item eventKey={key} key={key}>
                        <Accordion.Header>
                            <h4>
                                <span className="me-3">
                                    <Image src={logo_tab} alt="logo_tab" style={{ maxWidth: "40px" }} />
                                </span>
                                {title}
                            </h4>
                        </Accordion.Header>
                        <Accordion.Body>{content}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Col>
    );
};

export default InnovationAccordion;
