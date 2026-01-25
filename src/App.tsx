import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";

type Product = {
  id: string;
  name: string;
  material: string;
  image: string;
};

const products: Product[] = [
  {
    id: "alba",
    name: "Casaco Sartorial Alba",
    material: "Lã Merino",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "lume",
    name: "Camisa Fina Lume",
    material: "Seda Pura",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "corda",
    name: "Calça Corda",
    material: "Algodão Egípcio",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
];

const easeLuxury: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: easeLuxury },
  viewport: { once: true, amount: 0.3 },
};

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
    <div className="min-h-screen bg-primary text-primary font-sans">
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
              "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative z-10 flex min-h-screen items-center">
          <motion.div
            className="mx-auto w-full max-w-5xl px-6 text-center sm:px-10 lg:px-14"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p
              className="text-xs uppercase tracking-[0.4em] text-white/70"
              variants={staggerItem}
            >
              Cadoro
            </motion.p>
            <motion.h1
              className="mt-6 font-serif text-4xl leading-tight tracking-tight text-white md:text-6xl"
              variants={staggerItem}
            >
              Silêncio que veste.
            </motion.h1>
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base leading-loose text-white/75 md:text-lg"
              variants={staggerItem}
            >
              Para quem entende que o verdadeiro luxo é sentido, não anunciado.
            </motion.p>
            <motion.div className="mt-10" variants={staggerItem}>
              <button className="rounded-full border border-white/40 px-9 py-3 text-xs uppercase tracking-[0.35em] text-white transition duration-700 hover:border-white/70 hover:bg-white/10">
                Descobrir a Cadoro
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      <main>
        <MotionSection id="concept" className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-10 lg:px-14">
            <motion.p
              className="text-xs uppercase tracking-[0.35em] text-accent"
              variants={staggerItem}
            >
              Conceito
            </motion.p>
            <motion.h2
              className="mt-6 font-serif text-3xl tracking-tight md:text-4xl"
              variants={staggerItem}
            >
              Atemporal por natureza.
            </motion.h2>
            <motion.p
              className="mt-6 text-base leading-loose text-accent md:text-lg"
              variants={staggerItem}
            >
              Cadoro nasce do respeito ao tempo. Criamos peças que atravessam
              estações, não tendências. A elegância não precisa se explicar; ela
              apenas permanece.
            </motion.p>
          </div>
        </MotionSection>

        <MotionSection id="about" className="py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-14">
            <div>
              <motion.p
                className="text-xs uppercase tracking-[0.35em] text-accent"
                variants={staggerItem}
              >
                A Marca
              </motion.p>
              <motion.h2
                className="mt-6 font-serif text-3xl tracking-tight md:text-4xl"
                variants={staggerItem}
              >
                Um legado de precisão, criado para durar.
              </motion.h2>
              <motion.p
                className="mt-6 text-base leading-loose text-accent md:text-lg"
                variants={staggerItem}
              >
                Cada peça Cadoro nasce em ateliers familiares no norte da Itália,
                onde o tempo é tratado como matéria-prima. Trabalhamos com fibras
                naturais de origem rastreável e acabamentos manuais que elevam a
                sensação ao toque.
              </motion.p>
            </div>
            <div className="rounded-[32px] border border-border bg-white/60 p-10 text-center">
              <motion.p
                className="text-xs uppercase tracking-[0.35em] text-accent"
                variants={staggerItem}
              >
                Compromissos
              </motion.p>
              <motion.ul
                className="mt-8 space-y-4 text-sm uppercase tracking-[0.3em] text-primary"
                variants={staggerItem}
              >
                <li>Design Italiano</li>
                <li>Lotes Limitados</li>
                <li>Acabamento Manual</li>
              </motion.ul>
              <motion.p
                className="mt-8 text-sm leading-relaxed text-accent"
                variants={staggerItem}
              >
                Produções reduzidas para preservar o silêncio e a exclusividade
                de cada coleção.
              </motion.p>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="collection" className="py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
            <motion.div
              className="flex flex-col items-center text-center"
              variants={staggerItem}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-accent">
                Curadoria
              </p>
              <h2 className="mt-6 font-serif text-3xl tracking-tight md:text-4xl">
                Peças essenciais, selecionadas a dedo.
              </h2>
            </motion.div>
            <div className="mt-16 grid gap-12 md:grid-cols-3">
              {products.map((product, index) => (
                <motion.article
                  key={product.id}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-primary"
                  variants={staggerItem}
                  transition={{
                    duration: 0.9,
                    delay: 0.1 * index,
                    ease: easeLuxury,
                  }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-700 group-hover:opacity-100" />
                    <div className="absolute bottom-6 left-6 right-6 translate-y-3 opacity-0 transition duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                      <button className="w-full rounded-full border border-border bg-primary/80 px-6 py-2 text-xs uppercase tracking-[0.35em] text-primary transition duration-700 hover:bg-primary">
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                  <div className="px-6 py-6">
                    <h3 className="font-serif text-xl tracking-tight">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.35em] text-accent">
                      {product.material}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </MotionSection>
      </main>

      <MotionSection className="border-t border-border py-16">
        <footer className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center sm:px-10 lg:flex-row lg:justify-between lg:px-14 lg:text-left">
          <div>
            <p className="font-serif text-2xl tracking-tight">Cadoro</p>
            <p className="mt-2 text-sm leading-relaxed text-accent">
              Elegância que permanece em silêncio.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-widest text-accent lg:justify-end">
            <a className="transition duration-500 hover:text-primary" href="#">
              Sobre
            </a>
            <a className="transition duration-500 hover:text-primary" href="#">
              Atendimento
            </a>
            <a className="transition duration-500 hover:text-primary" href="#">
              Privacidade
            </a>
          </div>
          <div className="flex items-center gap-4 text-accent">
            <a className="transition duration-500 hover:text-primary" href="#">
              <Instagram size={18} />
            </a>
            <a className="transition duration-500 hover:text-primary" href="#">
              <Mail size={18} />
            </a>
            <a className="transition duration-500 hover:text-primary" href="#">
              <ArrowUpRight size={18} />
            </a>
          </div>
        </footer>
        <p className="mt-8 text-center text-xs uppercase tracking-[0.3em] text-accent">
          © 2026 Cadoro. Todos os direitos reservados.
        </p>
      </MotionSection>
    </div>
  );
}
