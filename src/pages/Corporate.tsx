import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingUp, Stethoscope, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Corporate = () => {
    return (
        <main className="pt-20">

            {/* Hero Section */}
            <section className="py-16 md:py-24 subtle-gradient overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                            Employer of Choice
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Corporate Healthcare & <span className="text-primary">Wellness Solutions</span>
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl">
                            A healthy company starts with healthy employees. Optimize your workforce with our comprehensive solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Benefits & Strategy */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">Strengthen your Team & Business</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Strengthen your Team",
                                        "Reduce Sick Days",
                                        "Increase Productivity",
                                        "Improve Employee Retention",
                                        "Transform YOUR Corporate Culture",
                                    ].map((benefit) => (
                                        <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-accent/50 border border-primary/5 group hover:border-primary/20 transition-all">
                                            <TrendingUp className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                                            <span className="font-medium text-foreground">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative p-8 rounded-3xl bg-secondary/30 border border-primary/10 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <TrendingUp className="w-20 h-20 text-primary" />
                                </div>
                                <p className="text-foreground text-lg leading-relaxed relative z-10">
                                    Build your company’s own customized wellness package with Nutrition, Medical, and Exercise, options! We ensure your employees obtain a corporate healthcare program that suits their specific needs and health goals.
                                </p>
                                <Button className="mt-8 group">
                                    Learn More
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Right Column: Services & Coaching */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            {/* Services Card */}
                            <div className="bg-card p-8 md:p-10 rounded-[2.5rem] card-shadow border border-border relative">
                                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8 uppercase tracking-wide">
                                    <Stethoscope className="w-4 h-4" />
                                    Our Services
                                </div>
                                <ul className="space-y-5">
                                    {[
                                        "Medical Assessment & Risk Factor Analysis",
                                        "Physical Capacity Assessment & Exercise Plan Implementation",
                                        "Nutritional Assessments & Diet Plan Development",
                                        "Body Composition Scan & Interpretation",
                                        "Customized Bloodwork Tests",
                                        "Stress Echocardiogram",
                                        "Ongoing Care with an Exercise Physiologist",
                                        "Ongoing Care with a Registered Dietitian",
                                    ].map((service) => (
                                        <li key={service} className="flex items-start gap-4 text-muted-foreground group">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                                                <Check className="w-3 h-3 text-primary" />
                                            </div>
                                            <span className="text-base font-medium text-foreground/90">{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Life Coaching Card */}
                            <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-[2.5rem] card-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Sparkles className="w-7 h-7" />
                                        Life Coaching
                                    </h3>
                                    <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                                        If you're looking to gain more clarity and direction in your life, our professional life coach can be
                                        a supportive partner on your personal growth journey. Specializing in goal-setting, life transitions,
                                        and overall well-being, life coaches work with individuals to define their objectives and overcome challenges.
                                    </p>
                                    <p className="text-primary-foreground/90 text-lg leading-relaxed">
                                        By addressing both personal and professional hurdles, they help you unlock your full potential and
                                        create a more fulfilling, balanced life.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>

    );
};


export default Corporate;
