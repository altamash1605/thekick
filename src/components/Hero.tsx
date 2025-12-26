"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Flag, Landmark, CheckCircle2, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";

const programs = [
    "Taekwondo (Ages 4-12)",
    "Taekwondo (Teens & Adults)",
    "Kickboxing",
    "Fitness & Conditioning"
];

export function Hero() {
    const [selectedProgram, setSelectedProgram] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <section id="hero" className="relative pt-20 pb-12 md:pt-32 md:pb-24 px-4 md:px-6 z-10 overflow-hidden">
            {/* Main Hero Card Container */}
            <div className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">

                {/* Background Image & Overlays */}
                <div className="absolute inset-0 z-0 select-none">
                    <Image
                        src="/hero-bg.png"
                        alt="Martial Arts Action"
                        fill
                        className="object-cover object-center opacity-60 md:opacity-100"
                        priority
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent z-10" />
                </div>

                <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 md:p-16 items-center min-h-[500px] md:min-h-[600px]">

                    {/* Left Content Column */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <FadeIn>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-medium mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                                </span>
                                Admissions Open for 2024
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                                <span className="text-red-600 block mb-2 text-xl md:text-3xl font-medium tracking-normal uppercase">Okhla, New Delhi</span>
                                Develop Discipline. <br />
                                <span className="text-neutral-400">Improve Fitness.</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-base md:text-lg text-neutral-400 max-w-xl mb-8 font-light leading-relaxed">
                                Join the premier martial arts academy in South Delhi.
                                Registered with India Taekwondo & In Association with the Korean Cultural Center.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-neutral-300 mb-10">
                                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                                    <span>Certified Instructors</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                                    <span>Age 4 to Adults</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                                    <span>Morning & Evening Batches</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="#services"
                                    className="w-full sm:w-auto px-8 py-3.5 bg-white text-black hover:bg-neutral-200 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group"
                                >
                                    Explore Programs
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Partners - Compact Version */}
                        <FadeIn delay={0.4} className="mt-12 flex items-center gap-6 opacity-60">
                            <div className="flex items-center gap-2">
                                <Flag className="w-4 h-4 text-white" />
                                <span className="text-xs font-semibold tracking-wide text-white">INDIA TAEKWONDO</span>
                            </div>
                            <div className="w-px h-4 bg-white/20" />
                            <div className="flex items-center gap-2">
                                <Landmark className="w-4 h-4 text-white" />
                                <span className="text-xs font-semibold tracking-wide text-white">KOREAN CULTURAL CENTER</span>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Content Column - The Form */}
                    <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                        <FadeIn delay={0.3}>
                            <div className="bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative group">
                                {/* Glow Effect */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-red-600/30 transition-colors duration-500" />

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                                        Free Trial Pass
                                    </h3>
                                    <p className="text-neutral-400 text-sm mb-6">
                                        Experience a class on us. No commitment required.
                                    </p>

                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        <div>
                                            <label htmlFor="name" className="sr-only">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="Student Name"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="sr-only">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                placeholder="Phone Number"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="program" className="sr-only">Select Program</label>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                    className={`w-full bg-white/5 border ${isDropdownOpen ? 'border-red-500/50 ring-1 ring-red-500/50' : 'border-white/10'} rounded-lg px-4 py-3 text-white text-sm flex items-center justify-between transition-all hover:bg-white/10`}
                                                >
                                                    <span className={selectedProgram ? "text-white" : "text-neutral-600"}>
                                                        {selectedProgram || "Select a Program"}
                                                    </span>
                                                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                                </button>

                                                <AnimatePresence>
                                                    {isDropdownOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="absolute top-full left-0 right-0 mt-2 bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 py-1"
                                                        >
                                                            {programs.map((prog) => (
                                                                <button
                                                                    key={prog}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setSelectedProgram(prog);
                                                                        setIsDropdownOpen(false);
                                                                    }}
                                                                    className="w-full text-left px-4 py-2.5 text-sm text-neutral-300 hover:bg-red-600/20 hover:text-white transition-colors flex items-center justify-between group"
                                                                >
                                                                    {prog}
                                                                    {selectedProgram === prog && (
                                                                        <Check className="w-4 h-4 text-red-500" />
                                                                    )}
                                                                </button>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-lg shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] transition-all transform active:scale-95 mt-2"
                                        >
                                            Claim Free Pass
                                        </button>

                                        <p className="text-center text-xs text-neutral-500 mt-4">
                                            Limited spots available for this month.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Background Glow behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-red-600/5 blur-[120px] -z-10 pointer-events-none rounded-full" />
        </section>
    );
}
