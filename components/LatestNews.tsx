"use client"
import { SchoolConfig } from "@/config/school-data";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function LatestNews() {
    return (
        <section className="py-24 bg-blue-950 text-white overflow-hidden relative">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900 rounded-full blur-[120px] opacity-20 -mr-48 -mt-48" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-blue-400 font-black text-[10px] tracking-[0.4em] uppercase">Stay Updated</span>
                        <h2 className="text-5xl font-serif font-bold mt-4">Latest News & Events</h2>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-bold border-b border-blue-400 pb-2 hover:text-blue-400 transition">
                        VIEW ALL NEWSLETTERS <ArrowRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SchoolConfig.news.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="" />
                                <div className="absolute top-4 left-4 bg-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                                    {item.category}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-2 text-blue-300 text-xs mb-4">
                                    <Calendar size={14} /> {item.date}
                                </div>
                                <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-blue-300 transition">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6">
                                    {item.excerpt}
                                </p>
                                <button className="flex items-center gap-2 text-xs font-black tracking-widest uppercase hover:gap-4 transition-all">
                                    Read More <ArrowRight size={14} className="text-blue-400" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}