import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Starter Package",
      price: "£199",
      description: "Perfect for self-directed freelancers who need the essentials",
      features: [
        "Re-engagement email templates",
        "Social media post templates", 
        "Client outreach strategy guide",
        "30-day comeback calendar",
        "Basic portfolio review checklist"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      title: "Professional Package", 
      price: "£499",
      description: "Comprehensive support with personalized guidance",
      features: [
        "Everything in Starter Package",
        "Personalized re-engagement strategy",
        "Custom email sequences",
        "Social media content calendar",
        "One-on-one strategy session",
        "Portfolio optimization",
        "Client database audit"
      ],
      cta: "Choose Professional",
      popular: true
    },
    {
      title: "Concierge Package",
      price: "£999", 
      description: "Full-service managed return with dedicated support",
      features: [
        "Everything in Professional Package",
        "Managed client outreach campaign",
        "Social media management (30 days)",
        "Personal brand refresh",
        "Weekly strategy calls",
        "Lead qualification & follow-up",
        "Market repositioning consultation"
      ],
      cta: "Go Concierge",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Choose Your Return Strategy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From DIY templates to full concierge service, we have the right solution for your comeback journey.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className={`relative p-8 bg-card rounded-2xl shadow-soft card-hover ${service.popular ? 'ring-2 ring-primary' : ''}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">{service.title}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{service.price}</div>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={service.popular ? "hero" : "default"} 
                className="w-full"
                size="lg"
              >
                {service.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;