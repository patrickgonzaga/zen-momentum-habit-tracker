"use client";

import HabitItem, { Habit } from "./HabitItem";

interface HabitGridProps {
    habits: Habit[];
    toggleHabit: (id: string, date: string) => void;
}

export default function HabitGrid({ habits, toggleHabit }: HabitGridProps) {
    if (habits.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-zinc-500 text-sm italic border border-dashed border-zinc-800 rounded-xl">
                No habits yet. Add one to start your flow.
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col gap-4">
            {habits.map((habit) => (
                <HabitItem key={habit.id} habit={habit} toggleHabit={toggleHabit} />
            ))}
        </div>
    );
}
