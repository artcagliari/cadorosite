import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";

type Product = {
  id: string;
  name: string;
  material: string;
  image: string;
};

type Highlight = {
  id: string;
  name: string;
  price: string;
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

const highlights: Highlight[] = [
  {
    id: "camisa",
    name: "Camisa de Alfaiataria",
    price: "R$ 890",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "vestido",
    name: "Vestido Midi Texturizado",
    price: "R$ 1.290",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "acessorios",
    name: "Acessórios em Couro",
    price: "R$ 680",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tricot",
    name: "Tricot Premium",
    price: "R$ 980",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
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
    <React.Fragment>
      <div className="min-h-screen bg-primary text-primary font-sans">
        <div className="bg-[#111111] py-2 text-center text-[11px] uppercase tracking-[0.3em] text-white/80">
          Localizada no 3º andar do Shopping L'América | Enviamos para todo o Brasil
        </div>
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
                // TODO: Substituir pela foto final da loja no Shopping L'América
                "url('https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?auto=format&fit=crop&w=2000&q=80')",
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
                Cadoro | Bento Gonçalves
              </motion.p>
              <motion.h1
                className="mt-6 font-serif text-4xl leading-tight tracking-tight text-white md:text-6xl"
                variants={staggerItem}
              >
                A moda que Bento Gonçalves veste.
              </motion.h1>
              <motion.p
                className="mx-auto mt-6 max-w-2xl text-base leading-loose text-white/75 md:text-lg"
                variants={staggerItem}
              >
                Sua curadoria de estilo no L'América. Um refúgio contemporâneo
                entre mármores, granito e a arquitetura clássica do shopping.
              </motion.p>
              <motion.div className="mt-10" variants={staggerItem}>
                <button className="rounded-full border border-white/40 px-9 py-3 text-xs uppercase tracking-[0.35em] text-white transition duration-700 hover:border-white/70 hover:bg-white/10">
                  Visitar a Cadoro
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
              Modernidade que dialoga com o clássico.
            </motion.h2>
            <motion.p
              className="mt-6 text-base leading-loose text-accent md:text-lg"
              variants={staggerItem}
            >
              Dentro de um shopping inspirado em palácios venezianos, criamos uma
              vitrine limpa, minimalista e atual. Cada escolha traduz estilo
              autoral e um olhar sofisticado para o vestir.
            </motion.p>
          </div>
        </MotionSection>

        <MotionSection id="highlights" className="py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
            <motion.div
              className="flex flex-col items-center text-center"
              variants={staggerItem}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-accent">
                Destaques da vitrine
              </p>
              <h2 className="mt-6 font-serif text-3xl tracking-tight md:text-4xl">
                Curadoria de estação, pronta para levar.
              </h2>
            </motion.div>
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, index) => (
                <motion.article
                  key={item.id}
                  className="group overflow-hidden rounded-3xl border border-border bg-primary"
                  variants={staggerItem}
                  transition={{
                    duration: 0.9,
                    delay: 0.08 * index,
                    ease: easeLuxury,
                  }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-700 group-hover:opacity-100" />
                  </div>
                  <div className="px-5 py-6">
                    <p className="text-xs uppercase tracking-[0.35em] text-accent">
                      Disponível na loja
                    </p>
                    <h3 className="mt-3 font-serif text-lg tracking-tight">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-primary">{item.price}</p>
                  </div>
                </motion.article>
              ))}
            </div>
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
                Multimarcas masculino e feminino no L'América.
              </motion.h2>
              <motion.p
                className="mt-6 text-base leading-loose text-accent md:text-lg"
                variants={staggerItem}
              >
                No 3º andar, a Cadoro oferece uma seleção de marcas nacionais e
                internacionais com foco em qualidade, corte e longevidade. É o
                ponto de encontro entre o clássico do shopping e a moda
                contemporânea.
              </motion.p>
            </div>
            <div className="rounded-[32px] border border-border bg-white/60 p-10 text-center">
              <motion.p
                className="text-xs uppercase tracking-[0.35em] text-accent"
                variants={staggerItem}
              >
                Curadoria local
              </motion.p>
              <motion.ul
                className="mt-8 space-y-4 text-sm uppercase tracking-[0.3em] text-primary"
                variants={staggerItem}
              >
                <li>Seleção multimarcas</li>
                <li>Atendimento personalizado</li>
                <li>Envio para todo o Brasil</li>
              </motion.ul>
              <motion.p
                className="mt-8 text-sm leading-relaxed text-accent"
                variants={staggerItem}
              >
                Um espaço de respiro e modernidade dentro da arquitetura
                clássica do L'América.
              </motion.p>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="location" className="py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-14">
            <div className="rounded-[32px] border border-border overflow-hidden">
              <div className="relative aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
                  alt="Shopping L'América"
                  className="h-full w-full object-cover"
                />
                {/* TODO: Substituir pela foto externa do Shopping L'América ou mapa estilizado */}
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
            <div>
              <motion.p
                className="text-xs uppercase tracking-[0.35em] text-accent"
                variants={staggerItem}
              >
                Localização
              </motion.p>
              <motion.h2
                className="mt-6 font-serif text-3xl tracking-tight md:text-4xl"
                variants={staggerItem}
              >
                Shopping L'América, 3º andar.
              </motion.h2>
              <motion.p
                className="mt-6 text-base leading-loose text-accent md:text-lg"
                variants={staggerItem}
              >
                Bento Gonçalves/RS — dentro de um cenário inspirado em palácios
                venezianos e vilas italianas, a Cadoro é o ponto de curadoria
                contemporânea do shopping.
              </motion.p>
              <motion.div className="mt-8" variants={staggerItem}>
                <button className="rounded-full border border-border px-7 py-2 text-xs uppercase tracking-[0.35em] text-primary transition duration-700 hover:border-accent hover:text-accent">
                  Ver no mapa
                </button>
              </motion.div>
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

        <a
          href="https://wa.me/5554999999999"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition duration-700 hover:bg-[#1EBE5D]"
          aria-label="Falar no WhatsApp"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M16 3C9.37 3 4 8.37 4 15c0 2.3.7 4.54 2.02 6.45L4 29l7.78-2.05A12.9 12.9 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22.1c-1.9 0-3.76-.5-5.38-1.45l-.38-.22-4.6 1.21 1.23-4.48-.25-.4A10.07 10.07 0 1 1 16 25.1zm5.46-7.6c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.89 1.23 3.09.15.2 2.13 3.24 5.17 4.54.72.31 1.28.49 1.71.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"
            />
          </svg>
          <span className="sr-only">WhatsApp</span>
        </a>
      </div>
    </React.Fragment>
  );
}
