import Hero from "@/components/Hero";
import Problem from "@/components/Problem";  
import Audience from "@/components/Audience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Audience />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
