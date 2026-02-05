import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const whatsappNumber = "5511981848560";
  const whatsappDisplay = "+55 11 98184-8560";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o RaciMED.")}`;
  const demoLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de solicitar uma demonstração do RaciMED.")}`;

  const copyNumber = () => {
    navigator.clipboard.writeText(whatsappDisplay);
    setCopied(true);
    toast({
      title: "Número copiado!",
      description: whatsappDisplay,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppClick = (link: string) => {
    // Try to open in new window
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
    
    // If popup was blocked, show the number to copy
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      toast({
        title: "WhatsApp: " + whatsappDisplay,
        description: "Clique para copiar o número ou abra manualmente.",
        action: (
          <button 
            onClick={copyNumber}
            className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm"
          >
            Copiar
          </button>
        ),
      });
    }
  };

  const options = [
    {
      icon: MessageCircle,
      label: "Falar com Suporte",
      action: () => handleWhatsAppClick(whatsappLink),
      color: "bg-primary",
    },
    {
      icon: Phone,
      label: "Solicitar Demo",
      action: () => handleWhatsAppClick(demoLink),
      color: "bg-accent",
    },
    {
      icon: Copy,
      label: copied ? "Copiado!" : "Copiar Número",
      action: copyNumber,
      color: "bg-secondary",
      customIcon: copied ? Check : Copy,
    },
    {
      icon: Mail,
      label: "E-mail",
      action: () => window.open("mailto:suporte@racimed.com.br", '_blank'),
      color: "bg-muted",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3 items-end"
          >
            {/* Phone number display */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card shadow-medium rounded-xl px-4 py-3 text-right"
            >
              <p className="text-xs text-muted-foreground mb-1">WhatsApp</p>
              <p className="text-foreground font-semibold">{whatsappDisplay}</p>
              <p className="text-xs text-muted-foreground mt-1">suporte@racimed.com.br</p>
            </motion.div>

            {options.map((option, index) => {
              const IconComponent = option.customIcon || option.icon;
              return (
                <motion.button
                  key={option.label}
                  onClick={option.action}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="bg-card shadow-medium rounded-lg px-4 py-2 text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {option.label}
                  </span>
                  <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center shadow-medium hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 rounded-full shadow-glow flex items-center justify-center"
        style={{
          background: isOpen 
            ? "hsl(var(--destructive))" 
            : "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-white fill-current"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Animation */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full border-2 border-background" />
          </>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
