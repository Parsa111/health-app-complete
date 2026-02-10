import { motion } from "framer-motion";
import { Check, ArrowRight, Stethoscope, Dumbbell, Apple, Scale, FileText, ClipboardList, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";


const programs = [

    {
        title: "HEALTH ASSESSMENT",
        price: "C$1,599.00",
        tax: "+ Applicable taxes",
        description: "Our team understands that health is multifaceted, which is reflected in our holistic approach. Our initiatives help individuals make real life changes through our wellness and health assessments and subsequent programs.",
        features: [
            "Medical & Musculoskeletal Assessment with a Physician",
            "Nutrition Assessment with a Registered Dietitian",
            "Movement Assessment with a Clinical Exercise Physiologist",
            "Individualized Medical Tests",
            "Body Composition Scan + Report of Results",
            "Comprehensive Health Report outlining your current health status, goals, and how you can achieve these goals.",
            "Medical Physician Review"
        ],
        buttonText: "Book the Health Assessment",
        color: "primary"
    },
    {
        title: "GOLD PACKAGE",
        price: "C$4,390.00",
        tax: "+ Applicable taxes",
        badge: "Most Comprehensive",
        description: "Includes the Health Assessment Package + intensive follow-up support.",
        features: [
            "Nutrition Plan from the Registered Dietitian",
            "Exercise Plan from the Clinical Exercise Physiologist",
            "Nine (9) follow-up sessions with the Registered Dietician",
            "Twenty-four (24) follow-up sessions with the Exercise Physiologist.",
            "Monthly Body Composition Scans",
            "Monthly Visits with the Physician (as needed)"
        ],
        buttonText: "Book the Gold Package",
        color: "secondary"
    },
    {
        title: "SILVER PACKAGE",
        price: "C$3,144.00",
        tax: "+ Applicable taxes",
        description: "Includes the Health Assessment Package + intermediate follow-up support.",
        features: [
            "Nutrition Plan from the Registered Dietitian",
            "Exercise Plan from the Clinical Exercise Physiologist",
            "Four (4) follow-up sessions with the Registered Dietician",
            "Ten (10) follow-up sessions with the Exercise Physiologist.",
            "Monthly Body Composition Scans",
            "Monthly Visits with the Physician (as needed)"
        ],
        buttonText: "Book the Silver Package",
        color: "primary"
    }
];

const smallPackages = [
    {
        title: "REPORT PACKAGE",
        price: "C$399.00",
        tax: "+ Applicable taxes",
        features: [
            "Nutrition Assessment with a Registered Dietitian",
            "Movement Assessment with a Clinical Exercise Physiologist",
            "Body Composition Scan",
            "Registered Dietitian Report",
            "Exercise Physiology Report",
            "Body Composition Report"
        ],
        buttonText: "Book the Report Package"
    },
    {
        title: "PLAN PACKAGE",
        price: "C$775.00",
        tax: "+ Applicable taxes",
        features: [
            "Custom Nutrition Plan",
            "Custom Exercise Plan",
            "Nutrition Assessment with a Registered Dietitian",
            "Movement Assessment with a Clinical Exercise Physiologist",
            "Body Composition Scan",
            "Registered Dietitian Report",
            "Exercise Physiology Report",
            "Movement Assessment with a Clinical Exercise Physiologist",
            "Follow up plan review session with Dietitian",
            "Follow up plan review session with Exercise Physiologist"
        ],
        buttonText: "Book the Plan Package"
    }
];

const Programs = () => {
    const navigate = useNavigate();

    const handleBook = (pkg: { title: string, price: string }) => {
        // Strip C$ and commas for the price string
        const cleanPrice = pkg.price.replace(/[^\d.]/g, '');
        navigate('/booking', { state: { packageName: pkg.title, price: cleanPrice } });
    };

    return (
        <main className="pt-20">

            {/* Hero Section */}
            <section className="py-12 md:py-24 subtle-gradient overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-2xl text-center lg:text-left"
                        >
                            <span className="inline-block text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-4">
                                Medically Fit
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                Our <span className="text-primary">Programs</span>
                            </h1>
                            <p className="text-muted-foreground text-base md:text-xl">
                                Comprehensive, evidence-based wellness programs designed to transform your health through a holistic, team-based approach.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 hero-gradient rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                            <div className="relative rounded-3xl overflow-hidden card-shadow">
                                <img
                                    src="/7.png"
                                    alt="Our Programs"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Programs Grid */}
            <section className="py-12 md:py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className={`h-full flex flex-col relative overflow-hidden card-shadow hover:elevated-shadow transition-all duration-300 border-border/50 ${program.color === 'secondary' ? 'border-primary/20 bg-primary/5' : ''}`}>
                                    {program.badge && (
                                        <div className="absolute top-4 right-4 focus:outline-none">
                                            <Badge variant="secondary" className="bg-primary text-primary-foreground font-bold px-3 py-1">
                                                {program.badge}
                                            </Badge>
                                        </div>
                                    )}
                                    <CardHeader className="pt-10">
                                        <CardTitle className="font-display text-2xl font-bold">{program.title}</CardTitle>
                                        <div className="mt-4">
                                            <span className="text-3xl font-bold text-primary">{program.price}</span>
                                            <p className="text-sm text-muted-foreground mt-1">{program.tax}</p>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-6">
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {program.description}
                                        </p>
                                        <div className="space-y-3">
                                            <p className="font-bold text-xs uppercase tracking-widest text-foreground/70">What You’ll Get</p>
                                            <ul className="space-y-3">
                                                {program.features.map((feature) => (
                                                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-6">
                                        <Button
                                            className="w-full group"
                                            variant={program.color === 'secondary' ? 'secondary' : 'default'}
                                            onClick={() => handleBook({ title: program.title, price: program.price })}
                                        >
                                            {program.buttonText}
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Smaller Packages Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Specialized Packages</h2>
                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {smallPackages.map((pkg, index) => (
                            <motion.div
                                key={pkg.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full border-border/50 card-shadow">
                                    <CardHeader>
                                        <CardTitle className="flex justify-between items-center">
                                            <span className="font-display text-xl font-bold">{pkg.title}</span>
                                            <div className="text-right">
                                                <span className="text-xl font-bold text-primary">{pkg.price}</span>
                                                <p className="text-[10px] text-muted-foreground uppercase">{pkg.tax}</p>
                                            </div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="font-bold text-xs uppercase tracking-widest text-foreground/70 mb-4 font-display">This package includes:</p>
                                        <ul className="grid sm:grid-cols-2 gap-3">
                                            {pkg.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <Check className="w-3 h-3 text-primary shrink-0 mt-1" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                            onClick={() => handleBook({ title: pkg.title, price: pkg.price })}
                                        >
                                            {pkg.buttonText}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Individual Sessions Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-display">INDIVIDUAL SESSIONS</h2>
                    <p className="text-muted-foreground text-center mb-12 md:mb-16 max-w-2xl mx-auto text-sm md:text-base">Pay-as-you-go expertise for those who need focused support from our clinical and dietary experts.</p>

                    <div className="grid lg:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto">
                        {/* Exercise Physiologist */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center">
                                    <Dumbbell className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-display uppercase tracking-tight">EXERCISE PHYSIOLOGIST</h3>
                                    <p className="text-primary font-semibold text-sm">Clinical Movement & Performance</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                                    <h4 className="font-bold text-lg mb-2">Initial Assessment (1 hour)</h4>
                                    <p className="text-sm text-muted-foreground italic mb-3">*Required for new clients*</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-primary">C$150.00</span>
                                        <span className="text-[10px] text-muted-foreground uppercase">+ Applicable taxes</span>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                                    <h4 className="font-bold text-xl mb-4">Packages & Single Sessions</h4>
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center pb-4 border-b border-border/50">
                                            <div>
                                                <p className="font-medium">Single Sessions (45 mins)</p>
                                                <p className="text-xs text-muted-foreground">One-on-one guided clinical exercise</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-lg">C$100.00</p>
                                                <p className="text-[10px] text-muted-foreground uppercase">+ taxes</p>
                                            </div>
                                        </div>

                                        <div className="grid gap-3">
                                            {[
                                                { sessions: 5, price: "625", hst: true },
                                                { sessions: 10, price: "1050", hst: true },
                                                { sessions: 15, price: "1425", hst: true },
                                                { sessions: 20, price: "1750", hst: true },
                                            ].map((pkg) => (
                                                <div key={pkg.sessions} className="flex items-center justify-between p-4 rounded-xl border border-primary/5 bg-accent/30 group hover:border-primary/20 transition-all">
                                                    <div className="flex items-center gap-3">
                                                        <Badge className="bg-primary">{pkg.sessions}x</Badge>
                                                        <p className="text-sm font-medium">Assessment + {pkg.sessions} Sessions</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-primary">${pkg.price} + HST</p>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-8 text-[10px] font-bold uppercase mt-1"
                                                            onClick={() => handleBook({ title: `Assessment + ${pkg.sessions}x EP Sessions`, price: pkg.price })}
                                                        >
                                                            Book {pkg.sessions}x EP
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Registered Dietitian */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 warm-gradient rounded-xl flex items-center justify-center">
                                    <Apple className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-display uppercase tracking-tight">REGISTERED DIETITIAN</h3>
                                    <p className="text-primary font-semibold text-sm">Clinical Nutrition & Metabolic Health</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                                    <h4 className="font-bold text-lg mb-2">Initial Assessment (1 hour)</h4>
                                    <p className="text-sm text-muted-foreground italic mb-3">*Required for new clients*</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-primary">C$150.00</span>
                                        <span className="text-[10px] text-muted-foreground uppercase">per session + Applicable taxes</span>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                                    <h4 className="font-bold text-xl mb-4">Packages & Single Sessions</h4>
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center pb-4 border-b border-border/50">
                                            <div>
                                                <p className="font-medium">Single Sessions (30 mins)</p>
                                                <p className="text-xs text-muted-foreground">Metabolic & nutritional review</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-lg">C$100.00</p>
                                                <p className="text-[10px] text-muted-foreground uppercase">+ taxes</p>
                                            </div>
                                        </div>

                                        <div className="grid gap-3">
                                            {[
                                                { sessions: 3, price: "435", desc: "1x 45min, 2x 30min" },
                                                { sessions: 6, price: "708", desc: "1x 45min, 5x 30min" },
                                                { sessions: 10, price: "1050", desc: "1x 45min, 9x 30min" },
                                            ].map((pkg) => (
                                                <div key={pkg.sessions} className="flex items-center justify-between p-4 rounded-xl border border-primary/5 bg-accent/30 group hover:border-primary/20 transition-all">
                                                    <div className="flex items-center gap-3">
                                                        <Badge className="bg-primary">{pkg.sessions}x</Badge>
                                                        <div>
                                                            <p className="text-sm font-medium">Assessment + {pkg.sessions} Follow-ups</p>
                                                            <p className="text-[10px] text-muted-foreground">{pkg.desc}</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-primary">${pkg.price} + HST</p>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-8 text-[10px] font-bold uppercase mt-1"
                                                            onClick={() => handleBook({ title: `Assessment + ${pkg.sessions}x RD Sessions`, price: pkg.price })}
                                                        >
                                                            Book {pkg.sessions}x RD
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Consultation Form Section */}
            <section className="py-24 subtle-gradient relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-1" />
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 card-shadow border border-white/20"
                    >
                        <div className="text-center mb-12">
                            <Badge className="mb-4 bg-primary px-4 py-1.5 uppercase font-bold tracking-widest text-xs">Start Your Journey</Badge>
                            <h2 className="text-4xl font-bold font-display text-foreground mb-4">Book a Consultation</h2>
                            <p className="text-muted-foreground max-w-lg mx-auto">Fill out the form below and our team will get back to you within 24 hours to schedule your discovery call.</p>
                        </div>

                        <form className="space-y-8">
                            {/* Topic selection */}
                            <div className="space-y-4">
                                <label className="text-sm font-bold uppercase tracking-widest text-foreground/70">Topic (select all that apply) <span className="text-red-500">*</span></label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {["Nutrition", "Exercise", "Health Assessment"].map((topic) => (
                                        <div key={topic} className="flex items-center space-x-2 p-4 rounded-xl border border-border hover:border-primary transition-colors cursor-pointer bg-muted/20">
                                            <input type="checkbox" id={topic} className="w-4 h-4 text-primary rounded border-border focus:ring-primary" />
                                            <label htmlFor={topic} className="text-sm font-medium cursor-pointer">{topic}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Who is this for */}
                            <div className="space-y-4">
                                <label className="text-sm font-bold uppercase tracking-widest text-foreground/70">Who is this for? <span className="text-red-500">*</span></label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {["Corporate", "Individual / It's for me"].map((option) => (
                                        <div key={option} className="flex items-center space-x-2 p-4 rounded-xl border border-border hover:border-primary transition-colors cursor-pointer bg-muted/20">
                                            <input type="radio" name="who" id={option} className="w-4 h-4 text-primary border-border focus:ring-primary" />
                                            <label htmlFor={option} className="text-sm font-medium cursor-pointer">{option}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Type of Discovery Call */}
                            <div className="space-y-4">
                                <label className="text-sm font-bold uppercase tracking-widest text-foreground/70">Type of Discovery Call <span className="text-red-500">*</span></label>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        "Registered Dietitian",
                                        "Clinical Exercise Physiologist",
                                        "Inquiring about a program",
                                        "Other"
                                    ].map((type) => (
                                        <div key={type} className="flex items-center space-x-2 p-4 rounded-xl border border-border hover:border-primary transition-colors cursor-pointer bg-muted/20">
                                            <input type="radio" name="callType" id={type} className="w-4 h-4 text-primary border-border focus:ring-primary" />
                                            <label htmlFor={type} className="text-sm font-medium cursor-pointer">{type}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Other Text Area */}
                            <div className="space-y-4">
                                <label htmlFor="other" className="text-sm font-bold uppercase tracking-widest text-foreground/70">Other</label>
                                <textarea
                                    id="other"
                                    rows={4}
                                    className="w-full p-4 rounded-xl border border-border bg-muted/20 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>

                            <Button size="lg" className="w-full h-14 text-lg font-bold uppercase tracking-widest rounded-2xl shadow-lg shadow-primary/20 group">
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


export default Programs;
