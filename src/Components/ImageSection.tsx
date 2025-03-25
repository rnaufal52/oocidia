import { Col, Image } from "react-bootstrap";
import { ImageSectionProps } from "types";

const ImageSection = ({ title, image, imageAlt,text }: ImageSectionProps) => (
    <Col lg={10} xxl={8} className="mx-auto mt-6">
        <h2 className="text-blue-200 my-5 animate__animated animate__fadeInUp">
            {title}
        </h2>
        <Image
            src={image}
            alt={imageAlt}
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
        />
        <p className="text-justify mt-5">{text}</p>
    </Col>
);

export default ImageSection;