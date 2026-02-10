import { motion } from "framer-motion";
import { Check, Dumbbell, Activity, ShieldCheck, Phone, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Exercise = () => {
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
                        <div className="inline-flex items-center gap-2 text-[#22c55e] font-bold uppercase tracking-[0.2em] mb-4 text-xs md:text-base px-2 text-center justify-center">
                            Love how you move <span className="mx-2">|</span> Love how you feel
                        </div>
                        <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 md:mb-8 tracking-tight">
                            Exercise Physiology
                        </h1>
                        <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                            Clinical Exercise Physiologists run our personal training to ensure your health
                            and exercise considerations are front of mind throughout your training.
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
                            className="order-2 lg:order-1 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left"
                        >
                            <p>
                                Structured exercise, personal training, being physically active, or playing sports –
                                whatever is your preferred modality of movement, we are here to ensure your health
                                is prioritized and effectively managed with movement.
                            </p>
                            <p>
                                Maintaining your fitness, your ability to play with your kids or grandchildren, to go skiing,
                                to continue your participation in sports, to be able to walk up a flight of stairs,
                                or feel more comfortable in how your clothes fit.
                            </p>
                            <p className="font-bold text-foreground">
                                Our Clinical Exercise Physiologists are ready to help you reach your goals and ensure
                                a long, high-quality life with in-person or virtual exercise and personal training available!
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 hero-gradient rounded-3xl opacity-20 blur-3xl" />
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/9.png"
                                    alt="Exercise Session"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* One on One Section */}
            <section className="py-24 subtle-gradient">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">One on One</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-display mt-2">Personal Training</h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 relative group"
                        >
                            <div className="absolute -inset-4 hero-gradient rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                            <div className="relative rounded-[2.5rem] overflow-hidden card-shadow h-[600px]">
                                <img
                                    src="/8.jpeg"
                                    alt="Personal Training"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>

                        <div className="lg:col-span-7 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-card p-8 md:p-10 rounded-[2.5rem] card-shadow border border-border"
                            >
                                <h3 className="text-2xl font-bold mb-6 italic text-primary">Medically Fit Assessment</h3>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    Medically Fit offers exercise assessments and customized exercise plans with flexibility in the frequency of appointments. We work with you to review:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Movement Preferences",
                                        "Exercise Knowledge",
                                        "Health Considerations",
                                        "Musculoskeletal Injuries",
                                        "Realistic Goal Setting"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 font-medium text-foreground">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <Check className="w-4 h-4 text-primary" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-card p-8 md:p-10 rounded-[2.5rem] card-shadow border border-border"
                            >
                                <h3 className="text-2xl font-bold mb-6 italic text-primary">Specialized Clinical Care</h3>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    Our Clinical Exercise Physiologists move beyond general fitness, specializing in:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Arthritic conditions (Knee/Hip)",
                                        "Diabetes & PCOS Management",
                                        "Osteoporosis Care",
                                        "Fall Risk & Balance",
                                        "COPD & Cardiovascular Health"
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-accent/30 border border-primary/5">
                                            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="font-bold leading-tight uppercase tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
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
                            <p className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mt-2">EXERCISE PHYSIOLOGIST</p>
                        </div>
                        <Badge variant="outline" className="px-4 py-2 text-primary border-primary font-bold text-xs">Clinical Movement & Performance</Badge>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Left Side: Initial & Single */}
                        <div className="space-y-8">
                            <div className="p-8 rounded-[2rem] bg-muted/50 border-2 border-primary/10 relative overflow-hidden group hover:border-primary transition-all">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Activity className="w-24 h-24 text-primary" />
                                </div>
                                <h4 className="font-bold text-2xl mb-4">Initial Assessment (1 hour)</h4>
                                <p className="text-muted-foreground italic mb-6">*Required for new clients*</p>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-4xl font-bold text-primary">C$150.00</span>
                                    <span className="text-xs text-muted-foreground uppercase">+ Applicable taxes</span>
                                </div>
                                <Button className="w-full rounded-xl" onClick={() => handleBook({ label: "Initial Assessment (Exercise)", price: "150.00" })}>Book Now</Button>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-card border border-border relative overflow-hidden shadow-lg">
                                <h4 className="font-bold text-2xl mb-2">Single Sessions (45 mins)</h4>
                                <p className="text-muted-foreground mb-6">One-on-one guided clinical exercise</p>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-3xl font-bold text-foreground">C$100.00</span>
                                    <span className="text-xs text-muted-foreground uppercase">per session + taxes</span>
                                </div>
                                <Button variant="outline" className="w-full rounded-xl" onClick={() => handleBook({ label: "Single Session (Exercise)", price: "100.00" })}>Book Session</Button>
                            </div>

                            <div className="p-8 rounded-[2rem] hero-gradient text-white flex flex-col justify-center items-center text-center">
                                <Dumbbell className="w-12 h-12 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Customized Exercise Program</h3>
                                <p className="text-white/80">Tailored specifically for your body and goals.</p>
                            </div>
                        </div>

                        {/* Right Side: Packages */}
                        <div className="bg-card p-8 md:p-10 rounded-[2.5rem] card-shadow border border-border">
                            <h4 className="font-bold text-2xl mb-8 flex items-center gap-3">
                                <Badge className="bg-primary">Value Packs</Badge>
                                Session Packages
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { sessions: 5, price: "625", label: "Book 5x EP Sessions" },
                                    { sessions: 10, price: "1050", label: "Book 10x EP Sessions" },
                                    { sessions: 15, price: "1425", label: "Book 15x EP Sessions" },
                                    { sessions: 20, price: "1750", label: "Book 20x EP Sessions" },
                                ].map((pkg) => (
                                    <div key={pkg.sessions} className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl border border-primary/5 bg-accent/30 hover:bg-accent/50 transition-all gap-4">
                                        <div className="text-center sm:text-left">
                                            <p className="font-bold text-lg">1 Initial + {pkg.sessions} Sessions</p>
                                            <p className="text-muted-foreground font-medium uppercase tracking-wider">45-minute follow-up sessions</p>
                                        </div>
                                        <div className="text-center sm:text-right w-full sm:w-auto">
                                            <p className="font-bold text-2xl text-primary mb-2">${pkg.price} + HST</p>
                                            <Button
                                                size="sm"
                                                className="w-full sm:w-auto font-bold uppercase tracking-widest"
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

            {/* FAQ Section */}
            <section className="py-24 subtle-gradient">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h2 className="text-3xl font-bold">General Questions</h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card p-10 md:p-16 rounded-[3rem] card-shadow border border-border"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-primary">What does a Certified Exercise Physiologist do?</h3>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                A Clinical Exercise Physiologist has completed at least four years of tertiary studies.
                                Beginning with an analysis of movement patterns, strength, medical history and your goals
                                to develop exercise programs that assist in the recovery of chronic diseases, improvement
                                of cardiovascular function, body composition, flexibility and strength.
                            </p>
                            <p>
                                Additionally, Certified Exercise Physiologists provide movement counseling and lifestyle
                                education to address musculoskeletal, cardiopulmonary, metabolic, neuromuscular and aging conditions.
                                This ensure that each individual knows exactly what to do and how to do it safely and effectively.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Consultation Form Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-card rounded-[3rem] p-8 md:p-16 card-shadow border border-border overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 text-center mb-12">
                            <h2 className="text-4xl font-bold font-display text-foreground mb-4">Book a Consultation</h2>
                            <p className="text-muted-foreground">Take the first step towards personalized clinical exercise care.</p>
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

export default Exercise;
