"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotes = [
    "Simplify, then add lightness. - Colin Chapman",
    "The details are not the details. They make the design. - Charles Eames",
    "Less, but better. - Dieter Rams",
    "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupéry",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci"
];

export default function QuoteSection() {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    }, []);

    if (!quote) return null;

    return (
        <div className="w-full flex justify-center mt-4 mb-2">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-center max-w-[280px]"
            >
                <p className="text-[10px] text-zinc-600 font-mono tracking-widest mb-2 uppercase">
                    Vibe of the Day
                </p>
                <p className="text-xs text-zinc-400 italic font-light leading-relaxed">
                    "{quote}"
                </p>
            </motion.div>
        </div>
    );
}
