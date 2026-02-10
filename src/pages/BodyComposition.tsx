import { motion } from "framer-motion";
import { Check, ArrowRight, BarChart3, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";



const BodyComposition = () => {
    const navigate = useNavigate();

    const handleBook = (pkg: { amount: any, price: string }) => {
        const title = pkg.amount === "Unlimited" ? "Unlimited Annual Scans" : `${pkg.amount}x Body Scan Session(s)`;
        navigate('/booking', { state: { packageName: title, price: pkg.price } });
    };

    return (
        <main className="pt-20">

            {/* Hero Section */}
            <section className="py-20 md:py-32 subtle-gradient overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 text-[#22c55e] font-bold uppercase tracking-[0.2em] mb-4 text-xs md:text-base text-center justify-center">
                            Assess & Learn
                        </div>
                        <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 md:mb-8 tracking-tight px-2">
                            Stratify Health Risk
                        </h1>
                        <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10">
                            Are you ready to reduce your health risks? Book a 3D body scan with us and extract measurements,
                            shape, body composition, and other insights relevant to your health.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Technology Section */}
            <section className="py-12 md:py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Cutting-Edge Insights</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    A component of our medically supervised, integrated program is the use of 3D body composition scans.
                                    Using infrared light, recreate your body in 3D and track how your shape is changing over time.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-lg uppercase tracking-wider text-primary">The scan extracts dozens of metrics:</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Waist, Hip, Thigh Circumferences",
                                        "Body Fat Percentages",
                                        "Bone Mass Percentage",
                                        "Lean Muscle Mass Percentage",
                                        "Basal Metabolic Rate",
                                        "Cardiovascular Risk",
                                        "Metabolic Disease Risk",
                                        "Respiratory Disease Risk"
                                    ].map((metric) => (
                                        <div key={metric} className="flex items-center gap-3 p-4 rounded-xl bg-accent/30 border border-primary/5">
                                            <Zap className="w-4 h-4 text-primary shrink-0" />
                                            <span className="text-sm font-semibold">{metric}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 hero-gradient rounded-3xl opacity-20 blur-3xl" />
                            <div className="bg-card p-10 md:p-12 rounded-[3rem] card-shadow border border-border relative">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center shadow-lg">
                                        <BarChart3 className="text-white w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-bold font-display leading-none">Styku</h4>
                                        <p className="text-primary font-bold uppercase tracking-widest text-xs mt-1">Advanced Diagnostics</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                    We use this information to track progress on a regular basis to assist with accountability,
                                    goal setting, and body composition changes.
                                </p>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Further, this data can assist in realistic long-term body composition and health status goal setting.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 md:py-24 subtle-gradient">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">Packages</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mt-2">BOOKING SCANS</h2>
                        <p className="text-muted-foreground mt-4 text-sm md:text-base">Includes Interpretation + Detailed Report</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { amount: 1, price: "100" },
                            { amount: 2, price: "160" },
                            { amount: 3, price: "240" },
                            { amount: 4, price: "320" },
                            { amount: 5, price: "400" },
                            { amount: "Unlimited", price: "810", annual: true },
                        ].map((item, idx) => (
                            <motion.div
                                key={item.amount}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <Card className={`h-full border-border/50 hover:border-primary/30 transition-all duration-300 card-shadow group ${item.annual ? 'border-primary/20 bg-primary/5' : ''}`}>
                                    <CardHeader>
                                        <CardTitle className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <span className="text-2xl font-bold font-display">{item.amount} {item.amount === "Unlimited" ? "Annual" : "Scan"}{item.amount === 1 ? "" : item.amount === "Unlimited" ? "s" : "s"}</span>
                                                <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Professional Analysis</p>
                                            </div>
                                            {item.annual && <Badge className="bg-primary hover:bg-primary">Best Value</Badge>}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="py-6">
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-4xl font-bold text-primary">${item.price}</span>
                                            <span className="text-sm font-semibold text-muted-foreground">+ HST</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {["3D Body Scan", "Metabolic Insights", "Interpretation", "Full Report"].map((feat) => (
                                                <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                                    <Check className="w-4 h-4 text-primary shrink-0" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            className="w-full font-bold uppercase tracking-widest group-hover:bg-primary transition-colors"
                                            variant={item.annual ? "default" : "outline"}
                                            onClick={() => handleBook(item)}
                                        >
                                            Book {item.amount}{item.amount === "Unlimited" ? "" : "x"}
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation Form Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 card-shadow border border-border overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 text-center mb-10 md:mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">Book a Consultation</h2>
                            <p className="text-muted-foreground italic text-sm md:text-base px-4">"Unlock your full potential and create a more fulfilling, balanced life."</p>
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


export default BodyComposition;
