import React from "react";
import "./WhatsAppPulseButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppPulseButton = () => {
    const handleWhatsAppClick = () => {
        window.open("https://wa.me/9327018703", "_blank"); // Replace with your WhatsApp number
    };

    return (
        <div className="whatsapp-button" onClick={handleWhatsAppClick}>
            <FaWhatsapp className="whatsapp-icon" />
        </div>
    );
};

export default WhatsAppPulseButton;
