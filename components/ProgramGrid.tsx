"use client"
import { SchoolConfig } from "@/config/school-data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProgramGrid() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-16">
                    <span className="text-blue-900 font-black text-[10px] tracking-[0.3em] uppercase">OUR SCHOOLS</span>
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mt-2">Academic Programs</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SchoolConfig.programs.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-2 rounded-xl group hover:shadow-2xl transition-all duration-500 border border-slate-100"
                        >
                            <div className="overflow-hidden rounded-lg mb-6">
                                <img src={p.image} className="w-full aspect-video object-cover group-hover:scale-105 transition duration-700" alt="" />
                            </div>
                            <div className="px-6 pb-8">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{p.label}</span>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mt-2 mb-4">{p.name}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.desc}</p>
                                <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                                    <span className="text-xs font-bold text-slate-400">LEARN MORE</span>
                                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}