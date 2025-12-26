"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Phone, Instagram, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check if user has seen the splash screen in this session
        const hasSeenSplash = sessionStorage.getItem("splashSeen");
        if (hasSeenSplash) {
            setIsVisible(false);
        } else {
            // Lock body scroll when splash is visible
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("splashSeen", "true");
        document.body.style.overflow = "unset";
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950/98 backdrop-blur-xl text-white p-4 overflow-hidden"
                >
                    {/* Background Elements */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px]" />
                    </div>

                    <div className="z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide flex flex-col items-center text-center space-y-8 py-8 relative">

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-0 right-4 p-2 text-neutral-400 hover:text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Header */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 leading-tight">
                                The Kick <span className="text-red-600 block md:inline">Martial Arts</span> Academy
                            </h1>
                            <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto px-4">
                                Registered with India Taekwondo • In association with Korean Cultural Center of India & Embassy of Republic of South Korea
                            </p>
                        </motion.div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 mt-8">

                            {/* Disciplines */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="bg-neutral-900/50 p-6 rounded-2xl border border-white/10"
                            >
                                <h3 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-widest">Disciplines</h3>
                                <ul className="space-y-3 text-lg font-medium">
                                    <li className="flex items-center justify-center space-x-2">
                                        <span className="w-2 h-2 bg-red-600 rounded-full" />
                                        <span>Taekwondo</span>
                                    </li>
                                    <li className="flex items-center justify-center space-x-2">
                                        <span className="w-2 h-2 bg-red-600 rounded-full" />
                                        <span>Kickboxing</span>
                                    </li>
                                    <li className="flex items-center justify-center space-x-2">
                                        <span className="w-2 h-2 bg-red-600 rounded-full" />
                                        <span>Pencak Silat</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Benefits */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="bg-neutral-900/50 p-6 rounded-2xl border border-white/10"
                            >
                                <h3 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-widest">Benefits</h3>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-base text-neutral-300">
                                    <span className="flex items-center space-x-2">
                                        <ChevronRight className="w-4 h-4 text-red-600" /> Develop Discipline
                                    </span>
                                    <span className="flex items-center space-x-2">
                                        <ChevronRight className="w-4 h-4 text-red-600" /> Improve Fitness
                                    </span>
                                    <span className="flex items-center space-x-2">
                                        <ChevronRight className="w-4 h-4 text-red-600" /> Learn Self-Defense
                                    </span>
                                    <span className="flex items-center space-x-2">
                                        <ChevronRight className="w-4 h-4 text-red-600" /> Boost Self-Esteem
                                    </span>
                                    <span className="flex items-center space-x-2">
                                        <ChevronRight className="w-4 h-4 text-red-600" /> Lose Excess Weight
                                    </span>
                                    <span className="flex items-center space-x-2">
                                        <ChevronRight className="w-4 h-4 text-red-600" /> Enhance Focus
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-12"
                        >
                            <button
                                onClick={handleClose}
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-red-600 rounded-full hover:bg-red-700 hover:scale-105 focus:outline-none ring-offset-2 focus:ring-2 ring-red-600"
                            >
                                <span>GET ENROLLED TODAY</span>
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 -z-10 rounded-full bg-red-600 blur-lg opacity-40 group-hover:opacity-75 transition-opacity" />
                            </button>
                        </motion.div>

                        {/* Footer Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-auto pt-8 grid md:grid-cols-2 gap-8 text-sm text-neutral-400 w-full border-t border-white/5"
                        >
                            <div className="text-left space-y-2">
                                <p className="text-white font-semibold">Contact Details:</p>
                                <div className="flex items-start space-x-2 hover:text-red-500 transition-colors cursor-pointer">
                                    <Phone className="w-4 h-4 mt-1" />
                                    <div className="flex flex-col">
                                        <span className="font-medium">Mohd Uzair Yunus: 8130050905</span>
                                        <span className="text-xs text-neutral-500">President, South East Delhi Association of Taekwondo</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 hover:text-red-500 transition-colors cursor-pointer">
                                    <Instagram className="w-4 h-4" />
                                    <span>@_thekick</span>
                                </div>
                            </div>
                            <div className="text-left md:text-right space-y-2">
                                <p className="text-white font-semibold flex items-center md:justify-end gap-2">
                                    <MapPin className="w-4 h-4" /> Address
                                </p>
                                <p>38-A, 2nd Lane, Johri Farm, Noor Nagar Ext.</p>
                                <p>Jamia Nagar, Okhla, New Delhi - 110025</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
