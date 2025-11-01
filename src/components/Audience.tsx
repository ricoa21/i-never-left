import { Palette, Briefcase, Heart, Dumbbell, Baby, Sparkles } from "lucide-react";

const Audience = () => {
  const freelancerTypes = [
    {
      title: "Creative Freelancers",
      icon: Sparkles,
      description: "Whatever your creative field, we help you re-ignite professional relationships and opportunities."
    },
    {
      title: "Design Professionals", 
      icon: Palette,
      description: "Re-establish your design presence and connect with brands seeking fresh creative vision."
    },
    {
      title: "Consultants",
      icon: Briefcase, 
      description: "Leverage your expanded expertise to re-enter consulting markets with confidence."
    },
    {
      title: "Therapists & Wellness",
      icon: Heart,
      description: "Reconnect with existing clients and build new therapeutic relationships in your community."
    },
    {
      title: "Fitness Trainers",
      icon: Dumbbell,
      description: "Get back to motivating clients with renewed energy and potentially new fitness insights."
    },
    {
      title: "Returning From Maternity",
      icon: Baby,
      description: "Navigate your professional return after maternity leave with confidence, rebuilding client relationships while balancing your new family priorities."
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Built for UK Freelancers Like You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Whether you've been traveling the world, raising a family, or taking time for personal growth, 
            we understand the unique challenges facing UK freelancers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancerTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div 
                key={index} 
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="mb-6 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{type.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your specialty? We work with freelancers across all industries.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-muted rounded-full">
            <span className="text-foreground font-medium">Proudly supporting UK freelancers nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
