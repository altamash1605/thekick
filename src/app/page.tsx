import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Instructor } from "@/components/Instructor";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Instructor />
      <Footer />
    </main>
  );
}
