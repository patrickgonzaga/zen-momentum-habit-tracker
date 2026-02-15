"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-charcoal text-foreground font-sans relative overflow-hidden flex flex-col items-center justify-center p-4 selection:bg-electric-violet selection:text-white">
            {/* Background Gradient Mesh */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-electric-violet opacity-20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-soft-teal opacity-20 rounded-full blur-[120px] pointer-events-none" />

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative z-10 flex flex-col gap-8"
            >
                {children}
            </motion.main>
        </div>
    );
}
