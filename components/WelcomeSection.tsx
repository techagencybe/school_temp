"use client"
import { SchoolConfig } from "@/config/school-data";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WelcomeSection() {
    const { welcome } = SchoolConfig;
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Images Side (Overlapping like Edmund High) */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="rounded-lg overflow-hidden shadow-2xl relative z-10 w-[85%]"
                    >
                        <img src="/images/hero-carousel/Class-ambience-scaled.jpg" alt="Students" className="w-full aspect-[4/3] object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute -bottom-10 -right-4 w-[60%] rounded-lg overflow-hidden shadow-xl border-8 border-white z-20"
                    >
                        <img src="/images/high-school.jpg" alt="Lab" className="w-full aspect-square object-cover" />
                    </motion.div>
                </div>

                {/* Content Side */}
                <div>
                    <span className="text-blue-900 font-black text-[10px] tracking-[0.3em] uppercase">{welcome.subtitle}</span>
                    <h2 className="text-5xl font-serif font-bold text-slate-900 mt-4 mb-6 leading-tight">
                        {welcome.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                        {welcome.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {welcome.points.map(point => (
                            <div key={point} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                                <CheckCircle2 size={18} className="text-blue-600" /> {point}
                            </div>
                        ))}
                    </div>
                    <button className="bg-blue-950 text-white px-10 py-4 font-bold text-xs hover:bg-blue-900 transition tracking-widest whitespace-nowrap">
                        REGISTER NOW
                    </button>
                </div>
            </div>
        </section>
    );
}