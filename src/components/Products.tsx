import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductDetailsDialog from "./ProductDetailsDialog";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      name: "Standard",
      description: "Ideal para pequenos consultórios",
      features: [
        "Prontuário Eletrônico",
        "Agenda de Pacientes",
        "Receituário Digital",
        "Backup Diário Automático",
        "Suporte Técnico",
      ],
      popular: false,
    },
    {
      name: "Plus",
      description: "Para clínicas que fazem faturamento de convênios",
      features: [
        "Tudo do Standard +",
        "Faturamento TISS",
        "Guias de Consulta e SADT",
        "Envio XML para ANS",
        "Controle de Glosas",
        "Pagamento de Médicos",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "O RaciMED mais completo",
      features: [
        "Tudo do Plus +",
        "Contas a Pagar/Receber",
        "Fluxo de Caixa",
        "Controle de Estoque",
        "Estatísticas Avançadas",
        "Cálculo de Produtividade",
        "Múltiplas Unidades",
      ],
      popular: false,
    },
  ];

  return (
    <section id="produtos" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
            Nossos Produtos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Escolha a versão ideal para você
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Programa renomado e testado por mais de 20 anos, presente em milhares de clínicas e consultórios médicos pelo país.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 ${product.popular
                ? "bg-gradient-primary shadow-glow"
                : "bg-card shadow-soft"
                }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-sm font-medium px-4 py-1.5 rounded-full shadow-medium">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`font-display font-bold text-2xl mb-2 ${product.popular ? "text-primary-foreground" : "text-foreground"
                    }`}
                >
                  {product.name}
                </h3>
                <p
                  className={`text-sm ${product.popular
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                    }`}
                >
                  {product.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 ${product.popular
                      ? "text-primary-foreground"
                      : "text-foreground"
                      }`}
                  >
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${product.popular ? "text-primary-foreground" : "text-primary"
                        }`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => setSelectedProduct(product.name)}
                className={`w-full h-12 font-medium ${product.popular
                  ? "bg-secondary hover:bg-secondary/90"
                  : "bg-gradient-primary hover:opacity-90"
                  }`}
              >
                Saiba Mais
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Details Dialog */}
      <ProductDetailsDialog
        open={selectedProduct !== null}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
        productName={selectedProduct || ""}
      />
    </section>
  );
};

export default Products;
