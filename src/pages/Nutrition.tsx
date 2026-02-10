import { motion } from "framer-motion";
import { Check, ArrowRight, Apple, Heart, Utensils, ShieldCheck, Phone, HelpCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Nutrition = () => {
    const navigate = useNavigate();

    const handleBook = (pkg: { label: string, price: string }) => {
        navigate('/booking', { state: { packageName: pkg.label, price: pkg.price } });
    };

    return (
        <main className="pt-20">

            {/* Hero Section */}
            <section className="py-20 md:py-32 subtle-gradient overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 tracking-tight">
                            Improve your nutrition with <span className="text-primary">long-term attainable guidance</span>
                        </h1>
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 md:px-6 py-2 rounded-full text-sm md:text-lg font-bold uppercase tracking-widest mb-6 md:mb-8">
                            <Apple className="w-5 h-5" />
                            Dietitian | Nutrition Coaching
                        </div>
                        <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                            Our Registered Dietitian’s at Medically Fit are here to provide you with high-quality,
                            evidence-based nutrition coaching and advice that can be undertaken in-clinic or virtually.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-12 md:py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden card-shadow"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
                                alt="Healthy Eating"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                        >
                            <p>
                                There are many different ways to eat well and feel your best. We will help you find
                                the way that suits your preferences and lifestyle.
                            </p>
                            <p>
                                By supporting you through practical, sustainable nutrition recommendations, you will
                                be able to improve your eating patterns to create long-term positive behaviour changes.
                            </p>
                            <p className="font-bold text-foreground bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                                We will provide you with the tools you need to achieve your goals, and more importantly,
                                to maintain them.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* One on One Section */}
            <section className="py-24 subtle-gradient">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">Personalized Care</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-display mt-2">One on One Coaching</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-card p-8 md:p-12 rounded-[2.5rem] card-shadow border border-border">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Star className="text-primary w-6 h-6" />
                                Your Customized Plan
                            </h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Medically Fit offers our members the choice of assessments and diet plans with flexibility
                                in the frequency of appointments. Together we formulate a plan to achieve your goals with
                                your long-term health goals in mind. We review:
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Allergies",
                                    "Sensitivities",
                                    "Digestive Issues",
                                    "Lifestyle Health Conditions",
                                    "Food Preferences",
                                    "Daily Intake Adjustments"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 font-medium text-foreground">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-[2.5rem] card-shadow relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Promoting Quality of Life</h3>
                                <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                                    A healthy and nutritious diet is one of the lifestyle factors that can promote
                                    quality of life and prevent the risk of these chronic illnesses.
                                </p>
                                <p className="text-primary-foreground/90 text-lg leading-relaxed font-bold">
                                    Our Registered Dietitian’s can help guide you to a healthier, happier,
                                    more energetic lifestyle!
                                </p>
                                <Button variant="secondary" className="mt-8 group">
                                    Book a Consultation
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Individual Sessions Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display uppercase tracking-tight">INDIVIDUAL SESSIONS</h2>
                            <p className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mt-2">REGISTERED DIETITIAN</p>
                        </div>
                        <Badge variant="outline" className="px-4 py-2 text-primary border-primary font-bold text-xs">Clinical Nutrition & Metabolic Health</Badge>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Pricing Cards */}
                        <div className="space-y-8">
                            <div className="p-8 rounded-[2rem] bg-muted/50 border-2 border-primary/10 relative overflow-hidden group hover:border-primary transition-all">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Utensils className="w-24 h-24 text-primary" />
                                </div>
                                <h4 className="font-bold text-2xl mb-4">Initial Assessment (1 hour)</h4>
                                <p className="text-muted-foreground italic mb-6">*Required for new clients*</p>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-4xl font-bold text-primary">C$150.00</span>
                                    <span className="text-xs text-muted-foreground">per session + taxes</span>
                                </div>
                                <Button className="w-full rounded-xl" onClick={() => handleBook({ label: "Initial Assessment (Nutrition)", price: "150.00" })}>Book Now</Button>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-card border border-border shadow-lg">
                                <h4 className="font-bold text-2xl mb-2">Single Sessions (30 mins)</h4>
                                <p className="text-muted-foreground mb-6">Follow-up nutrition coaching</p>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-3xl font-bold text-foreground">C$100.00</span>
                                    <span className="text-xs text-muted-foreground">per session + taxes</span>
                                </div>
                                <Button variant="outline" className="w-full rounded-xl" onClick={() => handleBook({ label: "Single Session (Nutrition)", price: "100.00" })}>Book Follow-up</Button>
                            </div>
                        </div>

                        {/* Package Options */}
                        <div className="bg-card p-8 md:p-10 rounded-[2.5rem] card-shadow border border-border">
                            <h4 className="font-bold text-2xl mb-8 flex items-center gap-3">
                                <Badge className="bg-primary">Value Packs</Badge>
                                Session Packages
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { sessions: 3, price: "435", desc: "1 x 45min, 2 x 30min", label: "Book 3x RD Sessions" },
                                    { sessions: 6, price: "708", desc: "1 x 45min, 5 x 30min", label: "Book 6x RD Sessions" },
                                    { sessions: 10, price: "1050", desc: "1 x 45min, 9 x 30min", label: "Book 10x RD Sessions" },
                                ].map((pkg) => (
                                    <div key={pkg.sessions} className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl border border-primary/5 bg-accent/30 hover:bg-accent/50 transition-all gap-4">
                                        <div className="text-center sm:text-left">
                                            <p className="font-bold text-lg">{pkg.sessions} Follow-Ups</p>
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{pkg.desc}</p>
                                        </div>
                                        <div className="text-center sm:text-right w-full sm:w-auto">
                                            <p className="font-bold text-2xl text-primary mb-2">${pkg.price} + HST</p>
                                            <Button
                                                size="sm"
                                                className="w-full sm:w-auto font-bold uppercase text-[10px] tracking-widest"
                                                onClick={() => handleBook({ label: pkg.label, price: pkg.price })}
                                            >
                                                {pkg.label}
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explainer Section */}
            <section className="py-24 subtle-gradient">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h2 className="text-4xl font-bold font-display">A Registered Dietitian</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card p-10 rounded-[2.5rem] card-shadow border border-border"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-primary">What is a Registered Dietitian?</h3>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Dietitians are regulated health professionals recognized by the College of Dietitians.
                                    Trained to provide nutritional care throughout the entire continuum of life.
                                </p>
                                <p>
                                    They take the science of food and translate it into practical plans that suit
                                    your needs, goals, and lifestyle.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-card p-10 rounded-[2.5rem] card-shadow border border-border"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-primary">How can they help me?</h3>
                            <ul className="space-y-3 text-sm">
                                {[
                                    "Health goals through food and education",
                                    "Body composition, bone health, and energy",
                                    "Medical conditions: Diabetes, Cholestrol, BP",
                                    "Dietary preferences: Vegan, Vegetarian, etc.",
                                    "Allergies: Lactose, Celiac, Peanut, etc.",
                                    "Lifestyle: Meal prepping and cooking habits"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Consultation Form Section */}
            <section className="py-12 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 card-shadow border border-border overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 text-center mb-12">
                            <h2 className="text-4xl font-bold font-display text-foreground mb-4">Book a Consultation</h2>
                            <p className="text-muted-foreground">Tailored nutritional guidance for your unique lifestyle.</p>
                        </div>

                        <form className="space-y-8 relative z-10">
                            <div className="space-y-4">
                                <label className="text-sm font-bold uppercase tracking-widest text-foreground/70">Topic (select all that apply) <span className="text-red-500">*</span></label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {["Nutrition", "Exercise", "Health Assessment"].map((topic) => (
                                        <div key={topic} className="flex items-center space-x-2 p-4 rounded-xl border border-border bg-muted/20 hover:border-primary transition-colors cursor-pointer">
                                            <input type="checkbox" id={`topic-${topic}`} className="w-4 h-4 text-primary rounded border-border" />
                                            <label htmlFor={`topic-${topic}`} className="text-sm font-medium cursor-pointer">{topic}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-sm font-bold uppercase tracking-widest text-foreground/70">Who is this for? <span className="text-red-500">*</span></label>
                                    <div className="space-y-3">
                                        {["Corporate", "Individual / It's for me"].map((option) => (
                                            <div key={option} className="flex items-center space-x-2 p-4 rounded-xl border border-border bg-muted/20 hover:border-primary cursor-pointer">
                                                <input type="radio" name="who" id={`who-${option}`} className="text-primary" />
                                                <label htmlFor={`who-${option}`} className="text-sm font-medium cursor-pointer">{option}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-bold uppercase tracking-widest text-foreground/70">Type of Discovery Call <span className="text-red-500">*</span></label>
                                    <div className="space-y-3">
                                        {["Registered Dietitian", "Clinical Exercise Physiologist", "Inquiring about a program", "Other"].map((type) => (
                                            <div key={type} className="flex items-center space-x-2 p-4 rounded-xl border border-border bg-muted/20 hover:border-primary cursor-pointer">
                                                <input type="radio" name="callType" id={`type-${type}`} className="text-primary" />
                                                <label htmlFor={`type-${type}`} className="text-sm font-medium cursor-pointer">{type}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label htmlFor="other" className="text-sm font-bold uppercase tracking-widest text-foreground/70">Other</label>
                                <textarea id="other" rows={4} className="w-full p-4 rounded-xl border border-border bg-muted/20 outline-none focus:ring-2 focus:ring-primary transition-all"></textarea>
                            </div>

                            <Button className="w-full h-14 text-lg font-bold uppercase tracking-widest rounded-2xl group">
                                Send Inquiry
                                <Phone className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>

    );
};


export default Nutrition;
