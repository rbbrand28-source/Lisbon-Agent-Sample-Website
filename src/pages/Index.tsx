import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import Features from "@/components/site/Features";
import Properties from "@/components/site/Properties";
import Areas from "@/components/site/Areas";
import About from "@/components/site/About";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream font-sans-body text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Properties />
        <Areas />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

