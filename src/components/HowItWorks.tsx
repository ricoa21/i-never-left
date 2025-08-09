const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Tell Us Your Return Date",
      description: "Let us know when you plan to be back in action, so we can time your re‑engagement perfectly.",
      icon: "📅"
    },
    {
      number: "2", 
      title: "Send Us Your Client List",
      description: "You share your list of past or priority clients in a secure, GDPR-compliant way. (Don't worry — we delete it as soon as your campaign ends.)",
      icon: "📋"
    },
    {
      number: "3",
      title: "We Create Your 'I'M BACK' Campaign", 
      description: "Depending on your package, we send friendly, personalised messages to your clients, set up your booking link, prepare social media announcements, and for Pro & Concierge packages, run multi‑week campaigns while managing replies and tracking responses.",
      icon: "🚀"
    },
    {
      number: "4",
      title: "You Focus on Your Return — We Handle the Rest",
      description: "While you finish your travels, maternity leave, or time abroad, we make sure your clients know you're coming back and are ready to book.",
      icon: "✨"
    },
    {
      number: "5", 
      title: "Your Diary Starts Filling Up",
      description: "When you're back, your clients are already warmed up, engaged, and ready to work with you again. No awkward reintroductions, no starting from scratch — just a smooth, confident return.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How Does It Work?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We make your comeback simple, stress-free, and effective.
            <br />
            Here's how it works from start to finish:
          </p>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-muted/30 rounded-full flex items-center justify-center text-6xl">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl">
            <div className="text-4xl mb-4">💡</div>
            <p className="text-2xl font-semibold text-foreground mb-2">
              "You've been away — but your business hasn't missed a beat."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;