import {Carousel} from "react-bootstrap";
import bg1 from "assets/img/bg-01.webp";
import bg2 from "assets/img/bg-02.webp";
import bg3 from "assets/img/bg-03.webp";

const Carousele=()=>{
    return(
            <div className="home-carousel-wrapper">
                <Carousel>
                    <Carousel.Item>
                        <div className="overlay"></div> 
                        <img
                            className="carousel-image d-block w-100 h-100"
                            src={bg1}
                            alt="First slide cell"
                        />
                        <div className="carousel-text">
                            <h1 className="fw-bold animate__animated animate__fadeInUp">
                                <span className="text-blue-200">Animal</span> Health
                                <br />
                                Inspired by
                                <span className="text-blue-200"> passion,</span>
                                <br />
                                <span className="text-blue-200">Founded </span>by science.
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

                    <Carousel.Item>
                        <div className="overlay"></div> 
                        <img
                            className="carousel-image d-block w-100 h-100"
                            src={bg2}
                            alt="Second slide cow"
                        />
                        <div className="carousel-text">
                            <h1 className="fw-bold animate__animated animate__fadeInUp">
                                <span className="text-blue-200">Animal</span> Health
                                <br />
                                Inspired by
                                <span className="text-blue-200"> passion,</span>
                                <br />
                                <span className="text-blue-200">Founded </span>by science.
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

                    <Carousel.Item>
                        <div className="overlay"></div> 
                        <img
                            className="carousel-image d-block w-100 h-100"
                            src={bg3}
                            alt="Third slide cats"
                        />
                        <div className="carousel-text">
                            <h1 className="fw-bold animate__animated animate__fadeInUp">
                                <span className="text-blue-200">Animal</span> Health
                                <br />
                                Inspired by
                                <span className="text-blue-200"> passion,</span>
                                <br />
                                <span className="text-blue-200">Founded </span>by science.
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
                </Carousel>
            </div>
    )
}

export default Carousele;
