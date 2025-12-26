"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative bg-transparent">
                <Link href="#" className="flex items-center gap-2 group relative z-50">
                    <div className="h-8 w-8 bg-red-600 rounded flex items-center justify-center text-white font-bold tracking-tighter group-hover:scale-105 transition-transform duration-300">
                        K
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-white group-hover:text-red-500 transition-colors">
                        THE KICK
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium relative z-50 text-neutral-300">
                    <Link href="#services" className="hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="#benefits" className="hover:text-white transition-colors">
                        Why Us
                    </Link>
                    <Link href="#instructor" className="hover:text-white transition-colors">
                        Instructor
                    </Link>
                    <Link href="#contact" className="hover:text-white transition-colors">
                        Contact Us
                    </Link>
                    <Link
                        href="#hero"
                        className="px-4 py-2 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors"
                    >
                        Enroll Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white relative z-50 p-2 -mr-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="absolute top-[64px] left-0 w-full bg-neutral-950 border-b border-white/10 md:hidden flex flex-col shadow-2xl overflow-hidden"
                        >
                            <div className="flex flex-col p-6 gap-2">
                                {[
                                    { label: "Services", href: "#services" },
                                    { label: "Why Choose Us", href: "#benefits" },
                                    { label: "Our Instructor", href: "#instructor" },
                                    { label: "Contact Us", href: "#contact" }
                                ].map((item) => (
                                    <motion.div key={item.href} variants={itemVariants}>
                                        <Link
                                            href={item.href}
                                            className="flex items-center justify-between p-4 rounded-xl text-neutral-300 hover:text-white hover:bg-white/5 transition-colors group"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="text-lg font-medium">{item.label}</span>
                                            <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-red-500 transition-colors" />
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div variants={itemVariants} className="pt-4 mt-2 border-t border-white/5">
                                    <Link
                                        href="#hero"
                                        className="flex items-center justify-center w-full py-3.5 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 active:scale-95 duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Enroll Now
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
