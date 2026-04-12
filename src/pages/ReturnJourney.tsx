import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Download, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ReturnJourney = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    businessType: "",
    phone: "",
    returnDate: null as Date | null,
    package: "",
    channels: [] as string[],
    bookingUrl: "",
    monthlyPostTone: "",
    monthlyPostMethod: "",
    instagramStyle: "",
    dataConsent: false,
    termsConsent: false,
    marketingConsent: false,
  });

  const [contactListFile, setContactListFile] = useState<File | null>(null);
  const [instagramPhotos, setInstagramPhotos] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isPro = formData.package === "pro";

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: "£99",
      features: [
        "Outreach to 100 contacts",
        "3 personalised messages by email and SMS",
        "2 Instagram posts created for you to publish",
        "One-off price — no ongoing fees",
      ],
      note: "Covers up to 100 contacts. Got more? Pro gives you up to 200.",
    },
    {
      id: "pro",
      name: "Pro",
      price: "£249",
      features: [
        "Everything in Starter",
        "Outreach to 200 contacts",
        "One post per month during your entire break (up to 12 months)",
        "Return week — 4 posts across 7 days",
        "30 days engagement tracking after return",
      ],
      note: null,
    },
    {
      id: "concierge",
      name: "Concierge",
      price: "From £499",
      features: [
        "Everything in Pro",
        "Dedicated human account manager",
        "Full return campaign — daily content during launch week",
        "3 months post-return support included",
        "Continue from £99 per month after that",
      ],
      note: null,
    },
  ];

  const channels = [
    { id: "sms", label: "SMS" },
    { id: "email", label: "Email" },
    { id: "instagram", label: "Instagram" },
  ];

  const handleChannelChange = (channelId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      channels: checked
        ? [...prev.channels, channelId]
        : prev.channels.filter((c) => c !== channelId),
    }));
  };

  const handleContactListUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setContactListFile(file);
  };

  const handleInstagramPhotosUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setInstagramPhotos(e.target.files);
    }
  };

  const downloadTemplate = () => {
    const csvContent =
      "Name,Channel Preference,Phone,Email,Notes\n" +
      "John Smith,SMS,07123456789,john@example.com,Previous client\n" +
      "Jane Doe,Email,,jane@example.com,Potential collaboration";

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contact-list-template.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("businessName", formData.businessName);
      data.append("businessType", formData.businessType);
      data.append("phone", formData.phone);
      data.append("returnDate", formData.returnDate ? format(formData.returnDate, "PPP") : "");
      data.append("package", formData.package);
      data.append("channels", formData.channels.join(", "));
      data.append("bookingUrl", formData.bookingUrl);
      data.append("marketingConsent", formData.marketingConsent ? "Yes" : "No");
      if (isPro) {
        data.append("monthlyPostTone", formData.monthlyPostTone);
        data.append("monthlyPostMethod", formData.monthlyPostMethod);
        data.append("instagramStyle", formData.instagramStyle);
        if (instagramPhotos) {
          Array.from(instagramPhotos).forEach((file, i) => {
            data.append(`instagramPhoto${i + 1}`, file);
          });
        }
      }
      if (contactListFile) data.append("contactList", contactListFile);

      const response = await fetch("https://www.formbackend.com/f/edbe0a7137144be5", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmittedName(formData.fullName.split(" ")[0]);
        setSubmittedEmail(formData.email);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at hello@ineverleft.co.uk",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- CONFIRMATION SCREEN ---
  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center space-y-10">

          <div className="space-y-4">
            <div className="inline-block text-4xl mb-2">✦</div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              Your Comeback Begins.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We have everything we need, {submittedName}.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-left space-y-5">
            <p className="text-foreground leading-relaxed">
              Within 24 hours we will drop you a welcome email at{" "}
              <span className="text-primary font-medium">{submittedEmail}</span>{" "}
              with everything you need to complete your booking and get your campaign underway.
            </p>
            <p className="text-foreground leading-relaxed">
              That email will include your secure payment link — once you are happy and payment is confirmed, your comeback is officially booked and we get to work.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the meantime, if you have any questions we are at{" "}
              <a href="mailto:hello@ineverleft.co.uk" className="text-primary hover:underline">
                hello@ineverleft.co.uk
              </a>
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-left space-y-5">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">What happens after that</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-primary font-bold text-lg mt-0.5">01</span>
                <div>
                  <p className="font-semibold text-foreground">We review your brief</p>
                  <p className="text-muted-foreground text-sm mt-1">We go through your details, contact list and return date to make sure everything is in order before we start building.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-lg mt-0.5">02</span>
                <div>
                  <p className="font-semibold text-foreground">We build your campaign</p>
                  <p className="text-muted-foreground text-sm mt-1">Every message written in your voice, timed perfectly around your return date. Back with you for approval within 48 hours of payment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-lg mt-0.5">03</span>
                <div>
                  <p className="font-semibold text-foreground">You approve, we launch</p>
                  <p className="text-muted-foreground text-sm mt-1">Nothing goes out without your say-so. Once you are happy, we schedule everything. Then take your break — we handle the rest.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // --- FORM ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="mb-8">
          <Button variant="outline" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="block text-foreground">Start Your</span>
            <span className="gradient-text block">Comeback Journey</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Let's create a campaign that announces your return and re-energizes your professional network.
            All data is handled securely and deleted after your campaign completes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          <Card>
            <CardHeader>
              <CardTitle>1. Your Client List</CardTitle>
              <CardDescription>
                We need your client contacts to build your campaign. Upload a spreadsheet or CSV if you have one — or just take a screenshot of your contacts, WhatsApp group, or notes app. Not sure? A screenshot is absolutely fine — we'll take it from there.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="contact-list">Upload your client list or screenshot</Label>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex-1">
                    <Input
                      id="contact-list"
                      type="file"
                      accept=".csv,.xlsx,.xls,image/*"
                      onChange={handleContactListUpload}
                      className="cursor-pointer"
                    />
                  </div>
                  <Button type="button" variant="outline" onClick={downloadTemplate} className="flex items-center gap-2 shrink-0">
                    <Download className="w-4 h-4" />
                    Download Template
                  </Button>
                </div>
                {contactListFile && (
                  <p className="text-sm text-muted-foreground mt-2">Selected: {contactListFile.name}</p>
                )}
                <p className="text-sm text-muted-foreground mt-3">
                  Accepts spreadsheets, CSV files, or screenshots from your phone. You can always send more contacts by email after you sign up.
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">GDPR Compliance</p>
                <p className="text-sm text-muted-foreground">
                  Your contact data is processed securely and will be permanently deleted within 7 days of campaign completion.
                  We only use this data to execute your return campaign as specified.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Your Details</CardTitle>
              <CardDescription>Tell us about yourself and your business for personalised campaign messaging.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="businessName">Business/Brand Name *</Label>
                  <Input
                    id="businessName"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, businessName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="businessType">Type of Business/Sector</Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, businessType: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="design">Design and Creative</SelectItem>
                    <SelectItem value="marketing">Marketing and PR</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="writing">Writing and Content</SelectItem>
                    <SelectItem value="coaching">Coaching and Training</SelectItem>
                    <SelectItem value="health">Health and Wellness</SelectItem>
                    <SelectItem value="trades">Trades and Services</SelectItem>
                    <SelectItem value="pets">Pets and Animal Care</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Your Return Date</CardTitle>
              <CardDescription>When are you back and ready for your campaign to launch?</CardDescription>
            </CardHeader>
            <CardContent>
              <Label>Return Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal mt-2",
                      !formData.returnDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.returnDate ? format(formData.returnDate, "PPP") : "Select your return date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.returnDate || undefined}
                    onSelect={(date) => setFormData((prev) => ({ ...prev, returnDate: date || null }))}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Choose Your Package</CardTitle>
              <CardDescription>Select the campaign package that best fits your needs.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.package}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, package: value, monthlyPostTone: "", monthlyPostMethod: "", instagramStyle: "" }))}
                className="space-y-4"
              >
                {packages.map((pkg) => (
                  <div key={pkg.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value={pkg.id} id={pkg.id} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={pkg.id} className="text-base font-semibold cursor-pointer">
                          {pkg.name} — {pkg.price}
                        </Label>
                        <ul className="mt-2 space-y-1">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              {feature}
                            </li>
                          ))}
                        </ul>
                        {pkg.note && (
                          <p className="text-sm text-amber-500 mt-3 font-medium">
                            {pkg.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Pro-only: Monthly post questions */}
          {isPro && (
            <Card className="border-primary/40">
              <CardHeader>
                <CardTitle>4a. Your Monthly Posts</CardTitle>
                <CardDescription>
                  Tell us how you'd like your monthly keep-warm posts to feel — we'll tailor the content to match and naturally shift the tone as your return gets closer.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">

                {/* Post tone */}
                <div>
                  <Label className="text-base font-semibold">How would you like your monthly posts to feel? *</Label>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">Whatever you choose, we'll naturally shift to a "nearly back, get booked in" tone in your final 1–2 months.</p>
                  <RadioGroup
                    value={formData.monthlyPostTone}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, monthlyPostTone: value }))}
                    className="space-y-3"
                  >
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="lifestyle" id="tone-lifestyle" className="mt-1" />
                        <div>
                          <Label htmlFor="tone-lifestyle" className="font-semibold cursor-pointer">Holiday / lifestyle</Label>
                          <p className="text-sm text-muted-foreground mt-1">Keep it personal throughout — share the adventure, the journey, the experience.</p>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="career" id="tone-career" className="mt-1" />
                        <div>
                          <Label htmlFor="tone-career" className="font-semibold cursor-pointer">Career focused</Label>
                          <p className="text-sm text-muted-foreground mt-1">Industry insights, behind the scenes, professional updates — keep your audience engaged with your work.</p>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="mix" id="tone-mix" className="mt-1" />
                        <div>
                          <Label htmlFor="tone-mix" className="font-semibold cursor-pointer">Mix — lifestyle first, career focused as I get closer to returning</Label>
                          <p className="text-sm text-muted-foreground mt-1">Starts with the holiday vibes, naturally builds momentum and shifts to "nearly back" energy as your return approaches.</p>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Post method */}
                <div>
                  <Label className="text-base font-semibold">How would you like your monthly posts to be handled? *</Label>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">We create every post — you just choose how they reach your audience.</p>
                  <RadioGroup
                    value={formData.monthlyPostMethod}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, monthlyPostMethod: value }))}
                    className="space-y-3"
                  >
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="own-account" id="method-own" className="mt-1" />
                        <div>
                          <Label htmlFor="method-own" className="font-semibold cursor-pointer">Post to my own Instagram</Label>
                          <p className="text-sm text-muted-foreground mt-1">We schedule posts directly to your profile via Buffer. Looks completely native to your account. Requires a one-time Buffer connection — we'll walk you through it, takes about 5 minutes.</p>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="reshare" id="method-reshare" className="mt-1" />
                        <div>
                          <Label htmlFor="method-reshare" className="font-semibold cursor-pointer">Post from I Never Left — I'll reshare</Label>
                          <p className="text-sm text-muted-foreground mt-1">We post from our account and tag you. You reshare to your story or feed with one tap. No account connection needed — the simplest option.</p>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Instagram style + photo upload */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-semibold">Your Instagram style</Label>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">
                      Tell us a little about how your Instagram looks and feels — so we can create posts that fit naturally. For example: "relaxed and personal, lots of travel shots" or "clean and professional, mostly work in progress photos."
                    </p>
                    <Input
                      value={formData.instagramStyle}
                      onChange={(e) => setFormData((prev) => ({ ...prev, instagramStyle: e.target.value }))}
                      placeholder="Describe your Instagram style..."
                    />
                  </div>
                  <div>
                    <Label className="text-base font-semibold">Upload photos for your posts</Label>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">
                      Upload any photos of your current situation — cocktails on Phi Phi beach, a selfie at La Sagrada Família, or trying to put a 3 month old to sleep! The more real the better. You can always send more by email after you sign up.
                    </p>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleInstagramPhotosUpload}
                      className="cursor-pointer"
                    />
                    {instagramPhotos && instagramPhotos.length > 0 && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {instagramPhotos.length} photo{instagramPhotos.length > 1 ? "s" : ""} selected
                      </p>
                    )}
                  </div>
                </div>

              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>5. Communication Channels</CardTitle>
              <CardDescription>Which channels would you like us to use to contact your clients directly?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-8 mt-2">
                {channels.map((channel) => (
                  <div key={channel.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={channel.id}
                      checked={formData.channels.includes(channel.id)}
                      onCheckedChange={(checked) => handleChannelChange(channel.id, checked as boolean)}
                    />
                    <Label htmlFor={channel.id} className="cursor-pointer">
                      {channel.label}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Booking Integration (Optional)</CardTitle>
              <CardDescription>Provide your calendar or booking system URL to include in campaign messages.</CardDescription>
            </CardHeader>
            <CardContent>
              <Label htmlFor="bookingUrl">Booking/Calendar URL</Label>
              <Input
                id="bookingUrl"
                type="url"
                value={formData.bookingUrl}
                onChange={(e) => setFormData((prev) => ({ ...prev, bookingUrl: e.target.value }))}
                placeholder="https://calendly.com/yourname or your booking link"
                className="mt-2"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Consent and Legal</CardTitle>
              <CardDescription>Please confirm your consent for data processing and campaign execution.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="dataConsent"
                    checked={formData.dataConsent}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, dataConsent: checked as boolean }))}
                  />
                  <Label htmlFor="dataConsent" className="text-sm leading-relaxed cursor-pointer">
                    I consent to I Never Left processing my personal and business data to execute my return campaign.
                    I understand data will be securely deleted within 7 days of campaign completion. *
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="termsConsent"
                    checked={formData.termsConsent}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, termsConsent: checked as boolean }))}
                  />
                  <Label htmlFor="termsConsent" className="text-sm leading-relaxed cursor-pointer">
                    I agree to the Terms of Service and Privacy Policy. *
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="marketingConsent"
                    checked={formData.marketingConsent}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, marketingConsent: checked as boolean }))}
                  />
                  <Label htmlFor="marketingConsent" className="text-sm leading-relaxed cursor-pointer">
                    I would like to receive updates about new I Never Left services and freelancer resources.
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={!formData.dataConsent || !formData.termsConsent || isSubmitting}
                  className="px-8 py-3"
                >
                  {isSubmitting ? "Starting Your Journey..." : "Start My Return Campaign"}
                </Button>
                <div className="text-sm text-muted-foreground max-w-md mx-auto">
                  <p className="font-medium mb-2">What happens next:</p>
                  <ul className="text-left space-y-1">
                    <li>We will review your details within 24 hours</li>
                    <li>Schedule a brief consultation call</li>
                    <li>Finalise your campaign strategy</li>
                    <li>Launch your return announcement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

        </form>
      </div>
    </div>
  );
};

export default ReturnJourney;