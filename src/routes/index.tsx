import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import logoAsset from "@/assets/newlogo.png";
import capaAsset from "@/assets/newcapa.png";
import depois1 from "@/assets/Depois_1.jpg";
import resultado from "@/assets/Resultado.jpg";
import resultado2 from "@/assets/Resultado_2.jpg";
import resultado3 from "@/assets/Resultado_3.jpg";

const WHATS = "https://wa.me/5511978893612";
const wa = (msg: string) => `${WHATS}?text=${encodeURIComponent(msg)}`;
const TEL_RAW = "+5511978893612";
const TEL_FMT = "(11) 97889-3612";
const EMAIL = "gardenofservice@gmail.com";
const ENDERECO = "Rua Lúcia, 209 - Parque dos Camargos, Barueri/SP, 06436-340";
const INSTAGRAM = "https://www.instagram.com/garden.and.service";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Rua%20Lucia%2C%20209%20-%20Parque%20dos%20Camargos%2C%20Barueri%20-%20SP%2C%2006436-340&output=embed";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Garden & Service Jardinagem",
  legalName: "GARDEN & SERVICE LTDA",
  description:
    "Jardinagem e paisagismo em Barueri e região: manutenção de jardins, poda, corte de grama, limpeza de terreno e projetos de paisagismo.",
  telephone: TEL_RAW,
  email: EMAIL,
  foundingDate: "2021-09-01",
  taxID: "43.370.767/0001-15",
  sameAs: [INSTAGRAM],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Lúcia, 209",
    addressLocality: "Barueri",
    addressRegion: "SP",
    postalCode: "06436-340",
    addressCountry: "BR",
  },
  areaServed: ["Barueri", "Alphaville", "Santana de Parnaíba", "Osasco", "Carapicuíba"],
  openingHours: "Mo-Sa 08:00-18:00",
};

const faqJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ property: "og:url", content: "https://service-garden-boost.lovable.app/" }],
    links: [
      { rel: "canonical", href: "https://service-garden-boost.lovable.app/" },
      { rel: "preload", as: "image", href: capaAsset, fetchpriority: "high" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd()) },
    ],
  }),
  component: Home,
});

/* ---------------- ícones ---------------- */
const ico = "h-6 w-6";

