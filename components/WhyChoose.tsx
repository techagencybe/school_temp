"use client"
import { SchoolConfig } from "@/config/school-data";
import { motion } from "framer-motion";
import { School, Globe, ShieldCheck, GraduationCap, Music, Award } from "lucide-react";

const icons = [School, Globe, ShieldCheck, GraduationCap, Music, Award];

export default function WhyChoose() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase">The LFIS Difference</span>
                    <h2 className="text-5xl font-serif font-bold text-slate-900 mt-4">Why Choose Us?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {SchoolConfig.features.map((f, i) => {
                        const Icon = icons[i] || School;
                        return (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-blue-950 hover:border-blue-900 transition-all duration-500 overflow-hidden"
                            >
                                {/* Greyed out background animation */}
                                <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none">
                                    <Icon size={200} strokeWidth={1} className="rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition duration-500 text-blue-900 group-hover:text-blue-600">
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition duration-500">{f.title}</h3>
                                    <p className="text-slate-500 group-hover:text-blue-100/80 text-sm leading-relaxed transition duration-500">
                                        {f.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}