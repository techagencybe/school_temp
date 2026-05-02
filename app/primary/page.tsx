"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {
    BookOpen,
    Globe,
    Monitor,
    Users,
    CheckCircle,
    MessageSquare,
    ChevronRight
} from "lucide-react";
import { SchoolConfig } from "@/config/school-data";

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function PrimarySchoolPage() {
    const subjects = [
        "Literacy", "Numeracy", "Science", "ICT", "Christian Education",
        "Music", "Home Science", "Library Studies", "Geography", "History",
        "Agricultural Science", "Foreign/Nigerian Languages"
    ];

    const primaryImages = [
        "/images/primary/1.jpg",
        "/images/primary/2.jpg",
        "/images/primary/3.jpg",
        "/images/primary/4.jpg",
        "/images/primary/5.jpg",
        "/images/primary/6.jpg",
    ];

    return (
        <main className="bg-white min-h-screen font-['Prompt']">
            <Navbar />

            {/* 1. Page Header (Modern Breadcrumb + Hero) */}
            <section className="relative pt-32 pb-20 bg-blue-950 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="/images/primary-school.jpg" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
                    <div className="flex items-center gap-2 text-blue-300 text-[10px] font-black tracking-widest uppercase mb-4">
                        <a href="/" className="hover:text-white transition">Home</a>
                        <ChevronRight size={12} />
                        <span className="text-white">Primary School</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold">Primary School</h1>
                    <p className="mt-6 text-xl text-blue-100 max-w-2xl font-light">
                        Year 1 to Year 6 (Ages 5 - 11 Years). Developing global citizens through strength and wisdom.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* 2. Main Content (Left side - 2/3) */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Image Carousel - Replacement for the single building image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 relative group"
                        >
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={0}
                                slidesPerView={1}
                                autoplay={{ delay: 5000 }}
                                pagination={{ clickable: true }}
                                navigation={true}
                                className="w-full h-auto aspect-[16/10]"
                            >
                                {primaryImages.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={img} className="w-full h-full object-cover" alt={`Primary School ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>

                        {/* Curriculum Breakdown */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                    <BookOpen size={24} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900">Broad-based Curriculum</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    A product of detailed research into Nigerian and British curricula. We build solid foundations laid in Early Years, growing children physically, socially, and mentally.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                    <Monitor size={24} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900">E-Teaching Methods</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    Our high level of boldness is manifest in our pupils' ability to work independently. E-teaching doesn't leave discovery for the teacher alone—it empowers the child.
                                </p>
                            </div>
                        </div>

                        {/* Worldview Section */}
                        <div className="bg-slate-900 rounded-[2rem] p-10 text-white relative overflow-hidden">
                            <Globe className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-bold mb-6">Our Worldview</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    We are committed to making our children effective global citizens. Literacy, Numeracy, Science, and ICT are garnished with Christian Education to make the complete package.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {subjects.map(s => (
                                        <span key={s} className="bg-white/10 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Parent Partnership */}
                        <div className="flex flex-col md:flex-row items-center gap-10 border-l-4 border-blue-600 pl-8">
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Parental Partnership</h3>
                                <p className="text-slate-600 text-sm leading-relaxed italic">
                                    "Success is passion. We offer parents the opportunity to be part of the upbringing. Follow-up at home ensures the edge our pupils have."
                                </p>
                            </div>
                            <div className="shrink-0">
                                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-900">
                                    <Users size={32} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Sidebar (Right side - 1/3) */}
                    <aside className="space-y-8">

                        {/* Search (Modern) */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-medium text-slate-900"
                            />
                        </div>

                        {/* Featured Posts */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                            <h4 className="font-serif font-bold text-xl mb-6 text-slate-900">Latest Updates</h4>
                            <div className="space-y-6">
                                {SchoolConfig.news.slice(0, 3).map(post => (
                                    <div key={post.title} className="group cursor-pointer">
                                        <p className="text-[10px] font-black text-blue-600 uppercase mb-1">{post.date}</p>
                                        <h5 className="text-sm font-bold text-slate-800 group-hover:text-blue-900 transition leading-tight uppercase tracking-tight">
                                            {post.title}
                                        </h5>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Chat CTA */}
                        <button className="w-full bg-blue-900 text-white p-6 rounded-2xl flex items-center justify-between group hover:bg-blue-800 transition shadow-xl">
                            <div className="text-left">
                                <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-1 font-black">Need Help?</p>
                                <p className="font-bold">Talk or Chat with us</p>
                            </div>
                            <MessageSquare className="group-hover:translate-x-1 transition" />
                        </button>

                        {/* Enroll Now Graphic */}
                        <div className="bg-green-600 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                            <CheckCircle size={48} className="mx-auto" />
                            <h4 className="font-serif font-bold text-2xl">Enroll Now</h4>
                            <p className="text-xs opacity-90 font-medium">Experience the LFIS revolution in the educational sector.</p>
                            <button className="w-full bg-white text-green-700 py-3 rounded-lg font-black text-[10px] tracking-widest shadow-xl hover:bg-green-50 transition">
                                START APPLICATION
                            </button>
                        </div>
                    </aside>
                </div>
            </section>

            {/* 4. The Video Tour Section - YouTube Replacement */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase">Documentary</span>
                        <h2 className="text-4xl font-serif font-bold text-slate-900 mt-4">Tour Our Campus</h2>
                        <p className="text-slate-500 mt-2 font-medium">Experience life at Living Fountain International School</p>
                    </div>
                    
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-video bg-slate-100">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Z462BmQFEAc"
                            title="LFIS Campus Tour"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}