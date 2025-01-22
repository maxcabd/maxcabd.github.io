import { Navbar } from '@/components/navbar';
import { HeroSection, BlogSection, ProjectsSection } from '@/components/home-sections';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
          {/* Left Column - Hero and Projects */}
          <div className="space-y-20">
            <HeroSection />
            <ProjectsSection />
          </div>

          {/* Right Column - Blog Posts */}
          <div className="lg:border-l lg:border-border lg:pl-8">
            <BlogSection />
          </div>
        </div>
      </div>
    </main>
  );
}