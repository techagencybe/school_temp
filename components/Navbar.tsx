"use client";
import { useState } from "react";
import { SchoolConfig } from "@/config/school-data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Phone, Mail, Menu, X, Plus, Minus } from "lucide-react";

// Social Icons as simple SVG components since they were removed from lucide-react v1.0+
const FacebookIcon = ({ size = 12 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = ({ size = 12 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const InstagramIcon = ({ size = 12 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const YouTubeIcon = ({ size = 12 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.4 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

export default function Navbar() {
    const [hoveredLogo, setHoveredLogo] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileLinks, setExpandedMobileLinks] = useState<string[]>([]);

    const toggleMobileLink = (name: string) => {
        setExpandedMobileLinks(prev => 
            prev.includes(name) ? prev.filter(l => l !== name) : [...prev, name]
        );
    };

    return (
        <>
            <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md shadow-sm">
                {/* Top Bar (Phone/Socials) */}
                <div className="bg-blue-950 text-white py-1 px-4 hidden md:flex justify-between items-center text-[10px]">
                    <div className="flex gap-4">
                        <FacebookIcon size={12} /> <TwitterIcon size={12} /> <InstagramIcon size={12} /> <YouTubeIcon size={12} />
                    </div>
                    <div className="uppercase tracking-widest font-bold">
                        Enquiries: {SchoolConfig.contact.phones[0]}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    {/* LOGO with Popover */}
                    <div className="relative" onMouseEnter={() => setHoveredLogo(true)} onMouseLeave={() => setHoveredLogo(false)}>
                        <a href="/" className="cursor-help transition hover:scale-105 active:scale-95 block">
                            <img src="/images/lfis-logo.png" alt="LFIS Logo" className="h-16 w-auto object-contain" />
                        </a>

                        <AnimatePresence>
                            {hoveredLogo && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute top-16 left-0 w-[450px] bg-blue-950 text-white p-8 rounded-lg shadow-2xl z-50 border border-white/10 hidden lg:block"
                                >
                                    <div className="grid grid-cols-5 gap-8">
                                        <div className="col-span-2 text-center">
                                            <div className="bg-white rounded-full p-2 mb-4 aspect-square flex items-center justify-center">
                                                <img src="/images/lfis-logo.png" className="w-full h-auto object-contain" alt="" />
                                            </div>
                                            <p className="text-[10px] leading-relaxed opacity-90 font-medium">
                                                {SchoolConfig.contact.address}
                                            </p>
                                        </div>
                                        <div className="col-span-3 space-y-6">
                                            <div>
                                                <h4 className="text-[11px] font-black uppercase tracking-wider mb-2 flex items-center gap-2">
                                                    <Phone size={14} className="text-blue-300" /> Contact Numbers
                                                </h4>
                                                <div className="space-y-1 text-xs font-bold">
                                                    {SchoolConfig.contact.phones.map(p => <p key={p}>{p}</p>)}
                                                    <p className="text-blue-200">HS: {SchoolConfig.contact.highSchoolPhone}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-[11px] font-black uppercase tracking-wider mb-2 flex items-center gap-2">
                                                    <Mail size={14} className="text-blue-300" /> Email Addresses
                                                </h4>
                                                <div className="space-y-1 text-[10px] font-medium opacity-90">
                                                    {SchoolConfig.contact.emails.map(e => <p key={e}>{e}</p>)}
                                                </div>
                                            </div>
                                            <div className="pt-2 flex flex-col gap-4">
                                                <a 
                                                    href={SchoolConfig.contact.googleMaps} 
                                                    target="_blank" 
                                                    className="flex items-center gap-2 text-blue-300 hover:text-white transition text-xs font-bold"
                                                >
                                                    <MapPin size={14} /> Open in Google Maps
                                                </a>
                                                <div className="flex gap-4 opacity-80">
                                                    <FacebookIcon size={16} /> <TwitterIcon size={16} /> <InstagramIcon size={16} /> <YouTubeIcon size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Desktop NAV */}
                    <div className="hidden lg:flex items-center gap-6 h-full">
                        {SchoolConfig.navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <a href={link.href} className="text-[11px] font-black tracking-tighter text-blue-950 flex items-center gap-1 hover:text-blue-600 transition h-full px-2">
                                    {link.name}
                                    {link.subLinks && <ChevronDown size={12} />}
                                </a>

                                <AnimatePresence>
                                    {link.subLinks && activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-[80px] left-0 w-48 bg-white shadow-xl rounded-b-lg overflow-hidden border border-gray-100"
                                        >
                                            {link.subLinks.map(sub => (
                                                <a key={sub} href="#" className="block px-6 py-3 text-[10px] font-bold text-gray-700 hover:bg-gray-50 hover:text-blue-900 transition border-b border-gray-50">
                                                    {sub.toUpperCase()}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden sm:block bg-blue-900 text-white px-6 py-2 rounded font-bold text-[11px] hover:bg-blue-800 transition">
                            CONTACT US
                        </button>
                        
                        {/* Hamburger Button */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden text-blue-950 hover:text-blue-600 transition p-2"
                        >
                            <Menu size={32} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* FULL SCREEN MOBILE MENU - MOVED OUTSIDE NAV TO AVOID CLIPPING */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-blue-950 z-[200] flex flex-col h-screen w-screen overflow-hidden"
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-blue-950 shadow-lg">
                            <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <img src="/images/lfis-logo.png" className="h-12 w-auto object-contain" alt="LFIS Logo" />
                            </a>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white p-2"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <div className="flex-1 overflow-y-auto py-12 px-8 bg-blue-950">
                            <div className="space-y-8">
                                {SchoolConfig.navLinks.map((link) => (
                                    <div key={link.name} className="border-b border-white/5 pb-8">
                                        <div className="flex justify-between items-center">
                                            <a 
                                                href={link.href} 
                                                className="text-3xl font-serif font-bold text-white tracking-tight"
                                                onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </a>
                                            {link.subLinks && (
                                                <button 
                                                    onClick={() => toggleMobileLink(link.name)}
                                                    className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-white"
                                                >
                                                    {expandedMobileLinks.includes(link.name) ? <Minus size={24} /> : <Plus size={24} />}
                                                </button>
                                            )}
                                        </div>

                                        <AnimatePresence>
                                            {link.subLinks && expandedMobileLinks.includes(link.name) && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pl-4 mt-8 space-y-6">
                                                        {link.subLinks.map(sub => (
                                                            <a 
                                                                key={sub} 
                                                                href="#" 
                                                                className="block text-blue-300 text-lg font-bold uppercase tracking-widest"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                {sub}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Footer */}
                        <div className="p-10 bg-black/30 border-t border-white/10">
                            <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 text-center">Stay Connected</p>
                            <div className="flex justify-center gap-8 text-white">
                                <FacebookIcon size={24} /> <TwitterIcon size={24} /> <InstagramIcon size={24} /> <YouTubeIcon size={24} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}