import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MessageCircle, Mail, Clock, Instagram, Send, AtSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve com sua versão demo.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contacts = [
    {
      icon: MessageCircle,
      title: "Suporte Técnico",
      lines: ["WhatsApp: +55 11 98184-8560", "Tel: 011 5082-2402 / 5081-2079", "suporte@racimed.com.br"],
      hours: "Seg. a Sexta: 8h30 às 18h00",
    },
    {
      icon: Phone,
      title: "Televendas",
      lines: ["011 5572-0888"],
      hours: "Seg. a Sexta: 8h30 às 18h30",
    },
    {
      icon: Mail,
      title: "Financeiro",
      lines: ["011 5082-2402", "Fax: Ramal 22"],
      hours: "Seg. a Sexta: 8h30 às 18h30",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary/20 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
              Contato
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary-foreground mb-6">
              Fale conosco
            </h2>
            <p className="text-secondary-foreground/70 mb-10">
              Estamos prontos para atender você. Entre em contato através de um dos nossos canais.
            </p>

            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-secondary-foreground/5 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-foreground mb-1">
                      {contact.title}
                    </h3>
                    {contact.lines.map((line) => (
                      <p key={line} className="text-secondary-foreground/80 text-sm">
                        {line}
                      </p>
                    ))}
                    <div className="flex items-center gap-1.5 mt-2 text-primary text-sm">
                      <Clock className="w-4 h-4" />
                      {contact.hours}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://instagram.com/racimed"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-3 mt-8 text-secondary-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-medium">Siga-nos no Instagram</span>
            </motion.a>
          </motion.div>

          {/* Demo Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl p-8 shadow-medium">
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Solicite uma versão demo
              </h3>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário e conheça todos os recursos do RaciMED.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome completo
                    </label>
                    <Input
                      required
                      placeholder="Seu nome"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="seu@email.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nome da clínica/consultório
                  </label>
                  <Input
                    placeholder="Nome do estabelecimento"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-primary hover:opacity-90 text-lg gap-2"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Solicitar Demo Grátis
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
