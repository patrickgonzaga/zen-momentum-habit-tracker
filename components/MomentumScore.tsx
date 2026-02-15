"use client";

import { motion } from "framer-motion";

interface MomentumScoreProps {
    score: number;
}

export default function MomentumScore({ score }: MomentumScoreProps) {
    const radius = 58;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="flex flex-col items-center justify-center space-y-2">
            <h2 className="text-zinc-400 text-sm font-medium tracking-widest uppercase">
                Daily Vibe
            </h2>
            <div className="relative flex items-center justify-center w-36 h-36">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="72"
                        cy="72"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-white/10"
                    />
                    <motion.circle
                        cx="72"
                        cy="72"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-electric-violet"
                        initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: circumference - (circumference * score) / 100 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                </svg>

                {/* Score Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-4xl font-bold bg-gradient-to-r from-electric-violet to-soft-teal bg-clip-text text-transparent"
                    >
                        {score}%
                    </motion.span>
                </div>
            </div>
        </div>
    );
}
