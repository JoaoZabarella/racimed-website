import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import racmedLogo from "@/assets/logo-racimed.png";

interface ProductDetailsDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    productName: string;
}

const ProductDetailsDialog = ({ open, onOpenChange, productName }: ProductDetailsDialogProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Dados do plano Standard
    const standardFeatures = [
        {
            title: "Módulo Agenda",
            features: [
                { text: "Controle de retorno e consultas", highlight: false },
                { text: "Estatísticas diária, mensal de todos os atendimentos", highlight: false },
                { text: "Agendamento por profissionais", highlight: false },
                { text: "Divididos por: Médicos, Convênios", highlight: false },
                { text: "Agendamento por exames, salas, equipamento", highlight: false },
                { text: "Tipos de atendimento (+VEZ, Consultas, Retornos, Exames)", highlight: false },
                { text: "Visão mensal da agenda do profissional", highlight: false },
                { text: "Funcionários (produção)", highlight: false },
                { text: "Controle de confirmação de consulta", highlight: false },
                { text: "Estudo de tempo, média de tempo que os pacientes ficam aguardando para serem atendidos", highlight: false },
                { text: "Agendamento simultâneo entre profissionais", highlight: false },
                { text: "Na recepção", highlight: false },
                { text: "Horários totalmente customizáveis", highlight: false },
                { text: "Na sala de atendimento (consultório)", highlight: false },
                { text: "Histórico de marcações", highlight: false },
            ],
        },
        {
            title: "Cadastros e Controles",
            features: [
                { text: "Cadastro de Pacientes", highlight: true },
                { text: "Cadastro completo com fotos", highlight: false },
                { text: "Acesso fácil ao paciente através e diversas chaves de pesquisa", highlight: false },
                { text: "Possibilidade de filtros para relatórios, etiquetas e envio de e-mail", highlight: false },
                { text: "Cadastro de Convênios e Planos", highlight: true },
                { text: "Mala Direta (Marketing)", highlight: true },
                { text: "Agenda de Contatos", highlight: true },
                { text: "Quadro de Aviso Geral", highlight: true },
                { text: "Sistema de tarefas por usuário ou grupo de usuários", highlight: true },
                { text: "Controle de Acesso por Usuário", highlight: true },
                { text: "Log de controle de todas as movimentações de dados conformidade LGBIS/CFM", highlight: false },
                { text: "Pesquisa por usuário de tudo que ele realizou e fez no sistema por períodos", highlight: false },
                { text: "Faturamento de Particulares", highlight: true },
                { text: "Controle de cheques", highlight: false },
                { text: "Saldo de vendor", highlight: false },
                { text: "Histórico de lançamentos", highlight: false },
                { text: "Saldo de contas em aberto", highlight: false },
                { text: "Conferência de caixa diário", highlight: false },
            ],
        },
        {
            title: "Ficha Clínica (Prontuário Eletrônico)",
            subtitle: "Em conformidade com o padrão da resolução pelo SBIS/CFM",
            features: [
                { text: "Dados dos atendimento armazenados em formato digital para fácil acesso", highlight: false },
                { text: "Acompanhamento de peso(ões) em formato gráfico", highlight: false },
                { text: "Dicionário de perguntas e respostas (anamnese), preenchimento rápido", highlight: false },
                { text: "Acompanhamento de pré-natal (obstetrícia)", highlight: false },
                { text: "Armazenamento de imagens dos pacientes (banco de imagens)", highlight: false },
                { text: "Cadastro internacional de doenças (CID)", highlight: false },
                { text: "Levantamento estatístico dos dados armazenados, inclusive de campos textuais", highlight: false },
                { text: "Controle de vacinas (pediatria)", highlight: false },
                { text: "Pedidos de exames", highlight: false },
                { text: "Atestados", highlight: false },
                { text: "Laudos", highlight: false },
                { text: "Emissão de guias de pedidos de exames (SADT), padrão TISS", highlight: false },
                { text: "Emissão de guias de solicitação de internação padrão TISS", highlight: false },
                { text: "Tabelas auxiliares para armazenamento de resultados de exames, gráficos de acompanhamento dos dados (IMOV)", highlight: false },
                { text: "Dicionário de perguntas e respostas (anamnese)", highlight: false },
                { text: "Gráficos de avaliação de peso e altura (padrão NCHS/Brasil e outros", highlight: false },
            ],
        },
    ];

    // Dados do plano Plus
    const plusFeatures = [
        {
            title: "Módulo Agenda",
            features: [
                { text: "Controle de retorno e consultas", highlight: false },
                { text: "Estatísticas diária, mensal de todos os atendimentos", highlight: false },
                { text: "Agendamento por profissionais", highlight: false },
                { text: "Divididos por: Médicos, Convênios", highlight: false },
                { text: "Agendamento por exames, salas, equipamento", highlight: false },
                { text: "Tipos de atendimento (+VEZ, Consultas, Retornos, Exames)", highlight: false },
                { text: "Visão mensal da agenda do profissional", highlight: false },
                { text: "Funcionários (produção)", highlight: false },
                { text: "Controle de confirmação de consulta", highlight: false },
                { text: "Estudo de tempo, média de tempo que os pacientes ficam aguardando para serem atendidos", highlight: false },
                { text: "Agendamento simultâneo entre profissionais", highlight: false },
                { text: "Na recepção", highlight: false },
                { text: "Horários totalmente customizáveis", highlight: false },
                { text: "Na sala de atendimento (consultório)", highlight: false },
                { text: "Histórico de marcações", highlight: false },
            ],
        },
        {
            title: "Cadastros e Controles",
            features: [
                { text: "Cadastro de Pacientes", highlight: true },
                { text: "Cadastro completo com fotos", highlight: false },
                { text: "Acesso fácil ao paciente através e diversas chaves de pesquisa", highlight: false },
                { text: "Possibilidade de filtros para relatórios, etiquetas e envio de e-mail", highlight: false },
                { text: "Cadastro de Convênios e Planos", highlight: true },
                { text: "Mala Direta (Marketing)", highlight: true },
                { text: "Agenda de Contatos", highlight: true },
                { text: "Quadro de Aviso Geral", highlight: true },
                { text: "Sistema de tarefas por usuário ou grupo de usuários", highlight: true },
                { text: "Controle de Acesso por Usuário", highlight: true },
                { text: "Log de controle de todas as movimentações de dados conformidade LGBIS/CFM", highlight: false },
                { text: "Pesquisa por usuário de tudo que ele realizou e fez no sistema por períodos", highlight: false },
            ],
        },
        {
            title: "Ficha Clínica (Prontuário Eletrônico)",
            subtitle: "Em conformidade com o padrão da resolução pelo SBIS/CFM",
            features: [
                { text: "Dados dos atendimento armazenados em formato digital para fácil acesso", highlight: false },
                { text: "Acompanhamento de peso(ões) em formato gráfico", highlight: false },
                { text: "Dicionário de perguntas e respostas (anamnese), preenchimento rápido", highlight: false },
                { text: "Acompanhamento de pré-natal (obstetrícia)", highlight: false },
                { text: "Armazenamento de imagens dos pacientes (banco de imagens)", highlight: false },
                { text: "Cadastro internacional de doenças (CID)", highlight: false },
                { text: "Levantamento estatístico dos dados armazenados, inclusive de campos textuais", highlight: false },
                { text: "Controle de vacinas (pediatria)", highlight: false },
                { text: "Pedidos de exames", highlight: false },
                { text: "Atestados", highlight: false },
                { text: "Laudos", highlight: false },
                { text: "Emissão de guias de pedidos de exames (SADT), padrão TISS", highlight: false },
                { text: "Emissão de guias de solicitação de internação padrão TISS", highlight: false },
                { text: "Tabelas auxiliares para armazenamento de resultados de exames, gráficos de acompanhamento dos dados (IMOV)", highlight: false },
                { text: "Dicionário de perguntas e respostas (anamnese)", highlight: false },
                { text: "Gráficos de avaliação de peso e altura (padrão NCHS/Brasil e outros", highlight: false },
            ],
        },
        {
            title: "Faturamento de Particulares",
            features: [
                { text: "Controle de cheques", highlight: false },
                { text: "Saldo de vendor", highlight: false },
                { text: "Histórico de lançamentos", highlight: false },
                { text: "Saldo de contas em aberto", highlight: false },
                { text: "Conferência de caixa diário", highlight: false },
                { text: "Controle de recibos e emissão de DMED", highlight: false },
            ],
        },
        {
            title: "Faturamento de Convênios",
            features: [
                { text: "Tabelas de procedimentos inclusas", highlight: false },
                { text: "Lançamento de HM, MAT/MED e taxas", highlight: false },
                { text: "Faturamento de cirurgias (cálculos de anestesistas, auxiliares e instrumentador)", highlight: false },
                { text: "Configuração de valores de acordo com as especificações de contrato com o convênio", highlight: false },
                { text: "Multi-empresas (vários médicos com contratos separados)", highlight: false },
                { text: "Geração de arquivo XML/TISS/TISSNET", highlight: false },
                { text: "Atualização automática com tabelas SIMPRO (opcional)", highlight: false },
                { text: "Trabalha com a nova tabela ANS/TUSS (tabela inclusa)", highlight: false },
            ],
        },
        {
            title: "Controle de Glosas e Repasse",
            features: [
                { text: "Controle de Glosas por Lote Enviado", highlight: false },
                { text: "Glosa por conta e/ou por item da conta", highlight: false },
                { text: "Leitura de XML/TISS de demonstrativo de contas", highlight: false },
                { text: "Controle de contas pagas, não pagas e em aberto", highlight: false },
                { text: "Recurso de glosa digital segundo o padrão XML", highlight: false },
                { text: "Repasse Financeiro (Acerto Médico)", highlight: true },
                { text: "Repasse para profissionais com percentuais", highlight: false },
                { text: "Acerto por data de atendimento ou recebimento do convênio", highlight: false },
                { text: "Configuração de percentuais por convênio e/ou códigos de procedimento", highlight: false },
            ],
        },
    ];

    // Dados do plano Enterprise
    const enterpriseFeatures = [
        {
            title: "Módulo Agenda",
            features: [
                { text: "Controle de retorno e consultas", highlight: false },
                { text: "Estatísticas diária, mensal de todos os atendimentos", highlight: false },
                { text: "Agendamento por profissionais", highlight: false },
                { text: "Divididos por: Médicos, Convênios", highlight: false },
                { text: "Agendamento por exames, salas, equipamento", highlight: false },
                { text: "Tipos de atendimento (+VEZ, Consultas, Retornos, Exames)", highlight: false },
                { text: "Visão mensal da agenda do profissional", highlight: false },
                { text: "Funcionários (produção)", highlight: false },
                { text: "Controle de confirmação de consulta", highlight: false },
                { text: "Estudo de tempo, média de tempo que os pacientes ficam aguardando para serem atendidos", highlight: false },
                { text: "Agendamento simultâneo entre profissionais", highlight: false },
                { text: "Na recepção", highlight: false },
                { text: "Horários totalmente customizáveis", highlight: false },
                { text: "Na sala de atendimento (consultório)", highlight: false },
                { text: "Histórico de marcações", highlight: false },
            ],
        },
        {
            title: "Cadastros e Controles",
            features: [
                { text: "Cadastro de Pacientes", highlight: true },
                { text: "Cadastro completo com fotos", highlight: false },
                { text: "Acesso fácil ao paciente através e diversas chaves de pesquisa", highlight: false },
                { text: "Possibilidade de filtros para relatórios, etiquetas e envio de e-mail", highlight: false },
                { text: "Cadastro de Convênios e Planos", highlight: true },
                { text: "Mala Direta (Marketing)", highlight: true },
                { text: "Agenda de Contatos", highlight: true },
                { text: "Quadro de Aviso Geral", highlight: true },
                { text: "Sistema de tarefas por usuário ou grupo de usuários", highlight: true },
                { text: "Controle de Acesso por Usuário", highlight: true },
                { text: "Log de controle de todas as movimentações de dados conformidade LGBIS/CFM", highlight: false },
                { text: "Pesquisa por usuário de tudo que ele realizou e fez no sistema por períodos", highlight: false },
                { text: "Faturamento de Particulares", highlight: true },
                { text: "Controle de cheques", highlight: false },
                { text: "Saldo de vendor", highlight: false },
                { text: "Histórico de lançamentos", highlight: false },
                { text: "Saldo de contas em aberto", highlight: false },
                { text: "Conferência de caixa diário", highlight: false },
            ],
        },
        {
            title: "Ficha Clínica (Prontuário Eletrônico)",
            subtitle: "Em conformidade com o padrão da resolução pelo SBIS/CFM",
            features: [
                { text: "Dados dos atendimento armazenados em formato cronológico para fácil acesso", highlight: false },
                { text: "Acompanhamento de peso(ões) em formato gráfico", highlight: false },
                { text: "Dicionário de perguntas e respostas (anamnese), preenchimento rápido", highlight: false },
                { text: "Acompanhamento de pré-natal (obstetrícia)", highlight: false },
                { text: "Armazenamento de imagens dos pacientes (banco de imagens)", highlight: false },
                { text: "Cadastro internacional de doenças (CID)", highlight: false },
                { text: "Levantamento estatístico dos dados armazenados, inclusive de campos textuais", highlight: false },
                { text: "Controle de vacinas (pediatria)", highlight: false },
                { text: "Pedidos de exames", highlight: false },
                { text: "Atestados", highlight: false },
                { text: "Laudos", highlight: false },
                { text: "Emissão de guias de pedidos de exames (SADT), padrão TISS", highlight: false },
                { text: "Emissão de guias de solicitação de internação padrão TISS", highlight: false },
                { text: "Tabelas auxiliares para armazenamento de resultados de exames, gráficos de acompanhamento dos dados (IMOV)", highlight: false },
                { text: "Dicionário de perguntas e respostas (anamnese)", highlight: false },
                { text: "Gráficos de avaliação de peso e altura (padrão NCHS/Brasil e outros)", highlight: false },
            ],
        },
        {
            title: "Faturamento de Particulares",
            features: [
                { text: "Controle de cheques", highlight: false },
                { text: "Saldo de vendor", highlight: false },
                { text: "Histórico de lançamentos", highlight: false },
                { text: "Saldo de contas em aberto", highlight: false },
                { text: "Conferência de caixa diário", highlight: false },
                { text: "Controle de recibos e emissão de DMED", highlight: false },
            ],
        },
        {
            title: "Faturamento de Convênios",
            features: [
                { text: "Tabelas de procedimentos inclusas", highlight: false },
                { text: "Lançamento de HM, MAT/MED e taxas", highlight: false },
                { text: "Faturamento de cirurgias (cálculos de anestesistas, auxiliares e instrumentador)", highlight: false },
                { text: "Configuração de valores de acordo com as especificações de contrato com o convênio", highlight: false },
                { text: "Multi-empresas (vários médicos com contratos separados)", highlight: false },
                { text: "Geração de arquivo XML/TISS/TISSNET", highlight: false },
                { text: "Atualização automática com tabelas SIMPRO (opcional)", highlight: false },
                { text: "Trabalha com a nova tabela ANS/TUSS (tabela inclusa)", highlight: false },
            ],
        },
        {
            title: "Controle de Glosas e Repasse",
            features: [
                { text: "Controle de Glosas por Lote Enviado", highlight: false },
                { text: "Glosa por conta e/ou por item da conta", highlight: false },
                { text: "Leitura de XML/TISS de demonstrativo de contas", highlight: false },
                { text: "Controle de contas pagas, não pagas e em aberto", highlight: false },
                { text: "Recurso de glosa digital segundo o padrão XML", highlight: false },
                { text: "Repasse Financeiro (Acerto Médico)", highlight: true },
                { text: "Repasse para profissionais com percentuais", highlight: false },
                { text: "Acerto por data de atendimento ou recebimento do convênio", highlight: false },
                { text: "Configuração de percentuais por convênio e/ou códigos de procedimento", highlight: false },
            ],
        },
    ];

    // Seleciona as features baseado no produto
    const features = productName === "Plus"
        ? plusFeatures
        : productName === "Standard"
            ? standardFeatures
            : productName === "Enterprise"
                ? enterpriseFeatures
                : [];
    const productDescription = productName === "Plus"
        ? "Para clínicas que fazem faturamento de convênios"
        : productName === "Standard"
            ? "Ideal para pequenos consultórios"
            : productName === "Enterprise"
                ? "Solução completa para grandes redes de clínicas"
                : "";

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    };

    // Reset slide when product changes
    useState(() => {
        setCurrentSlide(0);
    });

    if (!["Plus", "Standard", "Enterprise"].includes(productName)) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Detalhes do {productName}</DialogTitle>
                    </DialogHeader>
                    <p className="text-muted-foreground">
                        Informações detalhadas em breve. Entre em contato para mais informações.
                    </p>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 overflow-hidden">
                {/* Header */}
                <div className="relative bg-gradient-primary p-8 pb-12">
                    <div className="text-center">
                        <img
                            src={racmedLogo}
                            alt="RaciMED"
                            className="h-20 mx-auto mb-4 drop-shadow-lg"
                        />
                        <h2 className="font-display font-bold text-3xl text-white mb-2">
                            Versão {productName}
                        </h2>
                        <p className="text-white/90 text-sm">
                            {productDescription}
                        </p>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative bg-background h-[550px]">
                    {/* Slide Indicators */}
                    <div className="flex justify-center gap-2 py-4 bg-muted/30">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all ${index === currentSlide
                                    ? "w-8 bg-primary"
                                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Fixed Navigation Buttons - At specific pixel height from top */}
                    <div className="absolute top-[275px] left-0 right-0 flex justify-between px-2 pointer-events-none z-10">
                        <Button
                            onClick={prevSlide}
                            size="icon"
                            variant="secondary"
                            className="pointer-events-auto rounded-full shadow-lg hover:scale-110 transition-transform"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            onClick={nextSlide}
                            size="icon"
                            variant="secondary"
                            className="pointer-events-auto rounded-full shadow-lg hover:scale-110 transition-transform"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Slides */}
                    <div className="relative overflow-y-auto overflow-x-hidden px-8 pb-8 h-[490px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(_, info) => {
                                    // Swipe threshold: 50px
                                    if (info.offset.x > 50) {
                                        prevSlide();
                                    } else if (info.offset.x < -50) {
                                        nextSlide();
                                    }
                                }}
                                className="space-y-6 cursor-grab active:cursor-grabbing"
                            >
                                {/* Title */}
                                <div>
                                    <h3 className="font-display font-bold text-2xl text-foreground mb-2 flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-bold text-sm">{currentSlide + 1}</span>
                                        </div>
                                        {features[currentSlide].title}
                                    </h3>
                                    {features[currentSlide].subtitle && (
                                        <p className="text-sm text-muted-foreground italic ml-10">
                                            {features[currentSlide].subtitle}
                                        </p>
                                    )}
                                </div>

                                {/* Features Grid */}
                                <div className="grid sm:grid-cols-2 gap-3 ml-10">
                                    {features[currentSlide].features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className={`flex items-start gap-3 p-3 rounded-lg ${feature.highlight
                                                ? "bg-primary/10 border border-primary/20"
                                                : "bg-muted/30"
                                                }`}
                                        >
                                            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.highlight ? "text-primary" : "text-green-600"
                                                }`} />
                                            <span className={`text-sm leading-relaxed ${feature.highlight ? "font-medium text-foreground" : "text-muted-foreground"
                                                }`}>
                                                {feature.text}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="bg-muted/30 p-6 border-t">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                            Slide {currentSlide + 1} de {features.length}
                        </p>
                        <Button
                            className="bg-gradient-primary hover:opacity-90"
                            onClick={() => {
                                onOpenChange(false);
                                const contactSection = document.getElementById('contato');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Solicitar Demo Grátis
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProductDetailsDialog;
