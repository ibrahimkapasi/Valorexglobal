"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Configuration: Start date and Target Launch date
    // Assuming the project started roughly a month ago (Jan 1, 2026)
    // and launches in one month from now (March 1, 2026)
    const startDate = new Date("2026-01-01T00:00:00").getTime();
    const launchDate = new Date("2026-03-01T00:00:00").getTime();

    const calculateProgress = () => {
      const now = new Date().getTime();
      const totalDuration = launchDate - startDate;
      const elapsedTime = now - startDate;

      let percentage = (elapsedTime / totalDuration) * 100;

      // Clamp values between 0 and 100
      percentage = Math.max(0, Math.min(percentage, 100));
      
      setProgress(percentage);
    };

    // Initial calculation
    calculateProgress();

    // Update every minute (or second if you want more dynamic feel)
    const timer = setInterval(calculateProgress, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo / Brand Name */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
        >
          VALOREX GLOBAL
        </motion.h1>

        {/* Loading Section */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-mono text-gray-400">
            <span>LOADING EXPERIENCE</span>
            <span>{progress.toFixed(4)}%</span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="h-1 w-full bg-gray-800 overflow-hidden rounded-full">
            {/* Progress Bar Fill */}
            <motion.div 
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.5 }}
            />
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center text-gray-500 text-sm tracking-widest mt-8"
        >
          COMING SOON
        </motion.p>
      </div>
    </div>
  );
}
