import { motion } from "framer-motion";
import { Dumbbell, Apple, Scale, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "exercise",
    icon: Dumbbell,
    title: "Exercise Programs",
    description:
      "Customized workout plans designed by certified trainers and medical professionals to match your fitness level and health goals.",
    features: ["Personal Training", "Group Classes", "Rehabilitation"],
    color: "primary",
    link: "/exercise",
  },
  {
    id: "nutrition",
    icon: Apple,
    title: "Nutrition Coaching",
    description:
      "Science-backed dietary guidance from registered dietitians to fuel your body, boost energy, and achieve sustainable results.",
    features: ["Meal Planning", "Dietary Analysis", "Supplements"],
    color: "secondary",
    link: "/nutrition",
  },
  {
    id: "body-composition",
    icon: Scale,
    title: "Body Composition",
    description:
      "Advanced analysis using state-of-the-art technology to track your progress and optimize your health transformation journey.",
    features: ["DEXA Scans", "Metabolic Testing", "Progress Tracking"],
    color: "primary",
    link: "/body-composition",
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Wellness",
    description:
      "Comprehensive workplace wellness programs designed to boost employee health, productivity, and organizational success.",
    features: ["Team Programs", "Health Screenings", "Wellness Workshops"],
    color: "secondary",
    link: "/corporate",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 subtle-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Health Solutions
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl">
            From personalized fitness programs to corporate wellness initiatives,
            we offer a complete suite of services to help you achieve your health goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 card-shadow hover:elevated-shadow transition-all duration-300 border border-border/50 hover:border-primary/20"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color === "primary" ? "hero-gradient" : "warm-gradient"
                  }`}
              >
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full border border-primary/5"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {service.link.startsWith("/#") ? (
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold transition-colors group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold transition-colors group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


