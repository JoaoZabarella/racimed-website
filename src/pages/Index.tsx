import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ApiSection from "@/components/ApiSection";
import Products from "@/components/Products";
import Features from "@/components/Features";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ApiSection />
        <Products />
        <Features />
        <About />
        <Videos />
        <Support />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
