import { Row, Col, Image } from "react-bootstrap";
import TitleDivider from "./TitleDivider";
import { HeaderPageProps } from "types";

const HeaderPage: React.FC<HeaderPageProps> = ({ title, text, image, imageAlt }) => {
    return (
        <Row xs={1} lg={2} className="mt-4 g-6">
            <Col lg={7}>
                <TitleDivider className="mb-4">{title}</TitleDivider>
                {text.map((paragraph, index) => (
                    <p key={index} className="animate__animated animate__fadeInLeft me-4">{paragraph}</p>
                ))}
            </Col>
            <Col lg={5}>
                <Image
                    src={image}
                    alt={imageAlt}
                    style={{ maxHeight: "500px" }}
                    className="rounded-5 object-fit-cover w-100 animate__animated animate__fadeInRight"
                />
            </Col>
        </Row>
    );
};

export default HeaderPage;
