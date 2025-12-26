import Link from "next/link";
import { HeartPulse, Medal, ShieldCheck, Target, Trophy } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

export function Benefits() {
    return (
        <section id="benefits" className="py-12 md:py-24 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                                More Than Just <br /> <span className="text-neutral-500">Fighting Skills.</span>
                            </h2>
                            <p className="text-neutral-400 text-base md:text-lg mb-8 font-light">
                                We don't just teach you how to fight; we teach you how to live. Our
                                holistic approach builds character alongside physical prowess.
                            </p>
                        </FadeIn>

                        <FadeInStagger className="space-y-6">
                            {/* Benefit Item */}
                            <FadeInItem className="flex gap-4 group">
                                <div className="mt-1 p-1 rounded-md transition-colors group-hover:bg-red-500/10">
                                    <ShieldCheck className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 group-hover:text-red-400 transition-colors">
                                        Boost Self-Esteem
                                    </h4>
                                    <p className="text-sm text-neutral-500">
                                        Gain confidence in your abilities and walk with your head
                                        held high.
                                    </p>
                                </div>
                            </FadeInItem>
                            {/* Benefit Item */}
                            <FadeInItem className="flex gap-4 group">
                                <div className="mt-1 p-1 rounded-md transition-colors group-hover:bg-red-500/10">
                                    <HeartPulse className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 group-hover:text-red-400 transition-colors">
                                        Lose Excess Weight
                                    </h4>
                                    <p className="text-sm text-neutral-500">
                                        High-intensity interval training naturally embedded in every
                                        session.
                                    </p>
                                </div>
                            </FadeInItem>
                            {/* Benefit Item */}
                            <FadeInItem className="flex gap-4 group">
                                <div className="mt-1 p-1 rounded-md transition-colors group-hover:bg-red-500/10">
                                    <Target className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 group-hover:text-red-400 transition-colors">
                                        Enhance Focus
                                    </h4>
                                    <p className="text-sm text-neutral-500">
                                        Sharpen your mind and improve concentration through complex
                                        forms.
                                    </p>
                                </div>
                            </FadeInItem>
                            {/* Benefit Item */}
                            <FadeInItem className="flex gap-4 group">
                                <div className="mt-1 p-1 rounded-md transition-colors group-hover:bg-red-500/10">
                                    <Medal className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 group-hover:text-red-400 transition-colors">
                                        Develop Discipline
                                    </h4>
                                    <p className="text-sm text-neutral-500">
                                        Structure, respect, and perseverance are core pillars of our
                                        academy.
                                    </p>
                                </div>
                            </FadeInItem>
                        </FadeInStagger>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent blur-3xl rounded-full" />
                        <FadeIn delay={0.2}>
                            <SpotlightCard className="bg-neutral-900 border border-white/10 rounded-2xl p-8 md:p-12">
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:scale-105 transition-transform duration-300">
                                        <Trophy className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">Excellence in Training</h3>
                                    <p className="text-neutral-400 mb-8">Join a community dedicated to continuous improvement and martial arts excellence.</p>
                                    <Link href="#contact" className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors">
                                        Start Your Journey
                                    </Link>
                                </div>
                            </SpotlightCard>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
