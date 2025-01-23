import { FC, HTMLAttributes } from "react"

const TitleDivider: FC<HTMLAttributes<HTMLHeadingElement>> = ({
    className,
    children,
    ...props
}) => {
    return (
        <h2
            className={`text-blue-200 d-flex align-items-center gap-3 gap-lg-4 animate__animated animate__fadeInLeft ${
                className || ""
            }`}
            {...props}
        >
            <div className="divider" /> {children}
        </h2>
    )
}

export default TitleDivider
