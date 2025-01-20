import errNotFound from "assets/animations/errors/not-found.json"
import Lottie from "lottie-react"
import { Col } from "react-bootstrap"

const ErrorNotFound = () => {
    return (
        <Col className="vw-100 vh-100 d-flex vh-100 overflow-hidden bg-space-cadet">
            <Lottie
                animationData={errNotFound}
                loop
                autoPlay
                style={{ width: "100%", maxWidth: "600px" }}
                className="mx-auto"
            />
        </Col>
    )
}

export default ErrorNotFound
