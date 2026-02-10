import { motion } from "framer-motion";
import { Mail, Award, GraduationCap } from "lucide-react";



const teamMembers = [
  {
    name: "Sarah Power",
    role: "Clinic Director",
    credentials: "HFFC-CEP, HFFC-CPT, BaKin, MFSc, MEd, Medically Fit",
    email: "sarah@medicallyfit.ca",
    image: "/2.PNG",
    bio: "Sarah is an Exercise Physiologist from the GTA who has made it her mission to help as many people as possible to live happier and healthier lives. Sarah obtained her Kinesiology degree from York University while playing for the York University’s Women’s Ice Hockey team, followed by her Master’s of Fitness Science and Master’s of Education. Sarah uses her multitasking and time management skills acting as Clinical Director coordinating Medically Fit’s events, corporate partnerships, and day-to-day functions. Sarah has worked to use her education and various Strength and Conditioning placements to help everyone she can, whether it be for sport or everyday living, she is skilled at creating programs for any population.",
    extendedBio: "With her background in sport, Sarah knows first hand what it is like to develop a custom routine that works for individual’s needs and goals. Playing Ice Hockey at a University level, Sarah was immersed in learning, from the smallest of details to the large patterns of movement that effects people’s lives. Sarah continues to maintain her activity by being a member of a Professional Women’s Roller Hockey Team Reve as well as Team Canada’s Roller Hockey Team competing around the globe once a year.",
  },
  {
    name: "Owen Gilhula",
    role: "Clinical Exercise Physiologist",
    credentials: "HFFC-CEP, Medically Fit",
    email: "owen@medicallyfit.ca",
    image: "/3.jpeg",
    bio: "Owen is a Certified Personal Trainer from Stratford, Ontario. As a Kinesiology student, I am passionate about understanding the human body, movement, and optimizing performance. My academic pursuits at York University have allowed me to dive deeper into exercise science, biomechanics, and injury prevention. Combining my theoretical knowledge with practical experience, I am equipped to develop personalized training programs that enhance strength, conditioning, and overall health and performance.",
    extendedBio: "Owen has had a successful hockey career in the Ontario Hockey League, and continues to play for York University Men’s Hockey Team. Playing at an elite level has ignited his passion for being prepared physically and mentally on and off the ice. Owen is very excited to be a part of the team at MedicallyFit and is looking forward to supporting others to reach their full potential.",
  },
  {
    name: "Lizah Reyes",
    role: "Registered Dietitian",
    credentials: "MPH, Medically Fit",
    email: "lizah@medicallyfit.ca",
    image: "/4.png",
    bio: "Lizah Reyes is a Registered Dietitian who completed her Masters of Public Health in Nutrition and Dietetics from the University of Toronto.",
    extendedBio: "Her unique experience in the public and private sectors drive her professional interests to prevent disease, both at the individual and population levels. With placements in cardiac rehab, dialysis, cancer care and geriatric rehab units, Lizah has worked with a variety of patients to educate and support them with their nutrition goals while managing chronic disease. Lizah’s practice is based on developing positive relationships with food to help patients build sustainable healthy eating patterns for life. She is passionate about trying new cuisines and flavours, but she also enjoys staying active through early morning weight training and inviting friends to group fitness classes to promote fun ways of movement.",
  },
  {
    name: "Carlyne Remedios",
    role: "Registered Dietitian",
    credentials: "CDO, RD, MSc Dietetics, Medically Fit",
    email: "carlyne@medicallyfit.ca",
    image: "/5.jpeg",
    bio: "Carlyne Remedios is a Registered Dietitian with over a decade of experience in the field. With a Master’s degree in Dietetics from Deakin University, Melbourne, she brings a wealth of expertise, particularly in the area of bariatric nutrition. As the lead author of ‘Bariatric Nutrition Guidelines for the Indian Population’, Carlyne has contributed significantly to advancing nutritional practices in this specialized field.",
    extendedBio: "Her expertise spans a wide range of conditions, including obesity, metabolic diseases, digestive disorders, and pre- and post-surgical care. Carlyne’s contributions to the field are well-documented, with publications in online platforms, print media, and peer-reviewed journals. Having lived and studied across the globe, Carlyne excels in offering personalized nutrition advice tailored to diverse cultural backgrounds. She is committed to moving away from the one-size-fits-all approach and short-term fixes, focusing instead on empowering individuals to make informed choices about their health, food, and lifestyle. Carlyne’s mission is to inspire sustainable, long-term health changes that truly align with each individual’s unique needs and goals.",
  },
  {
    name: "Taly Fleischer",
    role: "Life Coach",
    credentials: "Executive Coach",
    email: null,
    image: "/6.jpeg",
    bio: "Meet Taly Fleischer, an executive coach who helps high-performers break through the mental barriers limiting their impact.",
    extendedBio: "She helps wellness-focused professionals channel their fitness discipline into becoming more influential and confident leaders - developing stronger executive presence, better team dynamics, and authentic leadership. You are already committed to transforming your body; now discover how to elevate your leadership impact using the same growth mindset.",
  },
];

