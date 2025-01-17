const useCarouselControlClick = () => {
    const handler = (type: "prev" | "next") => {
        const currentIndicator = document.querySelector(
            `.__carousel-indicators button[aria-current="true"]`
        )!

        const updateIndicator = (target: Element) => {
            currentIndicator.classList.remove("active")
            currentIndicator.removeAttribute("aria-current")

            target.classList.add("active")
            target.setAttribute("aria-current", "true")
        }

        switch (type) {
            case "prev":
                const prev =
                    currentIndicator.previousElementSibling ||
                    currentIndicator.parentElement?.lastChild
                if (!prev) return

                updateIndicator(prev as Element)
                break

            case "next":
                const next =
                    currentIndicator.nextElementSibling ||
                    currentIndicator.parentElement?.firstChild
                if (!next) return

                updateIndicator(next as Element)
                break
        }
    }

    return handler
}

export default useCarouselControlClick
