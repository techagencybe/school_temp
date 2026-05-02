"use client"
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function DocumentarySection() {
    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background pattern/flourish */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <span className="text-blue-400 font-black text-[10px] tracking-[0.3em] uppercase">EXPERIENCE LFIS</span>
                    <h2 className="text-4xl font-serif font-bold text-white mt-4">Our School Documentary</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative group rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5 bg-slate-900 aspect-video"
                >
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Z462BmQFEAc"
                        title="Living Fountain International School Documentary"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                    
                    {/* Subtle overlay that disappears if they interact? 
                        Actually, an iframe captures mouse events, so a play button overlay is tricky without a custom player.
                        I'll just leave it as a clean iframe. 
                    */}
                </motion.div>

                <div className="mt-12 flex justify-center gap-12 text-blue-100/40 font-bold tracking-[0.2em] text-[10px] uppercase">
                    <span>Leadership</span>
                    <span>•</span>
                    <span>Academic Excellence</span>
                    <span>•</span>
                    <span>Service</span>
                </div>
            </div>
        </section>
    );
}