const AboutUs = () => {
  return (
    <main className="pt-20">

      {/* Hero Section */}
      <section className="py-16 md:py-24 subtle-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet the <span className="text-primary">Medically Fit</span> Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Our team of dedicated healthcare professionals is committed to helping you
              achieve optimal health through personalized, evidence-based care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 hero-gradient rounded-3xl opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl card-shadow">
                <img
                  src="/1.jpg"
                  alt="Dr. Leslie Housefather"
                  className="w-full h-[500px] object-cover object-top"
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
                  <p className="font-display font-bold text-4xl text-primary">25+</p>
                  <p className="text-sm text-muted-foreground">Years of<br />Experience</p>
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Founder & Owner
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Dr. Leslie Housefather, MDCM
              </h2>

              <p className="text-primary font-medium mb-6">
                Owner, & Founder: Medically Fit | Family Physician | Clinical Trials Sub-Investigator
              </p>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dr. Leslie Housefather is a Toronto-based physician and founder of Medically Fit,
                  a unique healthcare program focused on preventative health. With over 25 years of
                  experience as a family and emergency medicine physician, Dr. Housefather brings a
                  wealth of experience diagnosing and treating patients of all ages for various
                  illnesses and diseases. His certifications include Pediatric Advanced Life Support,
                  Advanced Cardiac Life Support, and Advanced Trauma Life Support. With Medically Fit,
                  he channels this knowledge to help patients develop a comprehensive treatment plan
                  that integrates diet, exercise, and any necessary medical interventions.
                </p>

                <p>
                  Dr Leslie Housefather has spent his summers as a physician for Medical Inspections at
                  two Canadian Military and Cadets Canada bases and received a Medal of Excellence
                  from General W.J. Natynczyk for his work in 2011. His other achievements include
                  developing a streamlined triage system for Emergency Medicine in Quebec hospitals
                  and training physicians, nurses, and respiratory therapists in Advanced Trauma Life
                  Support. His work has been published in several clinical research studies and he
                  continues to act as a sub-investigator for selected clinical trials in Toronto, Ontario.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["PALS", "ACLS", "ATLS", "Emergency Medicine", "Clinical Research"].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 bg-accent text-accent-foreground text-sm rounded-full font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 subtle-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Expert Professionals Dedicated to Your Health
            </h2>
            <p className="text-muted-foreground text-lg">
              Our multidisciplinary team combines expertise in exercise physiology,
              nutrition, and wellness coaching to provide comprehensive care.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden card-shadow hover:elevated-shadow transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-primary-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{member.credentials}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>

                  <p className="text-muted-foreground text-sm mb-4">
                    {member.extendedBio}
                  </p>

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hero-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-primary-foreground/90 text-lg md:text-xl">
                At Medically Fit, we believe in a holistic approach to health that combines
                medical expertise with personalized fitness and nutrition strategies. Our goal
                is to empower individuals to take control of their health through evidence-based
                practices and sustainable lifestyle changes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>

  );
};

export default AboutUs;
