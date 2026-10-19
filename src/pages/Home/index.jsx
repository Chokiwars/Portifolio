import { ArrowDownRight, ArrowUpRight, Code2, FolderOpen, Mail, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  { title: "Sobre mim", description: "Uma prévia da minha trajetória, dos meus interesses e da forma como gosto de trabalhar.", href: "/sobre-mim", icon: UserRound, theme: "about", detail: "PESSOA · TRAJETÓRIA · VALORES", preview: "Um pouco além do código." },
  { title: "Habilidades", description: "Tecnologias e ferramentas que fazem parte da minha jornada de aprendizado e criação.", href: "/habilidades", icon: Code2, theme: "skills", detail: "TECNOLOGIA · FERRAMENTAS · APRENDIZADO", preview: "Ideias que ganham forma." },
  { title: "Projetos", description: "Uma pequena vitrine do que venho construindo. Os detalhes estão na página completa.", href: "/projetos", icon: FolderOpen, theme: "projects", detail: "SELEÇÃO · PROCESSO · RESULTADOS", preview: "Feito para sair da ideia." },
  { title: "Contato", description: "Um convite para começar uma conversa sobre oportunidades, projetos ou ideias.", href: "/contato", icon: Mail, theme: "contact", detail: "CONVERSA · IDEIAS · COLABORAÇÃO", preview: "Vamos criar algo juntas?" },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero relative py-[105px] pb-[76px]" id="inicio">
        <div className="site-container mx-auto">
          <div className="hero-grid relative grid items-center gap-[60px]">
            <div className="reveal">
              <div className="availability"><i /> Aberta a novas oportunidades</div>
              <p className="eyebrow">DESENVOLVEDORA FRONT-END · BRASIL</p>
              <h1 className="font-display text-[clamp(52px,7vw,88px)] font-bold leading-[.98] tracking-[-6px]">Olá, eu sou a Bia.<br />Crio para a <em className="text-lilac not-italic">web.</em></h1>
              <p className="hero-copy">Crio experiências digitais intuitivas, acessíveis e cheias de personalidade. Este é meu cantinho na web — escolha uma página para me conhecer melhor.</p>
              <Link className="button" to="/projetos">Explore meu portfólio <ArrowDownRight size={16} /></Link>
            </div>
            <div className="hero-art" aria-label="Ilustração abstrata com a inicial B">
              <div className="orbit" />
              <div className="art-card"><span className="art-spark">✳</span></div>
              <span className="art-note">design + código = ✳</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section home-links" aria-label="Páginas do portfólio">
        <div className="site-container mx-auto">
          <div className="section-heading">
            <div><p className="section-kicker">POR ONDE COMEÇAR?</p><h2>Conheça meu trabalho.</h2></div>
            <p className="section-intro">Cada página conta uma parte diferente da minha jornada como desenvolvedora.</p>
          </div>
          <div className="home-link-grid">
            {destinations.map(({ title, description, href, icon: Icon, theme, detail, preview }, index) => (
              <Link className={`home-link-card home-link-${theme}`} to={href} key={href}>
                <div className="home-link-visual" aria-hidden="true">
                  <span className="home-link-number">0{index + 1} / 04</span>
                  <div className="home-link-orbit"><Icon className="home-link-icon" size={29} /></div>
                  <span className="home-link-visual-label">{preview}</span>
                </div>
                <div className="home-link-copy">
                  <span className="home-link-detail">{detail}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="home-link-action">Explorar página <ArrowUpRight className="home-link-arrow" size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
