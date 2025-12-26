import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
    return (
        <div className={cn("spotlight-card group relative overflow-hidden", className)}>
            <div className="spotlight-border" />
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
}
