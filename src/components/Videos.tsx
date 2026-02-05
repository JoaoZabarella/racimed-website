import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

const Videos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "L6AoQde4KIs",
      title: "Gráficos de Resultados de Exames",
      description: "Vídeo aula mostrando como visualizar gráficos dos resultados de exames",
    },
    {
      id: "kdZfnNTFupI",
      title: "Realizar Backups",
      description: "Tutorial completo sobre como realizar backups no RaciMED",
    },
    {
      id: "4Gxzre05EAg",
      title: "Cadastrando Convênios TUSS",
      description: "Como cadastrar convênios com tabela TUSS no sistema",
    },
    {
      id: "n2i3qRv5uwE",
      title: "Prontuário Eletrônico",
      description: "Apresentação do módulo de Prontuário Eletrônico",
    },
    {
      id: "BHWfuToCAfo",
      title: "Agendamento Simultâneo",
      description: "Como utilizar o recurso de agendamento simultâneo",
    },
  ];

  return (
    <section id="videos" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
            Vídeo Aulas
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Conheça o RaciMED em detalhes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Assista nossos tutoriais e aprenda a utilizar todas as funcionalidades do sistema.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="aspect-video rounded-3xl overflow-hidden shadow-medium bg-secondary">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo || videos[0].id}`}
              title="RaciMED Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {videos.map((video, index) => (
            <motion.button
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onClick={() => setActiveVideo(video.id)}
              className={`group relative rounded-xl overflow-hidden aspect-video ${
                activeVideo === video.id || (!activeVideo && index === 0)
                  ? "ring-2 ring-primary"
                  : ""
              }`}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-secondary/60 group-hover:bg-secondary/40 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-secondary to-transparent">
                <p className="text-primary-foreground text-xs font-medium truncate">
                  {video.title}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
