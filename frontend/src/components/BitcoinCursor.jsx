import React, { useEffect, useState } from "react";

const bitcoinSvg = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#FFD700"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="32" cy="32" r="30" fill="#B8860B" />
        <path
            d="M41 20h-6l2-8h-4l-2 8h-4l2-8h-4l-2 8H21v4h1v16h-1v4h5l2 8h4l-2-8h6l-2 8h4l2-8h5v-4h-1V24h1v-4zM32 35c-3 0-5-2-5-4s2-4 5-4 5 2 5 4-2 4-5 4z"
            fill="#fff"
        />
    </svg>
);

export default function BitcoinCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            style={{
                pointerEvents: "none",
                position: "fixed",
                top: position.y - 20, // Center the 40x40 SVG cursor
                left: position.x - 20,
                width: 40,
                height: 40,
                zIndex: 9999,
                transition: "top 0.05s ease, left 0.05s ease",
            }}
            aria-hidden="true"
        >
            {bitcoinSvg}
        </div>
    );
}
