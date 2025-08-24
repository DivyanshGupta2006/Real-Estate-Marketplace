import React from "react";
import { motion } from "framer-motion";

export default function BitcoinCoin({ style, delay, imgSrc = "/bitcoin.png" }) {
    return (
        <motion.img
            src={imgSrc}
            alt="Bitcoin"
            style={{
                position: "absolute",
                width: "55px",
                height: "55px",
                pointerEvents: "none",
                ...style,
            }}
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: "110vh", opacity: 0 }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 8 + Math.random() * 4,
                delay,
                ease: "linear",
            }}
            draggable={false}
        />
    );
}
