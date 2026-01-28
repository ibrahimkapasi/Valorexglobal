// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center bg-black overflow-hidden relative">
            {/* Background Gradient Blob */}
            <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 relative px-4"
            >
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-6">
                    We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Digital Art</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    AgencyX is a premium design studio building the future of web experiences.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition-colors"
                >
                    Start a Project
                </motion.button>
            </motion.div>
        </section>
    );
}