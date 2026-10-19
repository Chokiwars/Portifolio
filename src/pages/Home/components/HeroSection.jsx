import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero relative py-[105px] pb-[95px]" id="inicio">
      <div className="site-container mx-auto">
        <div className="hero-grid relative grid items-center gap-[60px]">
          <div className="reveal">
            <div className="availability"><i /> Aberta a novas oportunidades</div>
            <p className="eyebrow">DESENVOLVEDORA FRONT-END · BRASIL</p>
            <h1 className="font-display text-[clamp(52px,7vw,88px)] font-bold leading-[.98] tracking-[-6px]">Olá, eu sou a Bia.<br />Crio para a <em className="text-lilac not-italic">web.</em></h1>
            <p className="hero-copy">Transformo ideias em experiências digitais intuitivas, acessíveis e cheias de personalidade. Código bem feito, design com intenção.</p>
            <div className="hero-actions">
              <a className="button" href="#projetos">Conheça meu trabalho <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#sobre">Um pouco sobre mim <ArrowDown size={15} /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Ilustração abstrata com a inicial B">
            <div className="orbit" />
            <div className="art-card"><Sparkles className="art-spark" size={28} /></div>
            <span className="art-note">design + código = ✳</span>
          </div>
        </div>
        <div className="metrics flex items-center border-y border-line py-[21px]" aria-label="Resumo de competências">
          <div className="metric"><strong>React</strong><span>interfaces dinâmicas</span></div>
          <div className="metric"><strong>UI &amp; UX</strong><span>experiências intuitivas</span></div>
          <div className="metric"><strong>100%</strong><span>curiosidade por aprender</span></div>
        </div>
      </div>
    </section>
  );
}
