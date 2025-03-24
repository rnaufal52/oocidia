import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // Gunakan pathname sebagai dependency agar selalu mereset saat route berubah

    return null;
};

export default ScrollToTop;
