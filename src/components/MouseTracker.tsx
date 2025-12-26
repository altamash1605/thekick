"use client";
import { useEffect } from "react";

export function MouseTracker() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            // Update Global Glow
            document.body.style.setProperty('--cursor-x', `${x}px`);
            document.body.style.setProperty('--cursor-y', `${y}px`);

            // Update Card Highlights
            const cards = document.querySelectorAll('.spotlight-card') as NodeListOf<HTMLElement>;
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardX = x - rect.left;
                const cardY = y - rect.top;

                card.style.setProperty('--mouse-x', `${cardX}px`);
                card.style.setProperty('--mouse-y', `${cardY}px`);
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return null;
}
