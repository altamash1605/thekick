
import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { FadeIn } from "./FadeIn";

export function Footer() {
    return (
        <footer id="contact" className="bg-black pt-12 md:pt-24 pb-12 border-t border-white/10 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <FadeIn className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">
                            Ready to begin?
                        </h2>
                        <p className="text-neutral-400 mb-8 max-w-md text-sm md:text-base">
                            Visit our academy in Okhla, New Delhi. Whether you are a beginner
                            or an advanced practitioner, we have a spot for you.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="tel:8130050905"
                                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-red-500/30 transition-colors group"
                            >
                                <div className="p-2 bg-neutral-800 rounded-lg group-hover:text-red-500 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="text-neutral-300 font-medium">+91 81300 50905</span>
                            </a>

                            <a
                                href="https://instagram.com/_thekick"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-red-500/30 transition-colors group"
                            >
                                <div className="p-2 bg-neutral-800 rounded-lg group-hover:text-red-500 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </div>
                                <span className="text-neutral-300 font-medium">@_thekick</span>
                            </a>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/50 border border-white/5">
                                <div className="p-2 bg-neutral-800 rounded-lg mt-1">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="text-neutral-300 text-sm leading-relaxed">
                                    <span className="block text-white font-medium mb-1">
                                        The Kick Martial Arts Academy
                                    </span>
                                    38-A, 2nd Lane, Johri Farm,
                                    <br />
                                    Noor Nagar Extension, Jamia Nagar,
                                    <br />
                                    Okhla, New Delhi - 110025
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simple Map Placeholder / Form Area */}
                    <SpotlightCard className="bg-neutral-900 rounded-2xl p-1 border border-white/5 h-full min-h-[300px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.689626490605!2d77.2831!3d28.5685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzA2LjYiTiA3N8KwMTYnNTkuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="rounded-xl opacity-80 group-hover:opacity-100 transition-opacity relative z-10 w-full h-full"
                        />
                        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-white/10 text-xs text-white z-20">
                            Locate Us
                        </div>
                    </SpotlightCard>
                </FadeIn>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 bg-neutral-800 rounded flex items-center justify-center text-white text-xs font-bold">
                            K
                        </div>
                        <span className="text-sm text-neutral-500">
                            © 2024 The Kick Martial Arts Academy.
                        </span>
                    </div>
                    <div className="flex gap-6 text-sm text-neutral-500">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