function IconLeaf() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={ico} aria-hidden="true">
      <path d="M4 20c0-8 5-14 16-15 0 11-6 16-13 16H4z" strokeLinejoin="round" />
      <path d="M4 20C8 15 12 12 17 10" strokeLinecap="round" />
    </svg>
  );
}
function IconScissors() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={ico} aria-hidden="true">
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="6" cy="18" r="2.6" />
      <path d="M8 7.6 20 18M8 16.4 20 6" strokeLinecap="round" />
    </svg>
  );
}
function IconGrass() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={ico} aria-hidden="true">
      <path d="M3 20h18" strokeLinecap="round" />
      <path d="M6 20c0-4 1-6 3-8M12 20c0-5 1-8 0-11M18 20c0-4-1-6-3-8" strokeLinecap="round" />
    </svg>
  );
}
function IconTree() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={ico} aria-hidden="true">
      <path d="M12 3 6.5 11h3L5 17h14l-4.5-6h3L12 3z" strokeLinejoin="round" />
      <path d="M12 17v4" strokeLinecap="round" />
    </svg>
  );
}
function IconTruck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={ico} aria-hidden="true">
      <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </svg>
  );
}
function IconDraw() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={ico} aria-hidden="true">
      <path d="M3 20h18M5 16V8l5 4 4-7 5 11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconWhats({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.5 3.6 1.38 5.1L2 22l5.2-1.54a9.8 9.8 0 0 0 4.84 1.26h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2zm0 17.9a8.1 8.1 0 0 1-4.14-1.14l-.3-.18-3.08.91.92-3-.2-.31a8.06 8.06 0 1 1 6.8 3.72zm4.5-5.99c-.25-.13-1.46-.72-1.68-.8-.23-.09-.4-.13-.56.12-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.26-.02-.4.11-.52.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.64 4.2 3.7.58.26 1.04.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.11-.23-.17-.48-.29z" />
    </svg>
  );
}
function IconPhone({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <path
        d="M6.5 3h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconInstagram({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden="true">
      <path d="m4 12.5 5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------------- dados ---------------- */
const servicos = [
  {
    icon: <IconGrass />,
    titulo: "Manutenção de jardins",
    texto:
      "Visitas periódicas para deixar o jardim sempre apresentável: corte de grama, adubação, controle de ervas daninhas e replantio do que precisar.",
  },
  {
    icon: <IconScissors />,
    titulo: "Poda de plantas e arbustos",
    texto:
      "Poda de formação, limpeza e cerca viva feita na época certa, para a planta crescer bonita em vez de sofrer.",
  },
  {
    icon: <IconTree />,
    titulo: "Poda e remoção de árvores",
    texto:
      "Galhos altos, encostados no telhado ou na fiação resolvidos com equipamento próprio e todo cuidado com quem passa por perto.",
  },
  {
    icon: <IconTruck />,
    titulo: "Limpeza de terrenos",
    texto:
      "Roçada de mato alto, capinagem e retirada de entulho verde em lotes, chácaras e áreas paradas há tempo.",
  },
  {
    icon: <IconDraw />,
    titulo: "Paisagismo",
    texto:
      "Projeto e execução de canteiros, gramados, jardim de inverno e vasos escolhidos conforme o sol e a rotina do lugar.",
  },
  {
    icon: <IconLeaf />,
    titulo: "Contrato para condomínios e empresas",
    texto:
      "Atendimento mensal com escala combinada, equipe uniformizada e relatório do que foi feito a cada visita.",
  },
];

const diferenciais = [
  {
    titulo: "Empresa registrada desde 2021",
    texto:
      "CNPJ ativo, nota fiscal e contrato quando o condomínio ou a empresa pede. Não é serviço improvisado de fim de semana.",
  },
  {
    titulo: "Área limpa no fim do dia",
    texto:
      "Recolhemos galhos, folhas e restos de poda. Você recebe o jardim pronto de usar, sem pilha de mato na calçada.",
  },
  {
    titulo: "Orçamento antes de começar",
    texto: "Valor fechado combinado no WhatsApp ou na visita técnica, sem cobrança extra aparecendo depois.",
  },
  {
    titulo: "Atendimento em Barueri e região",
    texto: "Base em Parque dos Camargos, com atendimento em Alphaville, Santana de Parnaíba, Carapicuíba e Osasco.",
  },
];

const faq = [
  {
    q: "Quais cidades vocês atendem?",
    a: "Barueri e região, incluindo Alphaville, Santana de Parnaíba, Carapicuíba, Jandira, Itapevi e Osasco. Se a sua cidade não estiver na lista, chame no WhatsApp que confirmamos o deslocamento.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Você manda fotos e o tamanho aproximado da área pelo WhatsApp e já damos uma estimativa. Para jardins grandes, projetos de paisagismo e contratos mensais fazemos uma visita técnica antes de fechar o valor.",
  },
  {
    q: "Vocês levam embora os galhos e o mato cortado?",
    a: "Sim. A retirada do material pode ser incluída no orçamento, ficando combinada antes do serviço começar conforme o volume gerado.",
  },
  {
    q: "Dá para contratar manutenção mensal?",
    a: "Dá. Definimos a frequência das visitas conforme o tipo de gramado e a época do ano, com dia fixo combinado com você, o síndico ou o zelador.",
  },
  {
    q: "Atendem condomínios e empresas com nota fiscal?",
    a: "Sim. Somos uma empresa registrada com CNPJ ativo e emitimos nota fiscal para pessoa física e jurídica.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Confirme as opções disponíveis no atendimento pelo WhatsApp antes de fechar o serviço.",
  },
];

const menu = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Por que nós" },
  { href: "#galeria", label: "Galeria" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

/* ---------------- página ---------------- */
function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-primary-deep/95 shadow-lift backdrop-blur" : "bg-primary-deep/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#topo" className="flex items-center gap-2.5">
            <img
              src={logoAsset}
              alt="Logotipo da Garden & Service Jardinagem"
              className="h-10 w-10 rounded-lg object-cover"
              width={40}
              height={40}
            />
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold text-primary-foreground">
                Garden &amp; Service
              </span>
              <span className="block text-[11px] tracking-[0.22em] text-accent uppercase">Jardinagem</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Menu principal">
            {menu.map((m) => (
              <a
                key={m.href}
                href={m.href}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
              >
                {m.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={wa("Olá! Vi o site da Garden & Service e gostaria de um orçamento de jardinagem.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              <IconWhats />
              <span className="hidden sm:inline">Orçamento no WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="rounded-lg border border-primary-foreground/25 p-2 text-primary-foreground lg:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-primary-foreground/10 bg-primary-deep px-4 pb-4 lg:hidden" aria-label="Menu">
            {menu.map((m) => (
              <a
                key={m.href}
                href={m.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-primary-foreground/10 py-3 text-sm text-primary-foreground/85"
              >
                {m.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-hero-gradient pt-28 pb-16 sm:pt-36 sm:pb-24">
          <img
            src={capaAsset}
            alt="Folhagem verde iluminada pelo sol com a marca Garden & Service Jardinagem"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
            fetchPriority="high"
            decoding="async"
            width={1990}
            height={780}
          />
          <div className="absolute inset-0 -z-10 bg-primary-deep/55" />

          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary-deep/50 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
                <IconLeaf />
                Barueri, Alphaville e região
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
                Seu jardim bonito o ano inteiro, sem você levantar a enxada
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                A Garden &amp; Service cuida de corte de grama, poda, limpeza de terreno e paisagismo para casas,
                condomínios e empresas de Barueri e região. Você combina o dia, a gente chega com equipamento e leva o
                mato embora.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={wa("Olá! Quero um orçamento de jardinagem com a Garden & Service.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-display text-base font-semibold text-accent-foreground shadow-lift transition-transform hover:scale-[1.02]"
                >
                  <IconWhats />
                  Pedir orçamento no WhatsApp
                </a>
                <a
                  href={`tel:${TEL_RAW}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/35 px-6 py-4 font-display text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  <IconPhone />
                  Ligar {TEL_FMT}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CREDIBILIDADE */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 py-6 sm:grid-cols-4">
            {[
              { k: "Desde 2021", v: "Empresa ativa com CNPJ próprio" },
              { k: "Barueri/SP", v: "Base em Parque dos Camargos" },
              { k: "6 serviços", v: "Do corte de grama ao paisagismo" },
              { k: "Casa e empresa", v: "Avulso ou manutenção mensal" },
            ].map((b, i) => (
              <Reveal key={b.k} delay={i * 70} className="px-2 py-3 text-center sm:text-left">
                <p className="font-display text-lg font-semibold text-primary">{b.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{b.v}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="mx-auto max-w-6xl px-4 py-20">
          <Reveal>
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              O que fazemos
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Serviços de jardinagem para resolver de uma vez
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s, i) => (
              <Reveal key={s.titulo} delay={i * 70}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-gradient text-accent-foreground">
                    {s.icon}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Por que a Garden &amp; Service
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                  Você contrata uma vez e o jardim para de dar dor de cabeça
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Trabalhamos com dia combinado, equipamento próprio e área limpa no fim do serviço. Nada de sumir no
                  meio do trabalho ou aparecer com valor diferente do que foi acertado.
                </p>
                <a
                  href={wa("Olá! Quero conversar sobre manutenção do meu jardim.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-display font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                >
                  <IconWhats />
                  Falar com a equipe
                </a>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {diferenciais.map((d, i) => (
                  <Reveal key={d.titulo} delay={i * 80}>
                    <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-soft">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <IconCheck />
                      </span>
                      <h3 className="mt-3 font-display text-base font-semibold">{d.titulo}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="bg-primary-deep py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-accent uppercase">Galeria</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
                Resultados dos nossos serviços
              </h2>
              <p className="mt-3 max-w-2xl text-primary-foreground/75">
                Alguns trabalhos entregues pela equipe. Veja mais no Instagram{" "}
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-accent underline">
                  @garden.and.service
                </a>
                .
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { src: depois1, alt: "Jardim residencial com canteiro tropical, seixos e iluminação após o serviço" },
                { src: resultado, alt: "Equipe finalizando gramado e canteiros de flores em área comercial" },
                { src: resultado2, alt: "Canteiro de flores coloridas ao redor de palmeira em condomínio" },
                { src: resultado3, alt: "Canteiro florido com palmeiras em entrada de condomínio" },
              ].map((img, i) => (
                <Reveal key={img.src} delay={i * 60}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>


        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-20">
          <Reveal>
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Dúvidas
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Perguntas que sempre chegam</h2>
          </Reveal>

          <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            {faq.map((f, i) => (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-semibold">{f.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${openFaq === i ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Contato
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Onde estamos e como falar com a gente</h2>
            </Reveal>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <dl className="space-y-5 text-sm">
                    <div>
                      <dt className="font-display font-semibold text-foreground">Endereço</dt>
                      <dd className="mt-1 text-muted-foreground">{ENDERECO}</dd>
                    </div>
                    <div>
                      <dt className="font-display font-semibold text-foreground">WhatsApp</dt>
                      <dd className="mt-1 flex flex-col gap-1">
                        <a href={`tel:${TEL_RAW}`} className="text-primary underline">
                          {TEL_FMT}
                        </a>
                        <a
                          href={wa("Olá! Gostaria de falar sobre um serviço de jardinagem.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline"
                        >
                          Chamar no WhatsApp
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-display font-semibold text-foreground">E-mail</dt>
                      <dd className="mt-1">
                        <a href={`mailto:${EMAIL}`} className="text-primary underline">
                          {EMAIL}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-display font-semibold text-foreground">Horário de atendimento</dt>
                      <dd className="mt-1 text-muted-foreground">Segunda a sábado, das 8h às 18h.</dd>
                    </div>
                    <div>
                      <dt className="font-display font-semibold text-foreground">Instagram</dt>
                      <dd className="mt-1">
                        <a
                          href={INSTAGRAM}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary underline"
                        >
                          <IconInstagram /> @garden.and.service
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-border shadow-soft">
                  <iframe
                    title="Mapa com a localização da Garden & Service em Barueri"
                    src={MAPS_EMBED}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full min-h-[320px] w-full border-0"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-hero-gradient py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
                Nos chame no Whatsapp para darmos o melhor atendimento da região
              </h2>
              <p className="mt-4 text-primary-foreground/85">
                Corte de grama, poda, limpeza de terreno ou um projeto novo de paisagismo em Barueri e região.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={wa("Olá! Vou mandar uma foto do meu jardim para receber um orçamento.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-display font-semibold text-accent-foreground shadow-lift transition-transform hover:scale-[1.02]"
                >
                  <IconWhats />
                  Enviar foto no WhatsApp
                </a>
                <a
                  href={`tel:${TEL_RAW}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/35 px-6 py-4 font-display font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  <IconPhone />
                  Ligar agora
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="bg-primary-deep py-12 text-center text-primary-foreground/75">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-x-8 gap-y-3 px-4 sm:grid-cols-3">
          {/* Título coluna 1 */}
          <div className="flex items-center justify-center gap-2.5 sm:col-start-1 sm:row-start-1">
            <img
              src={logoAsset}
              alt="Logotipo da Garden & Service Jardinagem"
              className="h-10 w-10 rounded-lg object-cover"
              width={40}
              height={40}
              loading="lazy"
            />
            <span className="font-display text-base font-semibold text-primary-foreground">
              Garden &amp; Service
            </span>
          </div>
          {/* Texto coluna 1 */}
          <div className="text-sm sm:col-start-1 sm:row-start-2">
            <p>Nos chame no Whatsapp para darmos o melhor atendimento da região.</p>
          </div>

          {/* Título coluna 2 */}
          <h3 className="font-display font-semibold text-primary-foreground sm:col-start-2 sm:row-start-1">
            Contato
          </h3>
          {/* Texto coluna 2 */}
          <div className="text-sm sm:col-start-2 sm:row-start-2">
            <p>{ENDERECO}</p>
            <p className="mt-2">
              <a href={`tel:${TEL_RAW}`} className="hover:text-accent">
                {TEL_FMT}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${EMAIL}`} className="hover:text-accent">
                {EMAIL}
              </a>
            </p>
          </div>

          {/* Título coluna 3 */}
          <h3 className="font-display font-semibold text-primary-foreground sm:col-start-3 sm:row-start-1">
            Redes
          </h3>
          {/* Texto coluna 3 */}
          <div className="text-sm sm:col-start-3 sm:row-start-2">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 hover:text-accent"
            >
              <IconInstagram /> @garden.and.service
            </a>
            <p className="mt-4">GARDEN &amp; SERVICE LTDA</p>
            <p>CNPJ 43.370.767/0001-15</p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-primary-foreground/10 px-4 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Garden &amp; Service Jardinagem. Todos os direitos reservados.
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={wa("Olá! Gostaria de um orçamento de jardinagem.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whats text-primary-foreground shadow-lift transition-transform hover:scale-110"
      >
        <IconWhats className="h-7 w-7" />
      </a>
    </div>
  );
}
