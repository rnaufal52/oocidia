import { FC } from "react"

const Icon: FC<IconI> = ({ name, className, ...props }) => {
    return <i className={`bi bi-${name} ${className || ""}`} {...props} />
}

export default Icon
