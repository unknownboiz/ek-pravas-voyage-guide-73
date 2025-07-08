
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
