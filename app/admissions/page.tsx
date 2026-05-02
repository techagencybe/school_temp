"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    ClipboardCheck,
    FileText,
    CreditCard,
    Download,
    MessageCircle,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    HelpCircle
} from "lucide-react";

export default function AdmissionsPage() {
    const steps = [
        { title: "Purchase Form", desc: "Forms cost ₦10,000. Purchase at the school front desk or download online." },
        { title: "Submission", desc: "Return completed forms with required documents to the school office." },
        { title: "Assessment", desc: "Students will sit for a mandatory entrance/assessment test." },
        { title: "Offer", desc: "Successful candidates receive an admission offer subject to vacancy." }
    ];

    const primaryDocs = ["Birth Certificate", "Two Recent Passport Photos", "Last School Result (Transfers)", "Transfer Certificate (Transfers)"];

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* 1. Hero Section - Focused on "The Journey" */}
            <section className="relative pt-32 pb-24 bg-blue-950 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="/images/highschool.jpg" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <span className="text-blue-300 font-black text-[10px] tracking-[0.4em] uppercase font-['Prompt']">Join Our Community</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mt-4 leading-tight">
                            Admissions <br />& Enrollment
                        </h1>
                        <p className="mt-6 text-xl text-blue-100 leading-relaxed font-light font-['Prompt']">
                            We seek to admit students who are ready to take the lead in learning and in life. Follow our simplified process below to begin.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* LEFT: MAIN CONTENT (2/3) */}
                    <div className="lg:col-span-2 space-y-24">

                        {/* 2. The Process Timeline (Visual & Non-AI-ish) */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 flex items-center gap-3">
                                <ClipboardCheck className="text-blue-600" /> The Admissions Journey
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {steps.map((step, i) => (
                                    <div key={i} className="relative p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition">
                                        <span className="absolute -top-4 -left-4 w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center font-black text-xs">
                                            0{i + 1}
                                        </span>
                                        <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Financial Information (Clear Cards) */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <CreditCard className="text-blue-600" /> Fees & Payment
                            </h2>
                            <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 mb-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="px-4 py-2 bg-blue-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest">Non-Refundable Fee</div>
                                    <span className="text-2xl font-serif font-bold text-blue-900">₦10,000.00</span>
                                </div>
                                <p className="text-blue-800/70 text-sm leading-relaxed">
                                    Application forms can be purchased at the school or downloaded online. Printed forms must be submitted with the fee at the school office.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* EcoBank - Primary */}
                                <div className="p-6 border-2 border-dashed border-slate-200 rounded-2xl group hover:border-blue-600 transition">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Primary School Account</p>
                                    <h4 className="text-xl font-bold text-slate-900 mb-1 uppercase">EcoBank</h4>
                                    <p className="text-2xl font-mono font-bold text-blue-900 tracking-tighter">0129606713</p>
                                    <p className="mt-4 text-[10px] text-slate-500 font-medium">Please submit deposit slip at the school office.</p>
                                </div>

                                {/* Access Bank - High School */}
                                <div className="p-6 border-2 border-dashed border-slate-200 rounded-2xl group hover:border-blue-600 transition">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">High School Account</p>
                                    <h4 className="text-xl font-bold text-slate-900 mb-1 uppercase">Access Bank</h4>
                                    <p className="text-2xl font-mono font-bold text-blue-900 tracking-tighter">0108394441</p>
                                    <p className="mt-4 text-[10px] text-slate-500 font-medium">Please submit deposit slip at the school office.</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Requirements Checklist */}
                        <div className="bg-slate-900 rounded-[2rem] p-12 text-white">
                            <h2 className="text-3xl font-serif font-bold mb-8">Required Documents</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                {primaryDocs.map(doc => (
                                    <div key={doc} className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 size={18} className="text-blue-400" /> {doc}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row gap-6">
                                <button className="flex-1 bg-white text-slate-900 py-4 rounded-xl font-black text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                                    DOWNLOAD PRIMARY FORM <Download size={14} />
                                </button>
                                <button className="flex-1 border border-white/30 text-white py-4 rounded-xl font-black text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition">
                                    DOWNLOAD HIGH SCHOOL FORM <Download size={14} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: SIDEBAR (1/3) */}
                    <aside className="space-y-8">

                        {/* Modern Enquiry Form */}
                        <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-xl">
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Enquiry Desk</h3>
                            <p className="text-xs text-slate-500 font-medium mb-8 uppercase tracking-widest">Response within 24 hours</p>

                            <form className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Names</label>
                                    <input type="text" className="w-full bg-slate-50 border-none p-4 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Enter Full Name" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Email Address</label>
                                    <input type="email" className="w-full bg-slate-50 border-none p-4 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 outline-none" placeholder="name@example.com" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Phone Number</label>
                                    <input type="tel" className="w-full bg-slate-50 border-none p-4 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 outline-none" placeholder="+234 ..." />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Enquiry</label>
                                    <textarea rows={4} className="w-full bg-slate-50 border-none p-4 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 outline-none resize-none" placeholder="Tell us what you'd like to know..."></textarea>
                                </div>
                                <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-black text-[10px] tracking-widest mt-4 hover:bg-blue-800 transition shadow-lg">
                                    SUBMIT ENQUIRY
                                </button>
                            </form>

                            {/* WhatsApp Floating Link */}
                            <div className="mt-10 pt-10 border-t border-slate-50 text-center">
                                <div className="flex items-center justify-center gap-2 text-green-600 font-bold mb-4">
                                    <MessageCircle size={20} /> CHAT ON WHATSAPP
                                </div>
                                <a href="https://wa.me/2349063733913" target="_blank" className="inline-block bg-green-50 text-green-700 px-8 py-3 rounded-full text-xs font-black tracking-widest hover:bg-green-100 transition">
                                    CONNECT NOW
                                </a>
                            </div>
                        </div>

                        {/* Trust Shield */}
                        <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 flex items-start gap-4">
                            <ShieldCheck className="text-blue-600 shrink-0" />
                            <div>
                                <h4 className="text-sm font-bold text-blue-900 mb-1">Secure Enrollment</h4>
                                <p className="text-[10px] text-blue-700 leading-relaxed font-medium">All student data and documents are handled with strict confidentiality under Nigerian Data Protection guidelines.</p>
                            </div>
                        </div>

                    </aside>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}