"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Habit {
    id: string;
    name: string;
    completedDates: string[];
}

interface HabitItemProps {
    habit: Habit;
    toggleHabit: (id: string, date: string) => void;
}

export default function HabitItem({ habit, toggleHabit }: HabitItemProps) {
    // Generate last 7 days
    const days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (6 - i));
        return d.toISOString().split('T')[0];
    });

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col space-y-2 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
        >
            <div className="flex justify-between items-center px-1">
                <span className="text-base font-medium text-white/90">{habit.name}</span>
            </div>
            <div className="flex justify-between gap-1">
                {days.map((date, index) => {
                    const isCompleted = habit.completedDates.includes(date);
                    const isToday = index === 6;
                    const dayLabel = new Date(date).toLocaleDateString("en-US", { weekday: "narrow" });

                    return (
                        <div key={date} className="flex flex-col items-center gap-1">
                            <span className={cn(
                                "text-[10px] uppercase font-bold",
                                isToday ? "text-soft-teal" : "text-zinc-600"
                            )}>
                                {dayLabel}
                            </span>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => toggleHabit(habit.id, date)}
                                className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
                                    isCompleted
                                        ? "bg-electric-violet border-electric-violet text-charcoal shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                                        : "bg-transparent border-zinc-800 text-transparent hover:border-zinc-600",
                                    isToday && !isCompleted && "border-soft-teal/50 ring-1 ring-soft-teal/20"
                                )}
                            >
                                <div className={cn(
                                    "transition-all duration-300 transform",
                                    isCompleted ? "scale-100 opacity-100" : "scale-0 opacity-0"
                                )}>
                                    <Check className="w-5 h-5 font-bold text-white" strokeWidth={4} />
                                </div>
                            </motion.button>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
