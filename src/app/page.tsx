import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <VideoSection />
      <Pricing />
      
      {/* Footer Placeholder */}
      <footer className="py-20 bg-charcoal text-cream/50 text-center text-sm border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6">
          <p>© 2026 TAT® Calm for Animals (and You). All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
             <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-cream transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
