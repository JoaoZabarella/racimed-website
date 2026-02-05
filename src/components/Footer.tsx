import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold">R</span>
            </div>
            <span className="font-display font-bold text-xl text-secondary-foreground">
              RaciMED
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary-foreground/60 text-sm text-center"
          >
            © {currentYear} Racional Consultoria. Todos os direitos reservados.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-1.5 text-secondary-foreground/60 text-sm"
          >
            Feito com <Heart className="w-4 h-4 text-primary" /> para a saúde brasileira
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
