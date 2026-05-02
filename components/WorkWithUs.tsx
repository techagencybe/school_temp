"use client"
import { Briefcase, Send } from "lucide-react";

export default function WorkWithUs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-slate-900 rounded-[2rem] p-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    {/* Subtle Graphic Element */}
                    <Briefcase className="absolute -bottom-10 -left-10 w-64 h-64 text-white/5 -rotate-12" />

                    <div className="relative z-10 lg:max-w-xl text-center lg:text-left">
                        <h2 className="text-4xl font-serif font-bold text-white mb-4">Work With Us</h2>
                        <p className="text-slate-400 text-lg">
                            We look forward to having your expertise on board. Join our team of dedicated educators and professionals.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full lg:w-auto">
                        <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-black text-xs tracking-widest hover:bg-blue-50 transition shadow-xl">
                            REQUEST VACANCY ADVERTS
                        </button>
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-xs tracking-widest hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-xl">
                            APPLY NOW <Send size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}