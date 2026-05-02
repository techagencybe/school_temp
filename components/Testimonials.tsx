"use client";
import { useState, useEffect } from "react";
import { SchoolConfig } from "@/config/school-data";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-slide logic
    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(() => {
                setIndex((prev) => (prev + 1) % SchoolConfig.testimonials.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isHovered]);

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left Side: Avatar Arc (The Design Concept) */}
                <div className="relative h-[400px] flex items-center justify-center">
                    {/* Subtle connecting arc line */}
                    <svg className="absolute left-1/2 -translate-x-1/2 w-full h-full text-slate-200" viewBox="0 0 100 100">
                        <path d="M 50 10 Q 20 50 50 90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    </svg>

                    {SchoolConfig.testimonials.map((t, i) => {
                        // Logic to position avatars in an arc
                        const isActive = index === i;
                        const offset = (i - index) * 80;
                        return (
                            <motion.button
                                key={t.name}
                                onMouseEnter={() => { setIndex(i); setIsHovered(true); }}
                                onMouseLeave={() => setIsHovered(false)}
                                animate={{
                                    y: offset,
                                    x: isActive ? -40 : 0, // Moves active one out to the left
                                    scale: isActive ? 1.3 : 0.8,
                                    opacity: isActive ? 1 : 0.4
                                }}
                                className={`absolute w-20 h-20 rounded-full border-4 transition-colors p-1 shadow-xl
                  ${isActive ? 'border-blue-600 bg-white' : 'border-white bg-slate-200'}`}
                            >
                                <img src={t.image} className="w-full h-full rounded-full object-cover" alt="" />
                            </motion.button>
                        );
                    })}
                </div>

                {/* Right Side: Animated Testimonial Content */}
                <div className="relative">
                    <Quote className="text-blue-100 w-24 h-24 absolute -top-10 -left-10 z-0" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="relative z-10"
                        >
                            <h4 className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4">What People Say</h4>
                            <p className="text-3xl font-serif italic text-slate-800 leading-snug mb-8">
                                "{SchoolConfig.testimonials[index].quote}"
                            </p>
                            <div>
                                <p className="font-black text-slate-950 uppercase tracking-tighter">{SchoolConfig.testimonials[index].name}</p>
                                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">{SchoolConfig.testimonials[index].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress Indicators */}
                    <div className="mt-12 flex gap-2">
                        {SchoolConfig.testimonials.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 transition-all duration-500 rounded-full ${index === i ? 'w-12 bg-blue-600' : 'w-4 bg-slate-200'}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}