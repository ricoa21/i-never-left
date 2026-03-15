import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const sections = {
  gdpr: {
    id: "gdpr",
    title: "GDPR & Data Processing",
    intro: "I Never Left is committed to full compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This section explains how we handle personal data as both a data controller and, where applicable, a data processor.",
    subsections: [
      {
        heading: "Our role",
        content: "When you sign up and provide your own details, we act as a data controller — we determine how and why your data is processed. When you upload a client contact list for us to deliver your campaign, we act as a data processor on your behalf — processing that data only on your instructions.",
      },
      {
        heading: "Lawful basis",
        content: "We process personal data under the following lawful bases: contract performance (to deliver the service you have purchased), legitimate interests (to improve our services and communicate with prospective customers), legal obligation (to comply with applicable law), and consent (where you have explicitly opted in to marketing).",
      },
      {
        heading: "Your client contact lists",
        content: "By uploading a contact list, you confirm you have obtained the necessary consent from those individuals to receive marketing communications, and that you are authorised to share their data with us. We will never use your contact list for any purpose other than delivering your campaign. All contact list data is permanently deleted within 30 days of your campaign completing.",
      },
      {
        heading: "Data transfers",
        content: "All data is processed and stored within the UK and European Economic Area (EEA). We do not transfer personal data to third countries without appropriate safeguards in place.",
      },
      {
        heading: "Your rights under UK GDPR",
        content: "You have the right to access, rectify, erase, restrict, or port your personal data, and to object to processing. To exercise any of these rights, contact us at hello@ineverleft.co.uk. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.",
      },
      {
        heading: "ICO registration",
        content: "I Never Left is registered with the Information Commissioner's Office (ICO) as required under UK data protection law. Our registration confirms we handle personal data lawfully and responsibly.",
      },
    ],
  },
  cookies: {
    id: "cookies",
    title: "Cookie Policy",
    intro: "Our website uses cookies to ensure it works properly and to help us understand how visitors use it. This policy explains what cookies we use, why, and how you can control them.",
    subsections: [
      {
        heading: "What are cookies?",
        content: "Cookies are small text files stored on your device when you visit a website. They help the site remember information about your visit, such as your preferences or whether you have already seen a notice.",
      },
      {
        heading: "Essential cookies",
        content: "These cookies are required for the website to function. They cannot be disabled. They include cookies that manage your session, remember your cookie preferences, and ensure secure form submissions.",
      },
      {
        heading: "Analytics cookies",
        content: "We use anonymised analytics to understand how visitors use our site — which pages are visited, how long people stay, and where they arrive from. This data is aggregated and never identifies you personally. Analytics cookies are only set if you accept them.",
      },
      {
        heading: "What we do not use",
        content: "We do not use advertising cookies, tracking pixels, or any cookies that build a profile of you for third-party marketing purposes. We do not sell or share cookie data with advertisers.",
      },
      {
        heading: "Managing cookies",
        content: "You can control and delete cookies through your browser settings at any time. Disabling essential cookies may affect how the website functions. For more information on managing cookies, visit allaboutcookies.org.",
      },
    ],
  },
  cancellation: {
    id: "cancellation",
    title: "Cancellation & Refund Policy",
    intro: "We want every client to feel confident purchasing from I Never Left. This policy sets out your rights and our commitments when it comes to cancellations and refunds.",
    subsections: [
      {
        heading: "Before campaign build begins",
        content: "If you cancel before we have started building your campaign, you are entitled to a full refund minus a £25 administration fee. Please contact us at hello@ineverleft.co.uk to request a cancellation.",
      },
      {
        heading: "After campaign build, before messages are sent",
        content: "If your campaign has been built and approved but no messages have been sent yet, you are entitled to a 50% refund. This reflects the work already completed by our team.",
      },
      {
        heading: "After messages have been sent",
        content: "Once any messages in your campaign have been sent, no refund is available. The service has been partially or fully delivered at this point.",
      },
      {
        heading: "If we cannot deliver",
        content: "In the unlikely event that we are unable to deliver your campaign due to circumstances on our end, you will receive a full refund regardless of campaign stage.",
      },
      {
        heading: "Upgrades",
        content: "You may upgrade your package at any point before your return campaign fires. The price difference between packages will be charged at the time of upgrade. Downgrades are not permitted once campaign build has commenced.",
      },
      {
        heading: "How to request a cancellation",
        content: "Contact us at hello@ineverleft.co.uk with your name, package purchased, and the reason for cancellation. We aim to process all refund requests within 5 working days.",
      },
    ],
  },
  acceptable: {
    id: "acceptable",
    title: "Acceptable Use Policy",
    intro: "This Acceptable Use Policy sets out the rules for using the I Never Left service. By purchasing a package or using our website, you agree to these terms.",
    subsections: [
      {
        heading: "Permitted use",
        content: "You may use our service to deliver legitimate re-engagement campaigns to your own existing clients and contacts, provided you have the necessary consent to contact those individuals. The service is intended for freelancers, sole traders, and self-employed individuals returning from a career break.",
      },
      {
        heading: "Prohibited use",
        content: "You must not use our service to send unsolicited messages to people who have not previously been your clients or who have not consented to receive communications from you. You must not use the service to send misleading, deceptive, defamatory, or unlawful content. You must not attempt to circumvent any technical measures or use our service to send spam.",
      },
      {
        heading: "Your contact list",
        content: "You are solely responsible for ensuring your contact list is lawfully obtained, accurate, and up to date. You confirm that all contacts have consented to receive communications from you and that the data has been collected in compliance with UK GDPR. We reserve the right to refuse to process any list we believe may be unlawful.",
      },
      {
        heading: "Content approval",
        content: "All campaign content is subject to your approval before it is sent. By approving content, you confirm it is accurate, lawful, and appropriate for your audience. We reserve the right to decline to send content we consider harmful, misleading or in breach of applicable law.",
      },
      {
        heading: "Consequences of misuse",
        content: "If we determine that you are using our service in breach of this policy, we reserve the right to suspend or terminate your campaign without refund. We may also report any unlawful use to the relevant authorities.",
      },
      {
        heading: "Reporting concerns",
        content: "If you believe our service is being used in breach of this policy, please contact us at hello@ineverleft.co.uk.",
      },
    ],
  },
};

const CompliancePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Compliance — I Never Left";
    // Handle anchor scrolling on load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const navItems = Object.values(sections);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Legal & Compliance</span>
            <p className="text-sm text-muted-foreground">I Never Left · Last updated March 2026</p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to site
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Sidebar nav */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Contents</p>
              <nav className="space-y-2">
                {navItems.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 p-4 bg-card rounded-xl border border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Questions about any of these policies? Contact us at{" "}
                  <a href="mailto:hello@ineverleft.co.uk" className="text-primary hover:underline">
                    hello@ineverleft.co.uk
                  </a>
                </p>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3 space-y-20">

            {/* Intro */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Compliance</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I Never Left is committed to operating transparently and responsibly. This page brings together our key compliance documents in one place — covering how we handle data, use cookies, process cancellations, and set expectations for use of our service.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {navItems.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Sections */}
            {Object.values(sections).map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">{section.intro}</p>
                <div className="space-y-6">
                  {section.subsections.map((sub, i) => (
                    <div key={i} className="bg-card rounded-xl border border-border p-6">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="text-primary">✦</span>
                        {sub.heading}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{sub.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Footer note */}
            <div className="border-t border-border pt-8 text-sm text-muted-foreground space-y-2">
              <p>Registered in England & Wales. For questions, contact <a href="mailto:hello@ineverleft.co.uk" className="text-primary hover:underline">hello@ineverleft.co.uk</a></p>
              <p>This page was last updated March 2026. We will notify you of any material changes by email.</p>
              <div className="flex gap-4 pt-2">
                <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
                <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>
              </div>
            </div>

          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CompliancePage;