"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuickAddProps {
    onAdd: (name: string) => void;
}

export default function QuickAdd({ onAdd }: QuickAddProps) {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onAdd(name.trim());
            setName("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full relative">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add a new habit..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-electric-violet/50 focus:border-electric-violet/50 transition-all shadow-lg backdrop-blur-sm"
            />
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                disabled={!name.trim()}
                className={cn(
                    "absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-colors",
                    name.trim()
                        ? "bg-electric-violet text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                        : "text-zinc-600 bg-transparent cursor-not-allowed"
                )}
            >
                <Plus size={20} />
            </motion.button>
        </form>
    );
}
