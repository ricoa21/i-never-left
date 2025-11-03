import { MessageCircle, Calendar, Target, Zap, TrendingUp, Upload } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Tell us your leaving date and return date",
    description: "Share your timeline and we'll plan everything around it.",
    icon: Calendar,
  },
  {
    number: 2,
    title: "Upload your client list to our simple template",
    description: "Easy-to-use template helps organize your contacts for outreach.",
    icon: Upload,
  },
  {
    number: 3,
    title: "Customize your relaunch plan with your preferences",
    description: "Choose your channels, tone, and style to match your brand.",
    icon: Target,
  },
  {
    number: 4,
    title: "Multi-channel outreach tailored to your audience",
    description: "We craft personalized messages across email, SMS, and social.",
    icon: MessageCircle,
  },
  {
    number: 5,
    title: "Reconnect with clients effortlessly",
    description: "Your network gets re-engaged while you focus on time off.",
    icon: Zap,
  },
  {
    number: 6,
    title: "Track your comeback progress in real-time",
    description: "Monitor engagement and bookings as they come in.",
    icon: TrendingUp,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your entire relaunch in one place.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="flex flex-col items-center text-center space-y-4 p-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
