import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Monitor, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="suporte" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
            Suporte Técnico
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Atendimento remoto especializado
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Baixe a versão executável do TeamViewer sem necessitar de instalação. 
            Exclusiva para nosso canal de atendimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 shadow-soft text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">
              TeamViewer para Windows
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Versão portátil para sistemas Windows
            </p>
            <Button
              asChild
              className="w-full h-12 bg-gradient-primary hover:opacity-90 gap-2"
            >
              <a
                href="https://www.racimed.com.br/team/TeamViewerQS_pt.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5" />
                Baixar para Windows
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-3xl p-8 shadow-soft text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
              <Apple className="w-10 h-10 text-secondary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">
              TeamViewer para macOS
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Versão portátil para sistemas Mac
            </p>
            <Button
              asChild
              variant="secondary"
              className="w-full h-12 gap-2"
            >
              <a
                href="https://www.racimed.com.br/team/TeamViewerQS.dmg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5" />
                Baixar para macOS
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
