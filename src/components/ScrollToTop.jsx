import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTopButton = () => {
    const [visible, setVisible] = useState(false);

    const checkScroll = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    return (
        <Zoom in={visible}>
            <Fab
                onClick={scrollToTop}
                color="primary"
                size="medium"
                sx={{
                    position: "fixed",
                    bottom: 32,
                    right: 32,
                    zIndex: 1200,
                }}
                aria-label="scroll back to top"
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
};

export default ScrollTopButton;
