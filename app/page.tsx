"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import MomentumScore from "@/components/MomentumScore";
import HabitGrid from "@/components/HabitGrid";
import QuickAdd from "@/components/QuickAdd";
import QuoteSection from "@/components/QuoteSection";
import { Habit } from "@/components/HabitItem";

export default function Home() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load persistence
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("zen-momentum-habits");
      if (saved) {
        setHabits(JSON.parse(saved));
      } else {
        // Initial example data for first-time users
        setHabits([
          { id: "1", name: "Deep Work", completedDates: [] },
          { id: "2", name: "Read 20 pages", completedDates: [] },
          { id: "3", name: "Meditation", completedDates: [] },
        ]);
      }
    } catch (e) {
      console.error("Failed to load habits", e);
    }
  }, []);

  // Save persistence
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("zen-momentum-habits", JSON.stringify(habits));
    }
  }, [habits, mounted]);

  const toggleHabit = (id: string, date: string) => {
    setHabits(prev => prev.map(h => {
      if (h.id === id) {
        const isCompleted = h.completedDates.includes(date);
        return {
          ...h,
          completedDates: isCompleted
            ? h.completedDates.filter(d => d !== date)
            : [...h.completedDates, date]
        };
      }
      return h;
    }));
  };

  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      name,
      completedDates: []
    };
    setHabits(prev => [...prev, newHabit]);
  };

  // Calculate Momentum Score (based on today)
  // Use local time for "today" to avoid timezone mismatches with dates generated in client
  const getToday = () => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  };

  const today = getToday();
  const totalHabits = habits.length;
  const completedToday = habits.filter(h => h.completedDates.includes(today)).length;
  const score = totalHabits === 0 ? 0 : Math.round((completedToday / totalHabits) * 100);

  if (!mounted) return null;

  return (
    <Layout>
      <header className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
          Zen Momentum
        </h1>
        <MomentumScore score={score} />
      </header>

      <div className="flex-1 w-full flex flex-col gap-6 mt-4">
        <HabitGrid habits={habits} toggleHabit={toggleHabit} />
        <QuickAdd onAdd={addHabit} />
      </div>

      <QuoteSection />
    </Layout>
  );
}
