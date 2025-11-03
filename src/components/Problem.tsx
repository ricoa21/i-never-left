const Problem = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            The Challenge Every Freelancer Faces
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Taking time off shouldn't mean losing your professional momentum — but many talented freelancers find it difficult to regain their presence after a break.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-card rounded-xl shadow-soft card-hover">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Fading Visibility</h3>
            <p className="text-muted-foreground leading-relaxed">
              Clients and industry contacts can easily forget about you during your absence, making it even harder to reconnect and secure new opportunities.
            </p>
          </div>
          
          <div className="text-center p-8 bg-card rounded-xl shadow-soft card-hover">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Lost Momentum</h3>
            <p className="text-muted-foreground leading-relaxed">
              Starting fresh feels overwhelming. Rebuilding your steady workflow and professional rhythm often requires months of consistent effort.
            </p>
          </div>
          
          <div className="text-center p-8 bg-card rounded-xl shadow-soft card-hover">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Communication Overload</h3>
            <p className="text-muted-foreground leading-relaxed">
              Juggling client messages across various platforms and finding the right moments to respond can be exhausting, leading to missed opportunities and added stress.
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-xl shadow-soft card-hover">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Confidence Erosion</h3>
            <p className="text-muted-foreground leading-relaxed">
              Self-doubt can quietly creep in. Questioning your skills and value makes marketing yourself confidently even more challenging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;