import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lívia Ribeiro · Psicóloga · Ansiedade, TDAH adulto e saúde emocional" },
      {
        name: "description",
        content:
          "Psicóloga clínica especializada em ansiedade, TDAH adulto e saúde emocional feminina. Atendimento online e presencial. CRP 05/57362.",
      },
      { property: "og:title", content: "Lívia Ribeiro · Psicóloga" },
      {
        property: "og:description",
        content:
          "Aliviando a ansiedade, gerando o bem-estar. Terapia Cognitivo Comportamental para adultos.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const WHATSAPP =
  "https://wa.me/5524999198075?text=Ol%C3%A1%20L%C3%ADvia%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Para quem é", "#para-quem"],
    ["Sobre", "#sobre"],
    ["A terapia", "#terapia"],
    ["TCC", "#tcc"],
    ["Dúvidas", "#duvidas"],
    ["Contato", "#contato"],
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif italic text-xl text-ink">Lívia Ribeiro</span>
          <span className="eyebrow mt-1 text-[0.6rem]">Psicóloga · CRP 05/57362</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-ink/70 hover:text-clay transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-2 text-sm border border-ink/80 text-ink px-5 py-2.5 hover:bg-ink hover:text-background transition-colors rounded-full"
        >
          Agendar sessão
        </a>
        <button aria-label="Menu" className="lg:hidden text-ink" onClick={() => setOpen(!open)}>
          <div className="w-6 h-px bg-ink mb-1.5" />
          <div className="w-6 h-px bg-ink mb-1.5" />
          <div className="w-4 h-px bg-ink ml-auto" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {links.map(([l, h]) => (
            <a
              key={h}
              href={h}
              onClick={() => setOpen(false)}
              className="block text-ink/80 font-serif text-lg"
            >
              {l}
            </a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="block pt-4 text-clay">
            Agendar sessão →
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-10 items-end">
        <div className="col-span-12 lg:col-span-7 relative z-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="rule" />
            <span className="eyebrow">Terapia Cognitivo-Comportamental</span>
          </div>
          <h1 className="font-serif text-[12vw] sm:text-[9vw] lg:text-[7.2vw] leading-[0.95] text-ink">
            Cuidar da saúde mental <br />
            <span className="italic font-light text-clay">é cuidar da vida.</span>
          </h1>
          <p className="mt-10 max-w-md text-lg text-ink/70 leading-relaxed">
            Psicoterapia para mulheres adultas que vivem com ansiedade, TDAH ou exaustão silenciosa.
            Um espaço de escuta cuidadosa, com método e profundidade.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-clay text-background px-8 py-4 text-sm tracking-wide hover:bg-ink transition-colors rounded-full"
            >
              Agendar uma conversa
              <span className="text-base">→</span>
            </a>
            <a
              href="#sobre"
              className="text-sm text-ink/70 underline underline-offset-8 decoration-clay/60 hover:text-clay"
            >
              Conhecer Lívia
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full">
            <div className="absolute -inset-4 bg-[#BF8D8E]/25 backdrop-blur-2xl rounded-[2rem] -z-10" />
            <img
              src="https://drive.google.com/thumbnail?id=16z5J1qd-4DyTmnAFJJs8N-zq9WJVVC3g&sz=w1000"
              alt="Lívia Ribeiro, psicóloga"
              className="w-full h-full object-cover object-top rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden lg:block absolute -bottom-6 -left-12 bg-background border border-border p-5 max-w-[220px] shadow-sm rounded-2xl">
            <p className="font-serif italic text-base text-ink leading-snug">
              Aliviando a ansiedade, gerando o bem-estar.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 lg:mt-28 flex flex-wrap gap-y-6 justify-between text-sm text-ink/60 border-t border-border pt-6">
        <span>Atendimento online e presencial</span>
        <span className="font-serif italic">Volta Redonda · Rio de Janeiro</span>
        <span>CRP 05/57362</span>
      </div>
    </section>
  );
}

function ParaQuem() {
  const items = [
    {
      n: "01",
      t: "Mulheres com ansiedade",
      d: "Pensamentos que não desligam, peito apertado, cansaço que sono nenhum resolve. Aprender a habitar o próprio corpo de novo.",
    },
    {
      n: "02",
      t: "Adultos com TDAH",
      d: "Para quem chegou na vida adulta carregando culpa por nunca dar conta. Aqui, organizar a mente não é sobre produtividade, é sobre presença.",
    },
    {
      n: "03",
      t: "Saúde emocional feminina",
      d: "Maternidade, trabalho, relações, autoestima. Um espaço para reconhecer o que pesa e devolver sentido às escolhas.",
    },
    {
      n: "04",
      t: "Quem precisa parar",
      d: "Você cuida de todo mundo. Talvez seja hora de alguém cuidar do silêncio que mora em você.",
    },
  ];
  return (
    <section id="para-quem" className="py-28 lg:py-40 bg-secondary/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-10">
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 self-start">
          <div className="flex items-center gap-3 mb-8">
            <span className="rule" />
            <span className="eyebrow">Para quem é</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl text-ink leading-[1.05]">
            Você não precisa <br />
            <span className="italic text-clay">explicar tudo</span> <br />
            para começar.
          </h2>
          <p className="mt-8 text-ink/70 max-w-sm leading-relaxed">
            A terapia começa antes da primeira palavra dita. Começa na decisão de se escutar.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-8 lg:col-start-6 grid sm:grid-cols-2 gap-px bg-border">
          {items.map((it) => (
            <article key={it.n} className="bg-background p-8 lg:p-10 min-h-[260px] flex flex-col">
              <span className="font-serif italic text-clay text-2xl">{it.n}</span>
              <h3 className="font-serif text-2xl mt-6 text-ink">{it.t}</h3>
              <p className="mt-4 text-ink/70 text-sm leading-relaxed">{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12 items-center">
        <div className="col-span-12 lg:col-span-5 relative">
          <div className="relative aspect-[4/5]">
            <div className="absolute -inset-4 bg-[#BF8D8E]/25 backdrop-blur-2xl rounded-[2rem] -z-10" />
            <img
              src="https://drive.google.com/thumbnail?id=1G1UyHNEZf0-uJn6LYzBMIKUafeJdrjlY&sz=w1000"
              alt="Lívia Ribeiro"
              className="w-full h-full object-cover object-top rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-clay text-background p-6 lg:p-8 max-w-[200px] rounded-2xl opacity-70">
            <p className="font-serif italic text-3xl leading-none">8+</p>
            <p className="text-xs mt-2 opacity-90">anos acompanhando histórias de transformação</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="flex items-center gap-3 mb-8">
            <span className="rule" />
            <span className="eyebrow">Sobre Lívia</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl text-ink leading-[1.05]">
            Uma escuta <span className="italic text-clay">treinada</span>
            <br /> e profundamente humana.
          </h2>
          <div className="mt-10 space-y-6 text-ink/75 leading-relaxed">
            <p>
              Sou Lívia Ribeiro, psicóloga clínica registrada no CRP 05/57362. Construí minha
              prática acreditando que cuidar da mente é, antes de tudo, um gesto de coragem.
            </p>
            <p>
              Atendo adultos, com foco em mulheres que carregam ansiedade, TDAH ou aquele cansaço
              difícil de nomear. Meu trabalho é guiado pela Terapia Cognitivo Comportamental, uma
              abordagem com método, evidências e muito acolhimento.
            </p>
            <p className="font-italic-serif text-xl text-ink">
              "Aliviando a ansiedade, gerando o bem-estar."
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="eyebrow">Abordagem</dt>
              <dd className="mt-2 font-serif text-lg text-ink">TCC</dd>
            </div>
            <div>
              <dt className="eyebrow">Público</dt>
              <dd className="mt-2 font-serif text-lg text-ink">Adultos</dd>
            </div>
            <div>
              <dt className="eyebrow">Modalidade</dt>
              <dd className="mt-2 font-serif text-lg text-ink">Online e presencial</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    {
      n: "I",
      t: "Primeiro contato",
      d: "Você envia uma mensagem pelo WhatsApp. Conversamos sobre o que te traz e encontramos um horário.",
    },
    {
      n: "II",
      t: "Sessão inicial",
      d: "Um encontro de escuta. Sem pressa, sem fórmula. É aqui que entendemos juntas o que está pedindo cuidado.",
    },
    {
      n: "III",
      t: "Plano terapêutico",
      d: "Definimos objetivos claros, dentro do seu tempo. Cada sessão tem propósito, mas respeita o seu ritmo.",
    },
    {
      n: "IV",
      t: "Continuidade",
      d: "Encontros semanais, online ou presenciais. Um espaço fixo na sua semana para você voltar a si.",
    },
  ];
  return (
    <section id="terapia" className="py-28 lg:py-40 bg-ink text-background grain relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-20">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-10 h-px bg-clay" />
              <span className="eyebrow" style={{ color: "var(--clay)" }}>
                Como funciona
              </span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05]">
              Um processo <span className="italic text-clay">cuidadoso</span>, construído a duas.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 text-background/70 leading-relaxed self-end">
            A terapia não é um produto pronto. É um caminho. Aqui está como ele acontece quando
            começamos a caminhar juntas.
          </div>
        </div>
        <ol className="grid md:grid-cols-2 gap-px bg-background/15">
          {steps.map((s) => (
            <li key={s.n} className="bg-ink p-10 lg:p-12 min-h-[260px]">
              <div className="flex items-baseline justify-between">
                <span className="font-serif italic text-clay text-3xl">{s.n}</span>
                <span className="text-xs tracking-widest text-background/40">ETAPA</span>
              </div>
              <h3 className="font-serif text-3xl mt-8">{s.t}</h3>
              <p className="mt-4 text-background/70 leading-relaxed max-w-md">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TCC() {
  return (
    <section id="tcc" className="py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <span className="rule" />
            <span className="eyebrow">A abordagem</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-7xl text-ink leading-[1.02]">
            Terapia Cognitivo
            <br />
            <span className="italic text-clay">Comportamental.</span>
          </h2>
          <div className="mt-12 space-y-6 text-ink/75 leading-relaxed max-w-xl">
            <p>
              A TCC é uma abordagem focada na resolução de problemas. Uma terapia com método, metas
              claras e evidência científica de eficácia comprovada.
            </p>
            <p>
              Em sessão, psicóloga e paciente trabalham juntas, lado a lado, para que você possa,
              aos poucos, se tornar a sua própria terapeuta. Não há mágica, há clareza.
            </p>
            <p>
              É a abordagem mais estudada e respeitada para o tratamento da ansiedade, depressão,
              TDAH adulto e questões ligadas à autoestima.
            </p>
          </div>
        </div>
        <aside className="col-span-12 lg:col-span-5 lg:col-start-8 bg-secondary/50 p-12 lg:p-14 lg:mt-[5.5rem] self-start border border-border rounded-2xl">
          <p className="eyebrow mb-6">Princípios</p>
          <ul className="space-y-5">
            {[
              "Foco em resolução de problemas",
              "Trabalho colaborativo em sessão",
              "Metas claras e mensuráveis",
              "Eficácia cientificamente comprovada",
              "Autonomia como destino",
            ].map((p) => (
              <li
                key={p}
                className="flex gap-4 text-sm text-ink/80 border-b border-border/60 pb-4 last:border-0"
              >
                <span className="font-serif italic text-clay">+</span>
                {p}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Depoimentos() {
  const dep = [
    {
      q: "Encontrei na Lívia uma escuta que eu nem sabia que precisava. Saí de cada sessão com mais espaço dentro de mim.",
      a: "M. C., 34 anos",
    },
    {
      q: "Foi a primeira vez que entendi meu TDAH sem me sentir um defeito. A terapia me devolveu autoconfiança.",
      a: "R. A., 29 anos",
    },
    {
      q: "A ansiedade não desapareceu, mas mudou de lugar. Hoje ela cabe na minha vida sem me dominar.",
      a: "P. S., 41 anos",
    },
  ];
  return (
    <section className="py-28 lg:py-40 bg-secondary/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-12">
          <span className="rule" />
          <span className="eyebrow">Quem viveu o processo</span>
        </div>
        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {dep.map((d, i) => (
            <figure
              key={i}
              className="bg-background p-10 lg:p-12 flex flex-col justify-between min-h-[360px]"
            >
              <span className="font-serif italic text-clay text-6xl leading-none">"</span>
              <blockquote className="font-serif text-2xl text-ink leading-snug mt-6">
                {d.q}
              </blockquote>
              <figcaption className="mt-10 eyebrow text-ink/60">{d.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Duvidas() {
  const faqs = [
    {
      q: "Como sei se a terapia online é para mim?",
      a: "Se você tem rotina cheia, mora longe de um consultório ou simplesmente se sente mais segura em casa, a terapia online costuma funcionar muito bem. O vínculo terapêutico se constrói igual, com a vantagem do conforto e da continuidade mesmo em viagens.",
    },
    {
      q: "Quanto tempo dura o tratamento?",
      a: "Não existe um prazo fixo. A TCC costuma trabalhar com objetivos claros e progresso visível ao longo dos primeiros meses, mas o tempo de cada processo respeita o ritmo de quem vive ele.",
    },
    {
      q: "Atende convênio?",
      a: "O atendimento é particular. Emito recibo para reembolso quando seu convênio oferece essa cobertura.",
    },
    {
      q: "Como são as sessões?",
      a: "Sessões semanais de 50 minutos, online por vídeo ou presenciais em Volta Redonda. Cada encontro tem propósito, mas espaço pleno para o que precisar emergir.",
    },
    {
      q: "Em quanto tempo consigo iniciar?",
      a: "Normalmente a primeira sessão acontece dentro de uma semana após o contato inicial pelo WhatsApp.",
    },
  ];
  return (
    <section id="duvidas" className="py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-4">
          <div className="flex items-center gap-3 mb-8">
            <span className="rule" />
            <span className="eyebrow">Dúvidas frequentes</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl text-ink leading-[1.05]">
            Tudo bem <span className="italic text-clay">não saber</span> por onde começar.
          </h2>
          <p className="mt-8 text-ink/70 max-w-sm">
            Aqui estão as perguntas que mais aparecem antes da primeira sessão. Se a sua não estiver
            aqui, me escreva.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <div className="divide-y divide-border border-t border-b border-border">
            {faqs.map((f, i) => (
              <details key={i} className="group py-7">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <span className="font-serif text-2xl text-ink leading-snug">{f.q}</span>
                  <span className="text-2xl text-clay font-serif italic transition-transform group-open:rotate-45 mt-1">
                    +
                  </span>
                </summary>
                <p className="mt-5 text-ink/70 leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="py-28 lg:py-40 bg-secondary/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <div className="flex items-center gap-3 mb-8">
            <span className="rule" />
            <span className="eyebrow">Localização e contato</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl text-ink leading-[1.05]">
            Onde nos <span className="italic text-clay">encontramos.</span>
          </h2>
          <dl className="mt-12 space-y-8">
            <div>
              <dt className="eyebrow">Atendimento online</dt>
              <dd className="mt-2 font-serif text-2xl text-ink">Brasil e exterior, por vídeo</dd>
            </div>
            <div>
              <dt className="eyebrow">Presencial</dt>
              <dd className="mt-2 font-serif text-2xl text-ink">Volta Redonda · RJ</dd>
            </div>
            <div>
              <dt className="eyebrow">WhatsApp</dt>
              <dd className="mt-2 font-serif text-2xl text-ink">(24) 99919-8075</dd>
            </div>
            <div>
              <dt className="eyebrow">Instagram</dt>
              <dd className="mt-2 font-serif text-2xl text-ink">
                <a
                  href="https://www.instagram.com/psicologaliviaribeiro"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-clay/50 hover:text-clay"
                >
                  @psicologaliviaribeiro
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 relative">
          <div className="relative aspect-[4/5] lg:aspect-square w-full">
            <div className="absolute -inset-4 bg-[#BF8D8E]/25 backdrop-blur-2xl rounded-[2rem] -z-10" />
            <iframe
              src="https://maps.google.com/maps?q=Volta%20Redonda%20-%20RJ&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full rounded-2xl border-0 bg-background"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 bg-background border border-border p-6 max-w-[260px] rounded-2xl shadow-sm z-10">
            <p className="eyebrow mb-3">Atendimento</p>
            <p className="font-serif italic text-lg text-ink leading-snug">
              Presencial em Volta Redonda e online para todo mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="py-32 lg:py-48 bg-background relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="rule" />
          <span className="eyebrow">Próximo passo</span>
          <span className="rule" />
        </div>
        <h2 className="font-serif text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.98] text-ink">
          Você não precisa
          <br />
          <span className="italic text-clay">resolver tudo</span> hoje.
        </h2>
        <p className="mt-10 text-lg text-ink/70 max-w-xl mx-auto leading-relaxed">
          Só precisa dar o primeiro passo. Uma mensagem é o suficiente para começarmos.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="mt-14 inline-flex items-center gap-3 bg-ink text-background px-10 py-5 text-sm tracking-widest uppercase hover:bg-clay transition-colors rounded-full"
        >
          Agendar pelo WhatsApp
          <span>→</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#be8e90] text-ink/85 py-16 grain relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 pb-12 border-b border-ink/20">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-serif italic text-3xl text-ink">Lívia Ribeiro</p>
            <p className="eyebrow mt-3 text-background font-semibold">Psicóloga · CRP 05/57362</p>
            <p className="mt-6 max-w-sm text-ink/75 leading-relaxed">
              Aliviando a ansiedade, gerando o bem-estar. Atendimento online e presencial para
              adultos.
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <p className="eyebrow mb-5 text-background font-semibold">Navegação</p>
            <ul className="space-y-3 text-sm text-ink/80">
              <li>
                <a href="#para-quem" className="hover:text-ink transition-colors">
                  Para quem é
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-ink transition-colors">
                  Sobre Lívia
                </a>
              </li>
              <li>
                <a href="#terapia" className="hover:text-ink transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-ink transition-colors">
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-4">
            <p className="eyebrow mb-5 text-background font-semibold">Contato</p>
            <ul className="space-y-3 text-sm text-ink/80">
              <li>WhatsApp · (24) 99919-8075</li>
              <li>
                <a
                  href="https://www.instagram.com/psicologaliviaribeiro"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink transition-colors"
                >
                  Instagram · @psicologaliviaribeiro
                </a>
              </li>
              <li>Volta Redonda · RJ</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-ink/60 font-medium">
          <span>© {new Date().getFullYear()} Lívia Ribeiro. Todos os direitos reservados.</span>
          <span>Desenvolvido por Maree Felix</span>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <ParaQuem />
      <Sobre />
      <ComoFunciona />
      <TCC />
      <Depoimentos />
      <Duvidas />
      <Contato />
      <CTAFinal />
      <Footer />
    </main>
  );
}
