import { useEffect, useState } from "react"

const useContentHeight = () => {
    const [content, setContent] = useState<HTMLDivElement>()
    const [contentHeight, setContentHeight] = useState(0)

    useEffect(() => {
        const homeNavbar = document.querySelector(".home-navbar")
        const homeFooter = document.querySelector(".home-footer")
        const content = document.querySelector(".main-content")

        if (content instanceof HTMLDivElement) setContent(content)

        if (!homeNavbar || !homeFooter) return

        const updateHeight = () => {
            const newHeight =
                document.documentElement.clientHeight -
                (homeFooter.clientHeight + homeNavbar.clientHeight)
            setContentHeight(newHeight)
        }

        // Update height on component mount
        updateHeight()

        // Add resize event listener to adjust height dynamically
        window.addEventListener("resize", updateHeight)

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateHeight)
        }
    })

    useEffect(() => {
        if (!content || contentHeight === 0) return

        content.style.minHeight = `${contentHeight}px`
    }, [contentHeight, content]) // Memperbarui style saat contentHeight berubah
}

export default useContentHeight
