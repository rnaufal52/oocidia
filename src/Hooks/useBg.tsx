import { useEffect } from "react"

const useBg = () => {
    useEffect(() => {
        const homeNavbar = document.querySelector(".home-navbar")
        if (!homeNavbar) return

        document.body.classList.add("bg")
        homeNavbar.classList.add("bg-transparent")

        return () => {
            document.body.classList.remove("bg")
            homeNavbar.classList.remove("bg-transparent")
        }
    }, [])
}

export default useBg
