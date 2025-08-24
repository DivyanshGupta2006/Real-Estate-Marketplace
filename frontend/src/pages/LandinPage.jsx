import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import BitcoinCoin from "../components/BitcoinCoin";
import ethCursor from "../assets/ethereum-cursor2.png";

export default function LandingPage() {
    const coinPositions = ["15%", "35%", "55%", "75%"];

    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden font-premium text-white px-4"
            style={{
                fontFamily: "'Cinzel', serif",
                background: "linear-gradient(135deg, #16253e 50%, #343972 100%)",
                cursor: `url(${ethCursor}) 16 16, auto`,
            }}
        >
            {/* Corners Gold Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed top-0 right-0 w-[40vw] h-[40vw]"
                style={{
                    filter: "blur(80px)",
                    background:
                        "radial-gradient(circle at top right, rgba(255,224,132,0.3) 27%, transparent 65%)",
                    zIndex: 0,
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none fixed bottom-0 left-0 w-[36vw] h-[36vw]"
                style={{
                    filter: "blur(100px)",
                    background:
                        "radial-gradient(circle at bottom left, rgba(255,224,132,0.2) 35%, transparent 65%)",
                    zIndex: 0,
                }}
            />

            {/* Top Left Lottie Animation */}
            <div
                className="absolute top-8 left-8 z-0 pointer-events-none"
                style={{ width: 350, height: 350, opacity: 0.7, filter: "drop-shadow(0 0 40px #6252e1)" }}
            >
                <Player autoplay loop src="/lottie3.json" style={{ width: "100%", height: "100%" }} />
            </div>

            {/* Bottom Right Lottie Animation */}
            <div
                className="absolute bottom-28 right-8 z-0 pointer-events-none"
                style={{ width: 350, height: 350, opacity: 0.7, filter: "drop-shadow(0 0 40px #6252e1)" }}
            >
                <Player autoplay loop src="/lottie4.json" style={{ width: "100%", height: "100%" }} />
            </div>

            {/* Bitcoin drops with image */}
            {coinPositions.map((left, index) => (
                <BitcoinCoin
                    key={index}
                    style={{ left, top: "-10%" }}
                    delay={index * 2}
                    imgSrc="/ethereum.png"
                />
            ))}

            {/* Animated logo */}
            <motion.img
                src="/logo.png"
                alt="Logo"
                className="mb-12 w-40 h-40 object-contain select-none z-10"
                animate={{
                    y: [0, -20, 0], // moves up 20px and back down
                    filter: [
                        "drop-shadow(0 0 10px rgba(255,224,132,0.7))",
                        "drop-shadow(0 0 20px rgba(255,224,132,1))",
                        "drop-shadow(0 0 10px rgba(255,224,132,0.7))",
                    ],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                draggable={false}
            />

            {/* Headline – BIG, sharp and clear without blur */}
            <motion.h1
                className="bg-gradient-to-br from-[#fff5cc] via-[#ffe084] to-[#b8860b] bg-clip-text text-transparent text-center text-[7vw] font-bold tracking-widest drop-shadow-lg relative z-20 select-none"
                style={{
                    textShadow: "0 8px 30px #b08d21, 0 3px 14px #ffe084a0",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.5 }}
            >
                RealEstate
            </motion.h1>
            <motion.h2
                className="bg-gradient-to-br from-[#fff5cc] via-[#ffe084] to-[#b8860b] bg-clip-text text-transparent text-center text-5xl font-semibold tracking-wide drop-shadow-md mt-2 mb-20 select-none z-20"
                style={{
                    textShadow: "0 6px 24px #b08d21, 0 2px 8px #ffe08480",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 1.0 }}
            >
                Marketplace
            </motion.h2>

            {/* LOG IN Button - gold glow pulse & stays on hover */}
            <motion.button
                className="mt-4 px-16 py-4 rounded border border-[#ffe084] text-[#ffe084] font-premium text-2xl tracking-wider shadow-lg bg-transparent select-none z-20"
                initial={{ boxShadow: "0 0 16px 1px rgba(255, 224, 132, 0.5)" }}
                animate={{
                    boxShadow: [
                        "0 0 16px 1px rgba(255, 224, 132, 0.5)",
                        "0 0 32px 8px rgba(255, 224, 132, 1)",
                        "0 0 16px 1px rgba(255, 224, 132, 0.5)",
                    ],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                whileHover={{
                    boxShadow: "0 0 32px 12px rgba(255,224,132,1)",
                    scale: 1.07,
                }}
            >
                LOG IN
            </motion.button>
        </div>
    );
}
