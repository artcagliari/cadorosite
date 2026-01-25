import type { ReactNode } from "react";
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

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
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
    initial={fadeInUp.initial}
    whileInView={fadeInUp.whileInView}
    transition={fadeInUp.transition}
    viewport={fadeInUp.viewport}
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
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-12">
            <motion.p
              className="text-sm uppercase tracking-[0.3em] text-accent"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={fadeInUp.viewport}
            >
              Cadoro
            </motion.p>
            <motion.h1
              className="mt-6 font-serif text-4xl leading-tight md:text-6xl"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              transition={{ duration: 1.1, delay: 0.2 }}
              viewport={fadeInUp.viewport}
            >
              Silêncio que veste.
            </motion.h1>
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base text-accent md:text-lg"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              transition={{ duration: 1.1, delay: 0.3 }}
              viewport={fadeInUp.viewport}
            >
              Para quem entende que o verdadeiro luxo é sentido, não anunciado.
            </motion.p>
            <motion.div
              className="mt-10"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              transition={{ duration: 1.1, delay: 0.4 }}
              viewport={fadeInUp.viewport}
            >
              <button className="rounded-full border border-border px-8 py-3 text-sm uppercase tracking-widest text-primary transition duration-700 hover:border-accent hover:text-accent">
                Descobrir a Cadoro
              </button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main>
        <MotionSection id="concept" className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">
              Conceito
            </p>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl">
              Atemporal por natureza.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-accent md:text-lg">
              Cadoro nasce do respeito ao tempo. Criamos peças que atravessam
              estações, não tendências. A elegância não precisa se explicar; ela
              apenas permanece.
            </p>
          </div>
        </MotionSection>

        <MotionSection id="collection" className="py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">
                Curadoria
              </p>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl">
                Peças essenciais, selecionadas a dedo.
              </h2>
            </div>
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {products.map((product, index) => (
                <motion.article
                  key={product.id}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-primary"
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.whileInView}
                  transition={{
                    duration: 1,
                    delay: 0.15 * index,
                    ease: "easeOut",
                  }}
                  viewport={fadeInUp.viewport}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-700 group-hover:opacity-100" />
                    <button className="absolute bottom-6 left-6 right-6 translate-y-2 rounded-full border border-border bg-primary/80 px-6 py-2 text-xs uppercase tracking-widest text-primary opacity-0 transition duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                      Ver Detalhes
                    </button>
                  </div>
                  <div className="px-6 py-6">
                    <h3 className="font-serif text-xl">{product.name}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-accent">
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
        <footer className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:px-12 lg:text-left">
          <div>
            <p className="font-serif text-2xl">Cadoro</p>
            <p className="mt-2 text-sm text-accent">
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
