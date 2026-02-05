import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  FileText,
  ClipboardList,
  Receipt,
  Users,
  BarChart3,
  Database,
  Smartphone,
} from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Calendar,
      title: "Agendamento Flexível",
      description: "Sistema de agendamento integrado ao seu site com confirmação automática.",
    },
    {
      icon: FileText,
      title: "Prontuário Eletrônico",
      description: "Prontuário completo seguindo especificações do CFM, ágil e configurável.",
    },
    {
      icon: ClipboardList,
      title: "Receituário Digital",
      description: "Emissão de receitas especiais com envio remoto para pacientes.",
    },
    {
      icon: Receipt,
      title: "Faturamento TISS",
      description: "Guias de consulta, SADT e envio XML conforme padrões ANS.",
    },
    {
      icon: Users,
      title: "Gestão de Convênios",
      description: "Controle completo de glosas e pagamento de médicos.",
    },
    {
      icon: BarChart3,
      title: "Estatísticas",
      description: "Relatórios detalhados de atendimento e produtividade médica.",
    },
    {
      icon: Database,
      title: "Backup Automático",
      description: "Banco de dados SQL com cópias de segurança diárias na nuvem.",
    },
    {
      icon: Smartphone,
      title: "Acesso Mobile",
      description: "Acesse de qualquer lugar via celular, tablet ou computador.",
    },
  ];

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
            Funcionalidades
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Software completo para organizar rotinas administrativas e otimizar o desempenho profissional do médico.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
