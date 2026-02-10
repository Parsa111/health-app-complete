import { motion } from "framer-motion";
import { Award, Users, Heart, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Clients Served" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Heart, value: "98%", label: "Satisfaction Rate" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 hero-gradient rounded-3xl opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl card-shadow">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop"
                  alt="Medical team consultation"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl card-shadow"
              >
                <div className="text-center">
                  <p className="font-display font-bold text-4xl text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Years of<br />Excellence</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Dedicated to Your{" "}
              <span className="text-primary">Health & Wellness</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              At MedicallyFit, we believe that true wellness comes from a holistic approach 
              that combines medical expertise with personalized fitness and nutrition strategies.
            </p>

            <p className="text-muted-foreground mb-8">
              Our team of certified health professionals, including physicians, dietitians, 
              and fitness experts, work together to create customized programs that address 
              your unique health needs and goals. We're committed to helping you achieve 
              lasting results through evidence-based practices.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
