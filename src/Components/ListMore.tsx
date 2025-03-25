import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ListMoreProps } from "types";

const ListMore: React.FC<ListMoreProps> = ({ id, title, text, link, linkText, image, imageAlt, imageStyle }) => {
    return (
        <section id={id} className="mt-10">
            <Row lg={8} className="g-4 justify-content-center align-items-center">
                <Col lg={5}>
                    <h2 className="text-blue-200">{title}</h2>
                    <p className="text-justify">{text}</p>
                    <Link
                        to={link}
                        state={{ resetScroll: true }}
                        className="btn btn-outline-light rounded-pill hover-bg-blue-200 px-5 btn-our-groundbreaking-work d-inline-block animate__animated animate__fadeInUp"
                        style={{ animationDelay: "800ms" }}
                    >
                        {linkText}
                    </Link>
                </Col>
                <Col lg={3} className="text-center text-lg-end h-100">
                    <Image
                        src={image}
                        alt={imageAlt}
                        className="w-100 h-100"
                        style={{ objectFit: "cover", ...imageStyle }}
                    />
                </Col>
            </Row>
        </section>
    );
};

export default ListMore;
