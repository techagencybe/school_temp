"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
import { SchoolConfig } from "@/config/school-data";

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function Hero() {
    return (
        <section className="h-screen w-full relative">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                speed={1000}
                autoplay={{ delay: 6000 }}
                pagination={{ clickable: true }}
                className="h-full w-full"
            >
                {SchoolConfig.heroSlides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative overflow-hidden">
                        {/* Background Content */}
                        <div className="absolute inset-0 bg-black/40 z-10" />
                        {slide.type === 'video' ? (
                            <video
                                autoPlay muted loop playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src={slide.src} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={slide.src} className="absolute inset-0 w-full h-full object-cover animate-ken-burns" alt="" />
                        )}

                        {/* Floating Content Card */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center md:justify-start max-w-7xl mx-auto px-6">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="bg-blue-900/80 backdrop-blur-md p-8 md:p-12 text-white max-w-xl rounded-2xl border border-white/10"
                            >
                                <h3 className="text-blue-200 text-sm font-bold tracking-[0.3em] uppercase mb-4">{slide.subtitle}</h3>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
                                    {slide.title}
                                </h1>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-white text-blue-900 px-8 py-3 font-black text-xs hover:bg-blue-100 transition">
                                        REGISTER NOW
                                    </button>
                                    <button className="border-2 border-white/50 text-white px-8 py-3 font-black text-xs hover:bg-white/10 transition">
                                        ADMISSIONS INFO
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Modern Wave Divider at the bottom (Optional, looks sleek) */}
            <div className="absolute bottom-0 w-full z-30">
                <svg viewBox="0 0 1440 120" fill="white"><path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
        </section>
    );
}