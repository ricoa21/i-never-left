import Hero from "@/components/Hero";
  import Problem from "@/components/Problem";  
  import Audience from "@/components/Audience";
  import HowItWorks from "@/components/HowItWorks";
  import ServicesComparison from "@/components/ServicesComparison";
  import FAQ from "@/components/FAQ";
  import Footer from "@/components/Footer";
  import ScrollToTop from "@/components/ScrollToTop";

  const Index = () => {
    return (
      <div className="min-h-screen">
        <Hero />
        <HowItWorks />
        <Audience />
        <Problem />
        <ServicesComparison />
        <FAQ />
        <ScrollToTop />
        <Footer />
      </div>
    );
  };

  export default Index;