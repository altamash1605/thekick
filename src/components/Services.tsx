import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { SpotlightCard } from "./SpotlightCard";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

export function Services() {
    return (
        <section id="services" className="py-12 md:py-24 bg-neutral-900/30 border-y border-white/5 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <FadeIn className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Train Like a <span className="text-red-600">Champion</span>
                    </h2>
                    <p className="text-neutral-400 max-w-xl text-base md:text-lg">
                        Choose your discipline. Whether you want to compete or just get in the shape of your life, we have a program for you.
                    </p>
                </FadeIn>

                <FadeInStagger className="flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-8 md:grid md:grid-cols-3 md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
                    {/* Card 1: Taekwondo */}
                    <FadeInItem className="min-w-[85vw] md:min-w-0 snap-center">
                        <SpotlightCard className="h-[500px] rounded-3xl overflow-hidden group relative border border-white/10">
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0 select-none">
                                <Image
                                    src="/hero-bg.png"
                                    alt="Taekwondo Training"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                            </div>

                            <div className="relative z-20 p-8 h-full flex flex-col justify-end items-start text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase italic tracking-tighter">
                                    Taekwondo
                                </h3>
                                <p className="text-neutral-300 text-base leading-relaxed mb-6 font-medium">
                                    Develop discipline, learn self-defense, and improve fitness through Olympic-style training.
                                </p>
                                <span className="inline-flex items-center gap-2 text-white font-bold tracking-wide uppercase text-sm border-b border-red-500 pb-1 group-hover:text-red-500 transition-colors">
                                    Start Training <ChevronRight className="w-4 h-4 ml-1" />
                                </span>
                            </div>
                        </SpotlightCard>
                    </FadeInItem>

                    {/* Card 2: Kickboxing */}
                    <FadeInItem className="min-w-[85vw] md:min-w-0 snap-center">
                        <SpotlightCard className="h-[500px] rounded-3xl overflow-hidden group relative border border-white/10">
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0 select-none">
                                <Image
                                    src="/hero-bg.png"
                                    alt="Kickboxing Training"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                            </div>

                            <div className="relative z-20 p-8 h-full flex flex-col justify-end items-start text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase italic tracking-tighter">
                                    Kickboxing
                                </h3>
                                <p className="text-neutral-300 text-base leading-relaxed mb-6 font-medium">
                                    High-intensity cardio to lose excess weight, boost self-esteem, and enhance focus.
                                </p>
                                <span className="inline-flex items-center gap-2 text-white font-bold tracking-wide uppercase text-sm border-b border-red-500 pb-1 group-hover:text-red-500 transition-colors">
                                    Start Sweating <ChevronRight className="w-4 h-4 ml-1" />
                                </span>
                            </div>
                        </SpotlightCard>
                    </FadeInItem>

                    {/* Card 3: Pencak Silat */}
                    <FadeInItem className="min-w-[85vw] md:min-w-0 snap-center">
                        <SpotlightCard className="h-[500px] rounded-3xl overflow-hidden group relative border border-white/10">
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0 select-none">
                                <Image
                                    src="/hero-bg.png"
                                    alt="Pencak Silat Training"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                            </div>

                            <div className="relative z-20 p-8 h-full flex flex-col justify-end items-start text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase italic tracking-tighter">
                                    Pencak Silat
                                </h3>
                                <p className="text-neutral-300 text-base leading-relaxed mb-6 font-medium">
                                    Experience the artistic efficacy of Indonesian martial arts. Master grappling, strikes, and weaponry.
                                </p>
                                <span className="inline-flex items-center gap-2 text-white font-bold tracking-wide uppercase text-sm border-b border-red-500 pb-1 group-hover:text-red-500 transition-colors">
                                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                                </span>
                            </div>
                        </SpotlightCard>
                    </FadeInItem>
                </FadeInStagger>
            </div>
        </section>
    );
}
