import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cpu, 
  Calendar, 
  Cloud, 
  FileText, 
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ApiSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      number: "01",
      icon: Cpu,
      title: "Inteligência Artificial",
      description: "API que integra com softwares de IA em marketing como Salesforce e HubSpot",
      highlight: "IA & Marketing",
    },
    {
      number: "02",
      icon: Calendar,
      title: "Agendamento Online",
      description: "Agendamento de consultas e exames diretamente no site da sua clínica",
      highlight: "Integração Web",
    },
    {
      number: "03",
      icon: Cloud,
      title: "Laudos na Nuvem",
      description: "Laudos disponíveis na nuvem para os pacientes acessarem remotamente",
      highlight: "Cloud Access",
    },
    {
      number: "04",
      icon: FileText,
      title: "Receitas Digitais",
      description: "Receitas emitidas pelo sistema e enviadas ao paciente remotamente",
      highlight: "Envio Remoto",
    },
  ];

  const integrations = [
    { name: "Salesforce", logo: "SF" },
    { name: "HubSpot", logo: "HS" },
    { name: "Marketing AI", logo: "AI" },
  ];

  return (
    <section className="py-24 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6"
          >
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Novidades no RaciMED!</span>
          </motion.div>
          
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mb-6">
            Agora com{" "}
            <span className="text-gradient">API Inteligente</span>
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Impulsione sua clínica com a inovação do RaciMED. 
            Integre com as melhores ferramentas do mercado.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 blur-xl" />
              <div className="relative bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-5">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center relative">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-primary text-xs font-bold flex items-center justify-center border-2 border-primary">
                        {feature.number.split('0')[1]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display font-bold text-xl text-secondary-foreground">
                        {feature.title}
                      </h3>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-secondary-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-secondary-foreground/60 text-sm mb-6 uppercase tracking-wider">
            Integra com as melhores ferramentas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 bg-secondary-foreground/5 backdrop-blur-sm rounded-full px-6 py-3 border border-secondary-foreground/10"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">{integration.logo}</span>
                </div>
                <span className="text-secondary-foreground font-medium">{integration.name}</span>
              </motion.div>
            ))}
          </div>

          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 h-14 px-8 gap-2 text-lg group"
            onClick={() => {
              const contactSection = document.getElementById('contato');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Sparkles className="w-5 h-5" />
            Conhecer a API
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ApiSection;
