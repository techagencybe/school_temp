"use client"
import { SchoolConfig } from "@/config/school-data";
import { MapPin, Phone, Mail, Map } from "lucide-react";

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const InstagramIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const YouTubeIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.4 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

export default function Footer() {
    return (
        <footer className="bg-[#003366] text-white pt-20 pb-8 font-['Prompt']">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                
                {/* Footer Menu (8 Columns) */}
                <div className="lg:col-span-8">
                    <h4 className="text-[10px] font-black tracking-[0.4em] uppercase mb-10 opacity-60">Footer Menu</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {/* Column 1 */}
                        <div className="space-y-8">
                            <div>
                                <h5 className="text-[11px] font-black uppercase tracking-widest mb-4">About Us</h5>
                                <div className="space-y-2 text-[10px] font-bold text-white/70">
                                    <a href="/about" className="block hover:text-white transition">WHO WE ARE</a>
                                    <a href="/about" className="block hover:text-white transition">From the Founder and Director</a>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-[11px] font-black uppercase tracking-widest mb-4">Admissions</h5>
                            </div>
                            <div>
                                <h5 className="text-[11px] font-black uppercase tracking-widest mb-4">High School</h5>
                                <div className="space-y-2 text-[10px] font-bold text-white/70">
                                    <a href="#" className="block hover:text-white transition uppercase">Newsletters</a>
                                    <a href="#" className="block hover:text-white transition uppercase">LFIS Boarding</a>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-8">
                            <div>
                                <h5 className="text-[11px] font-black uppercase tracking-widest mb-4">Media Unit</h5>
                                <div className="space-y-2 text-[10px] font-bold text-white/70 uppercase">
                                    <a href="#" className="block hover:text-white transition">Events</a>
                                    <a href="#" className="block hover:text-white transition">Latest News</a>
                                    <a href="#" className="block hover:text-white transition">Calendar</a>
                                    <a href="#" className="block hover:text-white transition">Facility Gallery</a>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-[11px] font-black uppercase tracking-widest mb-4">Primary School</h5>
                                <div className="space-y-2 text-[10px] font-bold text-white/70 uppercase">
                                    <a href="#" className="block hover:text-white transition">Our Crèche</a>
                                    <a href="#" className="block hover:text-white transition">Early Years</a>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-[11px] font-black uppercase tracking-widest mb-4">Pre University</h5>
                            </div>
                            <div>
                                <h5 className="text-[11px] font-black uppercase tracking-widest mb-4">School Portals</h5>
                                <div className="space-y-2 text-[10px] font-bold text-white/70 uppercase">
                                    <a href="#" className="block hover:text-white transition">Primary</a>
                                    <a href="#" className="block hover:text-white transition">High School</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Get In Touch (4 Columns) */}
                <div className="lg:col-span-4 lg:pl-12 border-l border-white/10">
                    <h4 className="text-[10px] font-black tracking-[0.4em] uppercase mb-10 opacity-60">Get In Touch</h4>
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold text-white/90 flex gap-2">
                                <span className="opacity-50">T</span> {SchoolConfig.contact.phones.join(' , ')}
                            </p>
                            <p className="text-[10px] font-bold text-white/90 flex gap-2">
                                <span className="opacity-50 uppercase">High School:</span> {SchoolConfig.contact.highSchoolPhone}
                            </p>
                            <p className="text-[10px] font-bold text-white/90 break-all leading-relaxed">
                                <span className="opacity-50 uppercase">Email:</span> {SchoolConfig.contact.emails.join(', ')}
                            </p>
                        </div>

                        <div className="space-y-2 text-[10px] font-bold text-white/70 leading-relaxed">
                            <p className="text-white/90">Living Fountain International School</p>
                            <p>Jabi By-Pass, Mbora District, Abuja</p>
                        </div>

                        <a 
                            href={SchoolConfig.contact.googleMaps}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-blue-300 transition"
                        >
                            <MapPin size={14} className="text-blue-400" /> Open in Google Maps
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar (Exactly like their current one) */}
            <div className="border-t border-white/20 pt-10">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="bg-white rounded-full p-2 w-16 h-16 flex items-center justify-center">
                            <img src="/images/lfis-logo.png" className="w-full h-auto object-contain" alt="" />
                        </div>
                        <h3 className="text-xl font-serif font-bold tracking-tight">
                            LIVING FOUNTAIN <br />
                            <span className="text-sm font-sans font-black tracking-[0.2em] opacity-80">INTERNATIONAL SCHOOL</span>
                        </h3>
                    </div>

                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Get Social</span>
                        <div className="flex gap-3">
                            <a href="#" className="w-8 h-8 bg-black/20 flex items-center justify-center rounded hover:bg-blue-600 transition">
                                <FacebookIcon size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 bg-black/20 flex items-center justify-center rounded hover:bg-blue-600 transition">
                                <InstagramIcon size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 bg-black/20 flex items-center justify-center rounded hover:bg-blue-600 transition">
                                <TwitterIcon size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 bg-black/20 flex items-center justify-center rounded hover:bg-blue-600 transition">
                                <YouTubeIcon size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
