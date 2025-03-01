import { useEffect, useState } from "react";
import { Button } from "antd";
import { IoMdArrowDropup } from "react-icons/io";
import "./ScrollToTopBtn.css"

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="ScrollToTopBtn"
            >
                <IoMdArrowDropup/>
            </button>
        )
    );
};

export default ScrollToTop;
