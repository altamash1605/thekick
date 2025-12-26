
import { User } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { FadeIn } from "./FadeIn";

export function Instructor() {
    return (
        <section id="instructor" className="py-12 md:py-24 bg-neutral-900/30 border-y border-white/5 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <FadeIn>
                    <SpotlightCard className="bg-neutral-950 border border-white/5 rounded-3xl overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 w-full relative">
                            {/* Decorative background */}
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent pointer-events-none" />

                            <div className="w-full md:w-1/3 flex justify-center md:justify-start relative z-10">
                                {/* Avatar Placeholder */}
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center overflow-hidden relative shadow-2xl">
                                    <User className="w-24 h-24 text-neutral-600" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white font-semibold">
                                        Head Instructor
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 relative z-10 text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-tight">
                                    Mohd Uzair Yunus
                                </h2>
                                <p className="text-red-500 font-medium mb-6 text-sm md:text-base">
                                    President, South East Delhi Association of Taekwondo
                                </p>

                                <p className="text-neutral-400 leading-relaxed mb-8 text-sm md:text-base">
                                    Under the leadership of Mohd Uzair Yunus, The Kick Martial Arts
                                    Academy strives to bring world-class martial arts training to New
                                    Delhi. His affiliation with India Taekwondo ensures that students
                                    receive recognized, professional instruction adhering to national
                                    and international standards.
                                </p>

                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    <span className="px-3 py-1 bg-neutral-900 border border-white/10 rounded-full text-xs text-neutral-400">
                                        Certified Expert
                                    </span>
                                    <span className="px-3 py-1 bg-neutral-900 border border-white/10 rounded-full text-xs text-neutral-400">
                                        India Taekwondo
                                    </span>
                                    <span className="px-3 py-1 bg-neutral-900 border border-white/10 rounded-full text-xs text-neutral-400">
                                        Self Defense Specialist
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </FadeIn>
            </div>
        </section>
    );
}

