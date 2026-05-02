"use client"
import { SchoolConfig } from "@/config/school-data";
import { MapPin, Phone, Mail, Plus, ArrowUpRight } from "lucide-react";

export default function CanadaSection() {
    const { canadaPartnership: c } = SchoolConfig;
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Main Content (2/3) */}
                <div className="lg:col-span-2">
                    <span className="text-blue-900 font-black text-[10px] tracking-[0.3em] uppercase">{c.subtitle}</span>
                    <h2 className="text-5xl font-serif font-bold text-slate-900 mt-4 mb-8 leading-tight">
                        {c.title}
                    </h2>
                    <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
                        <img src={c.image} className="w-full h-[400px] object-cover" alt="" />
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                        {c.desc}
                    </p>
                </div>

                {/* Sidebar Info (1/3 - Exactly like Edmund High) */}
                <div className="space-y-8">
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                        <h4 className="text-xl font-serif font-bold text-slate-900 mb-6">Program Activities</h4>
                        <div className="space-y-4">
                            {c.activities.map(act => (
                                <div key={act} className="flex items-center gap-4 py-3 border-b border-slate-200 group cursor-default">
                                    <Plus size={16} className="text-slate-400 group-hover:rotate-90 transition group-hover:text-blue-600" />
                                    <span className="text-sm font-bold text-slate-700">{act}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-950 text-white p-8 rounded-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="text-xl font-serif font-bold mb-6">Contact Admission</h4>
                            <div className="space-y-4 text-xs font-medium opacity-80">
                                <p className="flex items-center gap-3"><Phone size={14} /> {SchoolConfig.contact.highSchoolPhone}</p>
                                <p className="flex items-center gap-3 break-all"><Mail size={14} /> admissions@lfis-edu.org</p>
                            </div>
                            <button className="w-full mt-8 bg-white text-blue-950 py-4 font-black text-[10px] tracking-widest rounded flex items-center justify-center gap-2">
                                ENQUIRE NOW <ArrowUpRight size={14} />
                            </button>
                        </div>
                        {/* Design flourish: giant subtle icon in background */}
                        <MapPin className="absolute -bottom-10 -right-10 text-white/5 w-40 h-40" />
                    </div>
                </div>

            </div>
        </section>
    );
}