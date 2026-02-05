import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, GraduationCap, Trophy, Heart } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    { icon: GraduationCap, label: "Origem USP", description: "HC-FMUSP" },
    { icon: Building2, label: "30+ Anos", description: "No mercado" },
    { icon: Trophy, label: "100k+", description: "Usuários" },
    { icon: Heart, label: "Brasil", description: "Todo país" },
  ];

  return (
    <section id="sobre" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
              Quem Somos
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Tradição e inovação na gestão médica
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Racional Consultoria</strong> surgiu há mais de 30 anos, 
                formada por médicos e analistas de sistemas que trabalhavam na Faculdade de Medicina da 
                Universidade de São Paulo (HC-FMUSP).
              </p>
              <p>
                Desde o primeiro momento, nosso objetivo foi desenvolver um software de gerenciamento 
                de clínicas e consultórios médicos que auxiliasse os médicos a aumentar a produtividade 
                com praticidade e eficiência.
              </p>
              <p>
                Hoje, o <strong className="text-foreground">RaciMED</strong> é um dos softwares mais completos 
                do mercado, tendo como principal característica a praticidade. Suas telas gráficas de funções 
                simples oferecem ao usuário um ganho significativo de tempo e produtividade.
              </p>
              <p>
                Comercializado nas versões <strong className="text-foreground">STANDARD</strong>, 
                {" "}<strong className="text-foreground">PLUS</strong> e <strong className="text-foreground">ENTERPRISE</strong>, 
                o RaciMED pode ser acessado de qualquer lugar com internet, inclusive via celular e tablets.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <milestone.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="font-display font-bold text-2xl text-foreground mb-1">
                    {milestone.label}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {milestone.description}
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
