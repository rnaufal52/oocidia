import { UNSAFE_ErrorResponseImpl, useRouteError } from "react-router-dom"
import ErrorNotFound from "Errors/ErrorNotFound"
import UnknownError from "Errors/UnknownError"

const Error = () => {
    const error = useRouteError()
    if (error instanceof UNSAFE_ErrorResponseImpl) {
        switch (error.status) {
            case 404:
                return <ErrorNotFound />

            default:
                return <UnknownError />
        }
    }

    return <UnknownError />
}

export default Error
