import { Navbar } from "@/components/navbar";
import { HeroSection, BlogSection } from "@/components/home-sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BlogSection />


    </main>
  );
}