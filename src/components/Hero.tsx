import { motion } from "framer-motion";
import { Cloud, Shield, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  const features = [
    { icon: Cloud, text: "Instalado em servidor na nuvem" },
    { icon: Shield, text: "Total segurança de dados" },
    { icon: Award, text: "Todas as certificações" },
    { icon: CheckCircle, text: "Livre de vírus e ataques" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="RaciMED - Software Médico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              <span className="text-primary-foreground text-sm font-medium">
                +30 anos de excelência no mercado
              </span>
            </motion.div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Um Software{" "}
              <span className="text-gradient">Inteligente</span> e Eficaz
              <br />
              <span className="text-primary">Agora na Nuvem</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              O RaciMED é o software mais completo para gestão de clínicas e consultórios médicos.
              Mais de 100.000 usuários confiam em nossa solução em todo o Brasil.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2 h-14 px-8 text-lg"
              >
                Solicitar Demo Grátis
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/70 text-primary hover:bg-primary/10 hover:border-primary h-14 px-8 font-semibold"
              >
                Falar com Consultor
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3"
                >
                  <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-primary-foreground text-sm font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-3xl p-8 shadow-medium">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="font-display font-bold text-4xl text-primary mb-2">30+</div>
                  <div className="text-muted-foreground text-sm">Anos no mercado</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="font-display font-bold text-4xl text-primary mb-2">100k+</div>
                  <div className="text-muted-foreground text-sm">Usuários ativos</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="font-display font-bold text-4xl text-primary mb-2">CFM</div>
                  <div className="text-muted-foreground text-sm">Certificado</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="font-display font-bold text-4xl text-primary mb-2">LGPD</div>
                  <div className="text-muted-foreground text-sm">Conforme</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
