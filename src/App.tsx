import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";

type Project = {
  id: string;
  name: string;
  location: string;
  year: string;
  image: string;
};

type Feature = {
  id: string;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    id: "luminaria",
    name: "Residência Luminária",
    location: "Porto Alegre, RS",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "atrium",
    name: "Átrio Casa Atelier",
    location: "Florianópolis, SC",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "bruma",
    name: "Penthouse Bruma",
    location: "São Paulo, SP",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
  },
];

const features: Feature[] = [
  {
    id: "curadoria",
    title: "Curadoria silenciosa",
    description:
      "Projetos com presença sutil, onde forma e função se alinham ao olhar.",
  },
  {
    id: "materia",
    title: "Matéria como linguagem",
    description:
      "Pedra, madeira e metal tratados com precisão artesanal e textura.",
  },
  {
    id: "luz",
    title: "Luz e respiro",
    description:
      "Proporções generosas e iluminação natural para revelar a arquitetura.",
  },
];

const easeLuxury: [number, number, number, number] = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeLuxury } },
};

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const MotionSection = ({ id, className, children }: SectionProps) => (
  <motion.section
    id={id}
    className={className}
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.section>
);

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-zinc-50 text-stone-900 font-sans">
        <motion.header
          className="relative min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: easeLuxury }}
        >
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?auto=format&fit=crop&w=2000&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-zinc-950/40" />
          <div className="relative z-10 flex min-h-screen items-center">
            <motion.div
              className="mx-auto w-full max-w-5xl px-6 text-center sm:px-12 lg:px-16"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.p
                className="text-xs uppercase tracking-[0.3em] text-white/70"
                variants={staggerItem}
              >
                Cadoro Studio
              </motion.p>
              <motion.h1
                className="mt-8 font-serif text-4xl font-light tracking-wide text-white md:text-6xl"
                variants={staggerItem}
              >
                Arquitetura e interiores de presença silenciosa.
              </motion.h1>
              <motion.p
                className="mx-auto mt-8 max-w-2xl text-sm uppercase tracking-[0.2em] text-white/70"
                variants={staggerItem}
              >
                Espaços com respiro, luz e matéria refinada.
              </motion.p>
              <motion.div className="mt-12" variants={staggerItem}>
                <button className="rounded-full border border-white/50 px-10 py-3 text-xs uppercase tracking-[0.35em] text-white transition-colors duration-500 hover:bg-white hover:text-zinc-950">
                  Ver Projetos
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.header>

        <main>
          <MotionSection id="manifesto" className="py-32">
            <div className="mx-auto max-w-3xl px-6 text-center sm:px-12 lg:px-16">
              <motion.p
                className="text-xs uppercase tracking-[0.35em] text-stone-500"
                variants={staggerItem}
              >
                Manifesto
              </motion.p>
              <motion.h2
                className="mt-8 font-serif text-3xl font-light tracking-wide text-stone-900 md:text-4xl"
                variants={staggerItem}
              >
                O luxo está na pausa, no vazio e na proporção.
              </motion.h2>
              <motion.p
                className="mt-8 text-sm uppercase tracking-[0.2em] text-stone-500"
                variants={staggerItem}
              >
                Materiais honestos. Detalhes invisíveis. Narrativas que duram.
              </motion.p>
            </div>
          </MotionSection>

          <MotionSection id="projects" className="py-32">
            <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-16">
              <motion.div
                className="flex flex-col items-center text-center"
                variants={staggerItem}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                  Portfólio
                </p>
                <h2 className="mt-8 font-serif text-3xl font-light tracking-wide text-stone-900 md:text-4xl">
                  Projetos selecionados
                </h2>
              </motion.div>
              <div className="mt-20 grid gap-16 md:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    className="group"
                    variants={staggerItem}
                    transition={{
                      duration: 0.9,
                      delay: 0.08 * index,
                      ease: easeLuxury,
                    }}
                  >
                    <div className="overflow-hidden rounded-[32px]">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-700 group-hover:opacity-100" />
                      </div>
                    </div>
                    <div className="mt-8">
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                        {project.location} • {project.year}
                      </p>
                      <h3 className="mt-4 font-serif text-2xl font-light tracking-wide text-stone-900">
                        {project.name}
                      </h3>
                      <div className="mt-6">
                        <button className="rounded-full border border-stone-300 px-6 py-2 text-xs uppercase tracking-[0.3em] text-stone-700 transition-colors duration-500 hover:bg-stone-900 hover:text-white">
                          Ver Projeto
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </MotionSection>

          <MotionSection id="studio" className="py-32">
            <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-16">
              <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <motion.p
                    className="text-xs uppercase tracking-[0.35em] text-stone-500"
                    variants={staggerItem}
                  >
                    Estúdio
                  </motion.p>
                  <motion.h2
                    className="mt-8 font-serif text-3xl font-light tracking-wide text-stone-900 md:text-4xl"
                    variants={staggerItem}
                  >
                    Projetamos espaços que traduzem identidade.
                  </motion.h2>
                  <motion.p
                    className="mt-8 text-sm uppercase tracking-[0.2em] text-stone-500"
                    variants={staggerItem}
                  >
                    Residências, galerias, hotéis e espaços corporativos com
                    linguagem arquitetônica atemporal.
                  </motion.p>
                </div>
                <div className="grid gap-8">
                  {features.map((feature) => (
                    <motion.div
                      key={feature.id}
                      className="rounded-[28px] border border-stone-200 bg-white px-8 py-10"
                      variants={staggerItem}
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                        {feature.title}
                      </p>
                      <p className="mt-4 text-sm uppercase tracking-[0.2em] text-stone-700">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </MotionSection>

          <MotionSection id="journal" className="py-32">
            <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-16">
              <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="rounded-[36px] overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80"
                      alt="Biblioteca de materiais"
                      className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out hover:scale-105"
                    />
                  </div>
                </div>
                <div>
                  <motion.p
                    className="text-xs uppercase tracking-[0.35em] text-stone-500"
                    variants={staggerItem}
                  >
                    Biblioteca
                  </motion.p>
                  <motion.h2
                    className="mt-8 font-serif text-3xl font-light tracking-wide text-stone-900 md:text-4xl"
                    variants={staggerItem}
                  >
                    Materiais que contam histórias.
                  </motion.h2>
                  <motion.p
                    className="mt-8 text-sm uppercase tracking-[0.2em] text-stone-500"
                    variants={staggerItem}
                  >
                    Uma seleção contínua de superfícies, texturas e luz para
                    criar atmosferas precisas.
                  </motion.p>
                </div>
              </div>
            </div>
          </MotionSection>
        </main>

        <MotionSection className="border-t border-stone-200 py-24">
          <footer className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 text-center sm:px-12 lg:flex-row lg:justify-between lg:px-16 lg:text-left">
            <div>
              <p className="font-serif text-2xl font-light tracking-wide text-stone-900">
                Cadoro Studio
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-stone-500">
                Arquitetura & interiores
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-[0.3em] text-stone-500 lg:justify-end">
              <a className="transition-colors duration-500 hover:text-stone-900" href="#">
                Portfólio
              </a>
              <a className="transition-colors duration-500 hover:text-stone-900" href="#">
                Estúdio
              </a>
              <a className="transition-colors duration-500 hover:text-stone-900" href="#">
                Contato
              </a>
            </div>
            <div className="flex items-center gap-4 text-stone-500">
              <a className="transition-colors duration-500 hover:text-stone-900" href="#">
                <Instagram size={18} />
              </a>
              <a className="transition-colors duration-500 hover:text-stone-900" href="#">
                <Mail size={18} />
              </a>
              <a className="transition-colors duration-500 hover:text-stone-900" href="#">
                <ArrowUpRight size={18} />
              </a>
            </div>
          </footer>
          <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-stone-500">
            © 2026 Cadoro Studio. Todos os direitos reservados.
          </p>
        </MotionSection>
      </div>
    </>
  );
}
