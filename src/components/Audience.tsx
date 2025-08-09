const Audience = () => {
  const freelancerTypes = [
    {
      title: "Creative Freelancers",
      icon: "✨",
      description: "Whatever your creative field, we help you re-ignite professional relationships and opportunities."
    },
    {
      title: "Design Professionals", 
      icon: "🎨",
      description: "Re-establish your design presence and connect with brands seeking fresh creative vision."
    },
    {
      title: "Consultants",
      icon: "💼", 
      description: "Leverage your expanded expertise to re-enter consulting markets with confidence."
    },
    {
      title: "Therapists & Wellness",
      icon: "🧘‍♀️",
      description: "Reconnect with existing clients and build new therapeutic relationships in your community."
    },
    {
      title: "Fitness Trainers",
      icon: "💪",
      description: "Get back to motivating clients with renewed energy and potentially new fitness insights."
    },
    {
      title: "Returning From Maternity",
      icon: "👶",
      description: "Navigate your professional return after maternity leave with confidence, rebuilding client relationships while balancing your new family priorities."
    }
  ];

  return (
    <section className="py-20 bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Built for UK Freelancers Like You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you've been traveling the world, raising a family, or taking time for personal growth, 
            BeRightBack understands the unique challenges facing UK freelancers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelancerTypes.map((type, index) => (
            <div key={index} className="p-6 bg-card rounded-xl shadow-soft card-hover text-center">
              <div className="text-4xl mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{type.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your specialty? BeRightBack works with freelancers across all industries.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold">🇬🇧 Proudly supporting UK freelancers nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;