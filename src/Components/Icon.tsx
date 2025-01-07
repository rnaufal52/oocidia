import { FC } from "react"

const Icon: FC<IconI> = ({ name }) => {
    return <i className={`bi bi-${name}`} />
}

export default Icon
