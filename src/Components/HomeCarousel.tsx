import { Carousel } from "react-bootstrap";
import bg1 from "assets/img/bg-01.webp";
import bg2 from "assets/img/bg-02.webp";
import bg3 from "assets/img/bg-03.webp";
import bg4 from "assets/img/bg-04.webp";
import bg5 from "assets/img/bg-05.webp";

const carouselItems = [
    { src: bg1, alt: "First slide cell" },
    { src: bg2, alt: "Second slide cow" },
    { src: bg3, alt: "Third slide cats" },
    { src: bg4, alt: "Fourth slide animals" },
    { src: bg5, alt: "Fifth slide wildlife" }
];

const HomeCarousel = () => {
    return (
        <div className="home-carousel-wrapper">
            <Carousel>
                {carouselItems.map((item, index) => (
                    <Carousel.Item key={index}>
                        <div className="overlay"></div>
                        <img className="carousel-image d-block w-100 h-100" src={item.src} alt={item.alt} />
                        <div className="carousel-text">
                            <h1 className="fw-bold animate__animated animate__fadeInUp">
                                <span className="text-blue-200">Animal</span> Health
                                <br /> Inspired by <span className="text-blue-200">passion,</span>
                                <br /> <span className="text-blue-200">Founded </span>by science.
                            </h1>
                            <a
                                href="#GrounbreakingWork"
                                className="btn btn-outline-light rounded-pill hover-bg-blue-200 px-5 mt-5 btn-our-groundbreaking-work d-inline-block animate__animated animate__fadeInUp"
                                style={{ animationDelay: "800ms" }}
                            >
                                Our Groundbreaking Work
                            </a>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default HomeCarousel;