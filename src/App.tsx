import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";

type Feature = {
  id: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: "curadoria",
    title: "Curadoria silenciosa",
    description:
      "Seleção de marcas com foco em autenticidade, matéria e discrição.",
  },
  {
    id: "materia",
    title: "Matéria como linguagem",
    description:
      "Fibras nobres e acabamentos precisos tratados com rigor técnico.",
  },
  {
    id: "luz",
    title: "Luz e respiro",
    description:
      "Ambiente minimalista para uma experiência de compra calma e refinada.",
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
                // TODO: Substituir pela foto final da vitrine da Cadoro
                "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')",
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
                Cadoro | Bento Gonçalves
              </motion.p>
              <motion.h1
                className="mt-8 font-serif text-4xl font-light tracking-wide text-white md:text-6xl"
                variants={staggerItem}
              >
                Uma boutique de curadoria silenciosa.
              </motion.h1>
              <motion.p
                className="mx-auto mt-8 max-w-2xl text-sm uppercase tracking-[0.2em] text-white/70"
                variants={staggerItem}
              >
                Moda multimarcas no Shopping L'América, 3º andar.
              </motion.p>
              <motion.div className="mt-12" variants={staggerItem}>
                <button className="rounded-full border border-white/50 px-10 py-3 text-xs uppercase tracking-[0.35em] text-white transition-colors duration-500 hover:bg-white hover:text-zinc-950">
                  Conhecer a Cadoro
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
                O luxo está na escolha, no tempo e na presença.
              </motion.h2>
              <motion.p
                className="mt-8 text-sm uppercase tracking-[0.2em] text-stone-500"
                variants={staggerItem}
              >
                Uma curadoria que valoriza permanência e descrição.
              </motion.p>
            </div>
          </MotionSection>

          <MotionSection id="brand" className="py-32">
            <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-16">
              <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="rounded-[36px] overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
                      alt="Interior da boutique"
                      className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out hover:scale-105"
                    />
                    {/* TODO: Substituir pela foto real da boutique */}
                  </div>
                </div>
                <div>
                  <motion.p
                    className="text-xs uppercase tracking-[0.35em] text-stone-500"
                    variants={staggerItem}
                  >
                    A Marca
                  </motion.p>
                  <motion.h2
                    className="mt-8 font-serif text-3xl font-light tracking-wide text-stone-900 md:text-4xl"
                    variants={staggerItem}
                  >
                    Um refúgio contemporâneo no coração do L'América.
                  </motion.h2>
                  <motion.p
                    className="mt-8 text-sm uppercase tracking-[0.2em] text-stone-500"
                    variants={staggerItem}
                  >
                    3º andar, Bento Gonçalves/RS. Uma experiência de compra
                    minimalista e exclusiva.
                  </motion.p>
                </div>
              </div>
            </div>
          </MotionSection>

          <MotionSection id="curadoria" className="py-32">
            <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-16">
              <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <motion.p
                    className="text-xs uppercase tracking-[0.35em] text-stone-500"
                    variants={staggerItem}
                  >
                    Curadoria
                  </motion.p>
                  <motion.h2
                    className="mt-8 font-serif text-3xl font-light tracking-wide text-stone-900 md:text-4xl"
                    variants={staggerItem}
                  >
                    Seleção com assinatura e tempo próprio.
                  </motion.h2>
                  <motion.p
                    className="mt-8 text-sm uppercase tracking-[0.2em] text-stone-500"
                    variants={staggerItem}
                  >
                    Multimarcas masculino e feminino com foco em longevidade e
                    refinamento.
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
                      src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80"
                      alt="Texturas e acabamentos"
                      className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out hover:scale-105"
                    />
                  </div>
                </div>
                <div>
                  <motion.p
                    className="text-xs uppercase tracking-[0.35em] text-stone-500"
                    variants={staggerItem}
                  >
                    Materiais
                  </motion.p>
                  <motion.h2
                    className="mt-8 font-serif text-3xl font-light tracking-wide text-stone-900 md:text-4xl"
                    variants={staggerItem}
                  >
                    Texturas que elevam o vestir.
                  </motion.h2>
                  <motion.p
                    className="mt-8 text-sm uppercase tracking-[0.2em] text-stone-500"
                    variants={staggerItem}
                  >
                    Lã merino, seda pura e algodões nobres em acabamentos
                    discretos.
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
                Cadoro
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-stone-500">
                Moda multimarcas
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-[0.3em] text-stone-500 lg:justify-end">
              <a className="transition-colors duration-500 hover:text-stone-900" href="#">
                Sobre
              </a>
              <a className="transition-colors duration-500 hover:text-stone-900" href="#">
                Curadoria
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
            © 2026 Cadoro. Todos os direitos reservados.
          </p>
        </MotionSection>
      </div>
    </>
  );
}
