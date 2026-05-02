"use client"
import { motion } from "framer-motion";

export default function CommunityCTA() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="space-y-8"
                >
                    <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4">
                        <span className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase px-4">Newsletter</span>
                    </div>

                    <h2 className="text-5xl font-serif font-bold text-slate-900 leading-tight">
                        Join Our Community
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Sign up to receive the latest events, announcements, and news delivered straight to your inbox.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-3 mt-10 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="your.address@email.com"
                            className="flex-1 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition text-slate-900 font-medium"
                        />
                        <button className="bg-blue-950 text-white px-8 py-4 rounded-xl font-black text-xs tracking-widest hover:bg-blue-900 transition-all shadow-lg active:scale-95">
                            JOIN US NOW
                        </button>
                    </form>

                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-4">
                        Exclusions apply to management's prerogative.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}