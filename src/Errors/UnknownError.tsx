import { Col } from "react-bootstrap"
import Lottie from "lottie-react"
import serverError from "assets/animations/errors/server-error.json"

const UnknownError = () => {
    return (
        <Col className="vw-100 vh-100 overflow-hidden d-flex align-items-center">
            <Lottie
                className="mx-auto"
                style={{ width: "100%", maxWidth: "800px" }}
                animationData={serverError}
                loop
                autoPlay
            />
        </Col>
    )
}

export default UnknownError
